#!/usr/bin/env node
const fs = require('fs').promises;
const path = require('path');
const tls = require('tls');

const STATUS_FILE = path.join(process.cwd(), 'streamers-status.json');
const OUTPUT_FILE = path.join(process.cwd(), 'streamer-rat-timer.json');
const EXISTING_TIMER_URL = 'https://raw.githubusercontent.com/Sanzenkai01/poke-effectiveness/streamers-data/streamer-rat-timer.json';
const TWITCH_TOKEN = (process.env.TWITCH_OAUTH_TOKEN || '')
  .trim()
  .replace(/^oauth:/i, '');
const RAT_BOT_LOGIN = 'pstoryonline';
const RAT_INTERVAL_MS = 20 * 60 * 1000;
const RAT_EXPECTED_OFFSET_MS = 0;
const RAT_CLOCK_SKEW_TOLERANCE_MS = 5 * 1000;
const MONITOR_MS = Math.max(30 * 1000, Number(process.env.RAT_MONITOR_MS || 21 * 60 * 1000));
const JOIN_DELAY_MS = 900;
const MAX_CACHE_AGE_MS = 8 * 60 * 60 * 1000;

function normalizeChannelName(name){
  return (name || '').toString().trim().replace(/^#/, '').toLowerCase();
}

function parseTags(rawTags){
  if(!rawTags) return {};
  return rawTags.split(';').reduce((acc, entry) => {
    const separatorIndex = entry.indexOf('=');
    if(separatorIndex === -1){
      acc[entry] = '';
      return acc;
    }
    acc[entry.slice(0, separatorIndex)] = entry.slice(separatorIndex + 1);
    return acc;
  }, {});
}

function parseIrcMessage(line){
  let rest = (line || '').toString().trim();
  if(!rest) return null;

  let tags = {};
  let prefix = '';
  if(rest.startsWith('@')){
    const tagEnd = rest.indexOf(' ');
    if(tagEnd === -1) return null;
    tags = parseTags(rest.slice(1, tagEnd));
    rest = rest.slice(tagEnd + 1);
  }
  if(rest.startsWith(':')){
    const prefixEnd = rest.indexOf(' ');
    if(prefixEnd === -1) return null;
    prefix = rest.slice(1, prefixEnd);
    rest = rest.slice(prefixEnd + 1);
  }

  let trailing = '';
  const trailingIndex = rest.indexOf(' :');
  if(trailingIndex !== -1){
    trailing = rest.slice(trailingIndex + 2);
    rest = rest.slice(0, trailingIndex);
  }
  const parts = rest.split(' ').filter(Boolean);
  const command = parts.shift() || '';
  const params = trailing ? [...parts, trailing] : parts;
  return { tags, prefix, command, params, trailing };
}

function isRatCooldownStartMessage(message){
  const normalized = (message || '')
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
  const compact = normalized.replace(/[^a-z0-9]/g, '');
  const hasRatName = ['rattata', 'ratata', 'ratatta', 'rattatta'].some(term => compact.includes(term));
  const hasEscape = normalized.includes('escapou') || normalized.includes('fugiu');
  const hasBattle = normalized.includes('batalha') || normalized.includes('battle');
  const hasWild = normalized.includes('selvagem') || normalized.includes('wild');
  const hasRetry = normalized.includes('tente novamente') || normalized.includes('proxima vez');
  return hasRatName && hasEscape && (hasBattle || hasWild || hasRetry);
}

function isTrustedTimerSnapshot(value){
  const source = (value?.source || '').toString().trim().toLowerCase();
  const lastMessageAt = Number(value?.lastMessageAt || 0);
  const expectedNextAt = Number(value?.expectedNextAt || 0);
  if(!Number.isFinite(lastMessageAt) || lastMessageAt <= 0) return false;
  if(!Number.isFinite(expectedNextAt) || expectedNextAt <= lastMessageAt) return false;
  return source.includes('escape') || source === 'server-cache-escape';
}

function isRatBotSender(messageData){
  const prefixLogin = normalizeChannelName((messageData?.prefix || '').split('!')[0] || '');
  if(prefixLogin !== RAT_BOT_LOGIN) return false;
  const displayName = normalizeChannelName(messageData?.tags?.['display-name'] || '');
  return !displayName || displayName === RAT_BOT_LOGIN;
}

function normalizeTimerSnapshot(channel, value, now = Date.now()){
  const normalizedChannel = normalizeChannelName(channel || value?.channel);
  const lastMessageAt = Number(value?.lastMessageAt || 0);
  if(!normalizedChannel || !Number.isFinite(lastMessageAt) || lastMessageAt <= 0) return null;
  if(value?.lastMessageText && !isRatCooldownStartMessage(value.lastMessageText) && !isTrustedTimerSnapshot(value)) return null;

  const defaultExpectedNextAt = lastMessageAt + RAT_INTERVAL_MS + RAT_EXPECTED_OFFSET_MS;
  let expectedNextAt = Number.isFinite(Number(value?.expectedNextAt))
    ? Number(value.expectedNextAt)
    : defaultExpectedNextAt;
  if(
    expectedNextAt < defaultExpectedNextAt - RAT_CLOCK_SKEW_TOLERANCE_MS ||
    expectedNextAt > defaultExpectedNextAt + RAT_CLOCK_SKEW_TOLERANCE_MS
  ){
    expectedNextAt = defaultExpectedNextAt;
  }
  const updatedAt = Number.isFinite(Number(value?.updatedAt)) ? Number(value.updatedAt) : lastMessageAt;
  if(now - lastMessageAt > MAX_CACHE_AGE_MS) return null;

  return {
    channel: normalizedChannel,
    lastMessageAt,
    expectedNextAt,
    lastMessageText: value?.lastMessageText ? value.lastMessageText.toString() : '',
    streamStartedAt: value?.streamStartedAt ? value.streamStartedAt.toString() : '',
    source: value?.source ? value.source.toString() : 'server-cache',
    updatedAt: Math.max(updatedAt, lastMessageAt),
    persistedAt: now
  };
}

async function readJsonFile(filePath){
  try{
    return JSON.parse(await fs.readFile(filePath, 'utf8'));
  }catch(error){
    return null;
  }
}

async function fetchExistingTimerPayload(){
  try{
    const response = await fetch(EXISTING_TIMER_URL, { cache: 'no-store' });
    if(!response.ok) return null;
    return response.json();
  }catch(error){
    return null;
  }
}

async function validateTwitchToken(){
  if(!TWITCH_TOKEN){
    return {
      ok: false,
      reason: 'missing-token',
      message: 'TWITCH_OAUTH_TOKEN environment variable is not set.'
    };
  }

  try{
    const response = await fetch('https://id.twitch.tv/oauth2/validate', {
      headers: {
        Authorization: `OAuth ${TWITCH_TOKEN}`
      }
    });
    if(!response.ok){
      return {
        ok: false,
        reason: response.status === 401 ? 'auth-failed' : 'validate-failed',
        message: `Twitch token validation failed with ${response.status}.`
      };
    }

    const data = await response.json();
    const login = normalizeChannelName(data?.login || '');
    if(!login){
      return {
        ok: false,
        reason: 'token-login-missing',
        message: 'TWITCH_OAUTH_TOKEN is not a user token with a Twitch login.'
      };
    }

    return {
      ok: true,
      login,
      userId: data?.user_id ? data.user_id.toString() : '',
      scopes: Array.isArray(data?.scopes) ? data.scopes.map(scope => scope.toString()) : []
    };
  }catch(error){
    return {
      ok: false,
      reason: 'validate-error',
      message: error.message
    };
  }
}

function getMonitorChannels(statusPayload){
  const entries = statusPayload?.streamers
    ? Object.values(statusPayload.streamers)
    : [];
  return entries
    .map(entry => ({
      name: entry.name || entry.key,
      channel: normalizeChannelName(entry.key || entry.name),
      startedAt: entry.startedAt || '',
      isPstoryDrop: !!entry.isPstoryDrop,
      status: entry.status || ''
    }))
    .filter(entry => entry.channel)
    .sort((left, right) => {
      if(left.isPstoryDrop !== right.isPstoryDrop) return left.isPstoryDrop ? -1 : 1;
      if(left.status === 'online' && right.status !== 'online') return -1;
      if(right.status === 'online' && left.status !== 'online') return 1;
      return left.channel.localeCompare(right.channel);
    });
}

async function loadExistingTimers(){
  const localPayload = await readJsonFile(OUTPUT_FILE);
  const remotePayload = localPayload || await fetchExistingTimerPayload();
  const timers = new Map();
  const now = Date.now();
  Object.entries(remotePayload?.timers || {}).forEach(([channel, value]) => {
    const normalized = normalizeTimerSnapshot(channel, value, now);
    if(normalized){
      timers.set(normalized.channel, normalized);
    }
  });
  return timers;
}

function createTimerSnapshot(channel, messageData, candidateByChannel){
  const sentTimestamp = Number(messageData.tags?.['tmi-sent-ts'] || Date.now());
  const normalizedChannel = normalizeChannelName(channel);
  const candidate = candidateByChannel.get(normalizedChannel);
  return normalizeTimerSnapshot(normalizedChannel, {
    channel: normalizedChannel,
    lastMessageAt: sentTimestamp,
    expectedNextAt: sentTimestamp + RAT_INTERVAL_MS + RAT_EXPECTED_OFFSET_MS,
    lastMessageText: messageData.trailing || messageData.params?.[1] || '',
    streamStartedAt: candidate?.startedAt || '',
    source: 'github-action-chat-escape',
    updatedAt: Date.now()
  });
}

function monitorRatChat(channels, chatLogin){
  return new Promise((resolve, reject) => {
    if(!TWITCH_TOKEN){
      resolve({ reason: 'missing-token', updates: [] });
      return;
    }
    if(channels.length === 0){
      resolve({ reason: 'no-candidates', updates: [] });
      return;
    }

    const candidateByChannel = new Map(channels.map(candidate => [candidate.channel, candidate]));
    const updates = [];
    let buffer = '';
    let joinIndex = 0;
    let joinTimer = null;
    let monitorTimer = null;
    let settled = false;

    const socket = tls.connect({ host: 'irc.chat.twitch.tv', port: 6697, servername: 'irc.chat.twitch.tv' });
    const cleanup = () => {
      if(joinTimer) clearInterval(joinTimer);
      if(monitorTimer) clearTimeout(monitorTimer);
      socket.removeAllListeners();
      socket.end();
    };
    const finish = (result) => {
      if(settled) return;
      settled = true;
      cleanup();
      resolve(result);
    };
    const send = (payload) => {
      if(socket.writable){
        socket.write(`${payload}\r\n`);
      }
    };
    const startJoinQueue = () => {
      if(joinTimer) return;
      joinTimer = setInterval(() => {
        const next = channels[joinIndex++];
        if(!next){
          clearInterval(joinTimer);
          joinTimer = null;
          return;
        }
        send(`JOIN #${next.channel}`);
      }, JOIN_DELAY_MS);
    };

    socket.on('secureConnect', () => {
      send(`PASS oauth:${TWITCH_TOKEN}`);
      send(`NICK ${chatLogin}`);
      send('CAP REQ :twitch.tv/tags twitch.tv/commands');
      monitorTimer = setTimeout(() => finish({ reason: updates.length > 0 ? 'rat-found' : 'timeout', updates }), MONITOR_MS);
    });

    socket.on('data', chunk => {
      buffer += chunk.toString('utf8');
      const lines = buffer.split('\r\n');
      buffer = lines.pop() || '';
      lines.forEach(line => {
        if(!line) return;
        if(line.startsWith('PING')){
          send(`PONG :${line.includes(':') ? line.slice(line.indexOf(':') + 1) : 'tmi.twitch.tv'}`);
          return;
        }
        const message = parseIrcMessage(line);
        if(!message) return;
        if(message.command === '001' || message.command === 'GLOBALUSERSTATE'){
          startJoinQueue();
          return;
        }
        if(message.command === 'NOTICE' && /Login authentication failed/i.test(message.trailing || '')){
          finish({ reason: 'auth-failed', updates });
          return;
        }
        if(message.command !== 'PRIVMSG' || !isRatBotSender(message)) return;
        const channel = normalizeChannelName(message.params[0] || '');
        if(!candidateByChannel.has(channel) || !isRatCooldownStartMessage(message.trailing || message.params[1] || '')) return;
        const snapshot = createTimerSnapshot(channel, message, candidateByChannel);
        if(snapshot){
          updates.push(snapshot);
          finish({ reason: 'rat-found', updates });
        }
      });
    });

    socket.on('error', error => {
      if(settled) return;
      cleanup();
      reject(error);
    });

    socket.on('end', () => finish({ reason: 'socket-ended', updates }));
    socket.on('close', () => finish({ reason: 'socket-closed', updates }));
  });
}

async function writeOutput(timers, meta){
  const nowIso = new Date().toISOString();
  const serializedTimers = Object.fromEntries(
    Array.from(timers.values())
      .sort((left, right) => right.updatedAt - left.updatedAt)
      .map(timer => [timer.channel, timer])
  );
  const latest = Array.from(timers.values())
    .sort((left, right) => Number(right.lastMessageAt || 0) - Number(left.lastMessageAt || 0))[0] || null;

  const output = {
    updatedAt: nowIso,
    refreshMs: 40 * 60 * 1000,
    intervalMs: RAT_INTERVAL_MS,
    source: 'github-action-twitch-chat',
    monitor: meta,
    latest,
    timers: serializedTimers
  };
  await fs.writeFile(OUTPUT_FILE, JSON.stringify(output, null, 2), 'utf8');
  console.log(`Wrote ${OUTPUT_FILE} with ${Object.keys(serializedTimers).length} timer entries.`);
}

async function run(){
  const statusPayload = await readJsonFile(STATUS_FILE);
  const monitorChannels = getMonitorChannels(statusPayload);
  const timers = await loadExistingTimers();
  const startedAt = new Date().toISOString();
  const tokenInfo = await validateTwitchToken();
  let result;
  if(!tokenInfo.ok){
    result = { reason: tokenInfo.reason, error: tokenInfo.message, updates: [] };
  } else {
    try{
      result = await monitorRatChat(monitorChannels, tokenInfo.login);
    }catch(error){
      result = { reason: 'monitor-error', error: error.message, updates: [] };
    }
  }
  (result.updates || []).forEach(update => timers.set(update.channel, update));
  await writeOutput(timers, {
    startedAt,
    endedAt: new Date().toISOString(),
    reason: result.reason,
    candidateChannels: monitorChannels.map(candidate => candidate.channel),
    pstoryDropChannels: monitorChannels.filter(candidate => candidate.isPstoryDrop).map(candidate => candidate.channel),
    observedChannels: (result.updates || []).map(update => update.channel),
    monitorMs: MONITOR_MS,
    hasChatToken: Boolean(TWITCH_TOKEN),
    tokenLogin: tokenInfo.login || '',
    tokenScopes: tokenInfo.scopes || [],
    error: result.error || ''
  });
}

run().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
