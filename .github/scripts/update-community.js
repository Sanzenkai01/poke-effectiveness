#!/usr/bin/env node
const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

const YT_API_KEY = process.env.YOUTUBE_API_KEY;
if(!YT_API_KEY){
  console.error('YOUTUBE_API_KEY environment variable is not set. Set it in repository secrets.');
  process.exit(1);
}

const TOPICS = {
  all: '#pstory',
  bosses: '#pstoryboss',
  catch: '#pstorycatch',
  clans: '#pstoryclan',
  updates: '#pstoryupdate',
  guides: '#pstoryguide'
};

const MAX_RESULTS = 50;
const MAX_DISPLAY = 15;

async function fetchFor(hashtag){
  const q = encodeURIComponent(hashtag);
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&order=date&maxResults=${MAX_RESULTS}&q=${q}&key=${encodeURIComponent(YT_API_KEY)}`;
  const resp = await fetch(url, { headers: { 'Accept': 'application/json' } });
  if(!resp.ok){
    const txt = await resp.text().catch(()=>'<no body>');
    throw new Error(`YouTube API error ${resp.status}: ${txt}`);
  }
  const json = await resp.json();
  if(!json || !Array.isArray(json.items)) return [];
  return json.items.map(it => ({
    id: it.id?.videoId || '',
    title: it.snippet?.title || '',
    description: it.snippet?.description || '',
    channelName: it.snippet?.channelTitle || '',
    channelId: it.snippet?.channelId || '',
    channelUrl: it.snippet?.channelId ? `https://www.youtube.com/channel/${it.snippet.channelId}` : '',
    publishedAt: it.snippet?.publishedAt || '',
    thumbnailUrl: it.snippet?.thumbnails?.high?.url || `https://i.ytimg.com/vi/${it.id?.videoId}/hqdefault.jpg`
  })).filter(x=>x.id);
}

async function run(){
  const out = { updatedAt: new Date().toISOString(), topics: {} };
  for(const [key, tag] of Object.entries(TOPICS)){
    console.log('Fetching', key, tag);
    try{
      const items = await fetchFor(tag);
      const byId = {};
      items.forEach(it => {
        if(!byId[it.id]) byId[it.id] = it;
        else {
          const a = new Date(byId[it.id].publishedAt).getTime() || 0;
          const b = new Date(it.publishedAt).getTime() || 0;
          if(b > a) byId[it.id] = it;
        }
      });
      const arr = Object.values(byId).sort((a,b)=> new Date(b.publishedAt) - new Date(a.publishedAt)).slice(0, MAX_DISPLAY);
      out.topics[key] = { items: arr };
    }catch(err){
      console.error('Failed fetching', key, err && err.message ? err.message : err);
      out.topics[key] = { items: [] };
    }
    await new Promise(r=>setTimeout(r, 1200));
  }

  const fp = path.join(process.cwd(), 'community.json');
  await fs.writeFile(fp, JSON.stringify(out, null, 2), 'utf8');
  console.log('Wrote', fp);

  try{
    execSync('git config user.name "github-actions[bot]"');
    execSync('git config user.email "41898282+github-actions[bot]@users.noreply.github.com"');
    execSync('git add community.json');
    execSync('git commit -m "chore: update community.json (scheduled)"', { stdio: 'inherit' });
    execSync('git push', { stdio: 'inherit' });
    console.log('Committed and pushed changes');
  }catch(e){
    const msg = String(e && e.message ? e.message : e);
    if(/nothing to commit|no changes/i.test(msg)){
      console.log('No changes to commit');
      process.exit(0);
    }
    console.error('Failed to commit/push changes', msg);
    process.exit(1);
  }
}

run().catch(err=>{ console.error(err); process.exit(1); });
