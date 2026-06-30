#!/usr/bin/env node
const fs = require('fs').promises;
const path = require('path');
const tls = require('tls');

const STATUS_FILE = path.join(process.cwd(), 'streamers-status.json');
const OUTPUT_FILE = path.join(process.cwd(), 'streamer-rat-timer.json');
const EXISTING_TIMER_URL = 'https://raw.githubusercontent.com/Sanzenkai01/poke-effectiveness/streamers-data/streamer-rat-timer.json';
const TWITCH_CHAT_TOKEN = (process.env.TWITCH_CHAT_OAUTH_TOKEN || process.env.TWITCH_CHAT_TOKEN || process.env.TWITCH_OAUTH_TOKEN || '')
  .trim()
  .replace(/^oauth:/i, '');
const TWITCH_CHAT_USERNAME = (process.env.TWITCH_CHAT_USERNAME || 'selflessbot').trim().toLowerCase();
const RAT_BOT_LOGIN = 'pstoryonline';
const RAT_INTERVAL_MS = 20 * 60 * 1000;
const MONITOR_MS = Math.max(30 * 1000, Number(process.env.RAT_MONITOR_MS || 25 * 60 * 1000));
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

function isRatAnnouncement(message){
  const normalized = (message || '')
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
  const compact = normalized.replace(/[^a-z0-9]/g, '');
  const hasBattlePrompt = normalized.includes('!battle');
  const hasRatName = ['rattata', 'ratata', 'ratatta', 'rattatta'].some(term => compact.includes(term));
  const hasRatSpawn = hasRatName && (
    normalized.includes('apareceu') ||
    normalized.includes('selvagem') ||
    normalized.includes('spawnou') ||
    normalized.includes('spawnado')
  );
  const hasMysteryItem = normalized.includes('item misterioso');
  return (hasBattlePrompt && hasRatSpawn) || (hasBattlePrompt && hasMysteryItem);
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

  const expectedNextAt = Number.isFinite(Number(value?.expectedNextAt))
    ? Number(value.expectedNextAt)
    : lastMessageAt + RAT_INTERVAL_MS;
  const updatedAt = Number.isFinite(Number(value?.updatedAt)) ? Number(value.updatedAt) : lastMessageAt;
  if(now - lastMessageAt > MAX_CACHE_AGE_MS) return null;

  return {
    channel: normalizedChannel,
    lastMessageAt,
    expectedNextAt: Math.max(lastMessageAt, expectedNextAt),
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

function getCandidateChannels(statusPayload){
  const entries = statusPayload?.streamers
    ? Object.values(statusPayload.streamers)
    : [];
  return entries
    .filter(entry => entry?.status === 'online' && entry?.isPstoryDrop)
    .map(entry => ({
      name: entry.name || entry.key,
      channel: normalizeChannelName(entry.key || entry.name),
      startedAt: entry.startedAt || ''
    }))
    .filter(entry => entry.channel);
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
    expectedNextAt: sentTimestamp + RAT_INTERVAL_MS,
    lastMessageText: messageData.trailing || messageData.params?.[1] || '',
    streamStartedAt: candidate?.startedAt || '',
    source: 'github-action-chat',
    updatedAt: Date.now()
  });
}

function monitorRatChat(candidates){
  return new Promise((resolve, reject) => {
    if(!TWITCH_CHAT_TOKEN){
      resolve({ reason: 'missing-token', updates: [] });
      return;
    }
    if(candidates.length === 0){
      resolve({ reason: 'no-candidates', updates: [] });
      return;
    }

    const candidateByChannel = new Map(candidates.map(candidate => [candidate.channel, candidate]));
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
        const next = candidates[joinIndex++];
        if(!next){
          clearInterval(joinTimer);
          joinTimer = null;
          return;
        }
        send(`JOIN #${next.channel}`);
      }, JOIN_DELAY_MS);
    };

    socket.on('secureConnect', () => {
      send(`PASS oauth:${TWITCH_CHAT_TOKEN}`);
      send(`NICK ${TWITCH_CHAT_USERNAME}`);
      send('CAP REQ :twitch.tv/tags twitch.tv/commands');
      monitorTimer = setTimeout(() => finish({ reason: 'timeout', updates }), MONITOR_MS);
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
        if(!candidateByChannel.has(channel) || !isRatAnnouncement(message.trailing || message.params[1] || '')) return;
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
  const candidates = getCandidateChannels(statusPayload);
  const timers = await loadExistingTimers();
  const startedAt = new Date().toISOString();
  let result;
  try{
    result = await monitorRatChat(candidates);
  }catch(error){
    result = { reason: 'monitor-error', error: error.message, updates: [] };
  }
  (result.updates || []).forEach(update => timers.set(update.channel, update));
  await writeOutput(timers, {
    startedAt,
    endedAt: new Date().toISOString(),
    reason: result.reason,
    candidateChannels: candidates.map(candidate => candidate.channel),
    observedChannels: (result.updates || []).map(update => update.channel),
    monitorMs: MONITOR_MS,
    hasChatToken: Boolean(TWITCH_CHAT_TOKEN),
    error: result.error || ''
  });
}

run().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
