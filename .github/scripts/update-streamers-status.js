#!/usr/bin/env node
const fs = require('fs').promises;
const path = require('path');
const vm = require('vm');

const DEFAULT_TWITCH_CLIENT_ID = 'g5zg0400k4vhrx2g6xi4hgveruamlv';
const TWITCH_CLIENT_ID = (process.env.TWITCH_CLIENT_ID || DEFAULT_TWITCH_CLIENT_ID).trim();
const TWITCH_TOKEN = (process.env.TWITCH_OAUTH_TOKEN || process.env.TWITCH_BEARER_TOKEN || '')
  .trim()
  .replace(/^oauth:/i, '');

const OUTPUT_FILE = path.join(process.cwd(), 'streamers-status.json');
const REFRESH_MS = 10 * 60 * 1000;
const HELIX_CHUNK_SIZE = 100;

async function loadSharedStreamerCatalog(){
  const sourcePath = path.join(process.cwd(), 'js', 'streamers.shared.js');
  const source = await fs.readFile(sourcePath, 'utf8');
  const context = {
    console,
    window: {},
    setTimeout,
    clearTimeout
  };
  context.globalThis = context.window;
  vm.createContext(context);
  vm.runInContext(source, context, { filename: sourcePath });
  const shared = context.window.POKE_STREAMERS_SHARED;
  if(!shared || !Array.isArray(shared.STREAMERS)){
    throw new Error('Could not load POKE_STREAMERS_SHARED.STREAMERS.');
  }
  return shared;
}

function normalizeChannelName(name){
  return (name || '').toString().trim().replace(/^#/, '').toLowerCase();
}

function chunk(items, size){
  const chunks = [];
  for(let index = 0; index < items.length; index += size){
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

async function fetchHelix(endpoint, params){
  const url = new URL(`https://api.twitch.tv/helix/${endpoint}`);
  Object.entries(params || {}).forEach(([key, value]) => {
    if(Array.isArray(value)){
      value.forEach(entry => url.searchParams.append(key, entry));
    } else if(value !== undefined && value !== null) {
      url.searchParams.set(key, value);
    }
  });

  const response = await fetch(url, {
    headers: {
      'Client-ID': TWITCH_CLIENT_ID,
      'Authorization': `Bearer ${TWITCH_TOKEN}`,
      'Accept': 'application/json'
    }
  });

  if(!response.ok){
    const body = await response.text().catch(() => '');
    throw new Error(`Twitch Helix ${endpoint} failed with ${response.status}: ${body}`);
  }

  return response.json();
}

async function fetchStreams(streamers){
  const byLogin = new Map();
  for(const names of chunk(streamers, HELIX_CHUNK_SIZE)){
    const payload = await fetchHelix('streams', { user_login: names });
    (payload?.data || []).forEach(stream => {
      const key = normalizeChannelName(stream.user_login || stream.user_name);
      if(key) byLogin.set(key, stream);
    });
  }
  return byLogin;
}

async function fetchUsers(streamers){
  const byLogin = new Map();
  for(const names of chunk(streamers, HELIX_CHUNK_SIZE)){
    const payload = await fetchHelix('users', { login: names.map(normalizeChannelName) });
    (payload?.data || []).forEach(user => {
      const key = normalizeChannelName(user.login || user.display_name);
      if(key) byLogin.set(key, user);
    });
  }
  return byLogin;
}

function createStatusEntry(name, stream, user, detectPstoryTitleState){
  const key = normalizeChannelName(name);
  const title = stream?.title ? stream.title.toString().trim() : '';
  const pstoryStatus = stream ? detectPstoryTitleState(title) : false;

  return {
    name,
    key,
    status: stream ? 'online' : 'offline',
    title,
    startedAt: stream?.started_at || '',
    gameName: stream?.game_name || '',
    viewerCount: Number.isFinite(stream?.viewer_count) ? stream.viewer_count : 0,
    thumbnailUrl: stream?.thumbnail_url || '',
    avatarUrl: user?.profile_image_url || '',
    isPstory: pstoryStatus !== false,
    isPstoryDrop: pstoryStatus === 'drop',
    isPstoryNoDrop: pstoryStatus === 'nodrop',
    fetchedAt: new Date().toISOString()
  };
}

async function run(){
  if(!TWITCH_CLIENT_ID || !TWITCH_TOKEN){
    throw new Error('TWITCH_OAUTH_TOKEN or TWITCH_BEARER_TOKEN environment variable is not set.');
  }

  const shared = await loadSharedStreamerCatalog();
  const streamers = shared.STREAMERS;
  const detectPstoryTitleState = typeof shared.detectPstoryTitleState === 'function'
    ? shared.detectPstoryTitleState
    : () => false;

  const streamsByLogin = await fetchStreams(streamers);
  const usersByLogin = await fetchUsers(streamers);

  const entries = streamers.map(name => {
    const key = normalizeChannelName(name);
    return createStatusEntry(name, streamsByLogin.get(key), usersByLogin.get(key), detectPstoryTitleState);
  });

  const totals = entries.reduce((acc, entry) => {
    acc.total += 1;
    if(entry.status === 'online') acc.online += 1;
    else if(entry.status === 'offline') acc.offline += 1;
    else acc.partial += 1;
    if(entry.isPstory) acc.pstory += 1;
    if(entry.isPstoryDrop) acc.pstoryDrop += 1;
    return acc;
  }, { total: 0, online: 0, offline: 0, partial: 0, pstory: 0, pstoryDrop: 0 });

  const output = {
    updatedAt: new Date().toISOString(),
    refreshMs: REFRESH_MS,
    source: 'twitch-helix',
    totals,
    streamers: Object.fromEntries(entries.map(entry => [entry.key, entry]))
  };

  await fs.writeFile(OUTPUT_FILE, JSON.stringify(output, null, 2), 'utf8');
  console.log(`Wrote ${OUTPUT_FILE} with ${entries.length} streamer statuses.`);
}

run().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
