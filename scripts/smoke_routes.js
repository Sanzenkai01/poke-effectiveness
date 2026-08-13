const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const baseUrl = String(process.argv[2] || 'http://127.0.0.1:8001').replace(/\/+$/, '');

const routes = [
  {
    path: '/',
    label: 'root',
    checks: [
      { pattern: /data-active-tab="pokemons"/i, description: 'pokemons active tab' },
      { pattern: /aria-label="Lista de pokemons"/i, description: 'main pokemon grid' },
      { pattern: /data-global-search-ready="true"/i, description: 'global search initialized' }
    ]
  },
  {
    path: '/home',
    label: 'home',
    checks: [
      { pattern: /data-active-tab="pokemons"/i, description: 'legacy home redirects to pokemons' },
      { pattern: /aria-label="Lista de pokemons"/i, description: 'main pokemon grid' }
    ]
  },
  {
    path: '/tipos',
    label: 'tipos',
    checks: [
      { pattern: /data-active-tab="effectiveness"/i, description: 'tipos active tab' },
      { pattern: /id="content-effectiveness"/i, description: 'tipos panel' }
    ]
  },
  {
    path: '/fossils',
    label: 'fossils',
    checks: [
      { pattern: /data-active-tab="fossils"/i, description: 'fossils active tab' }
    ]
  },
  {
    path: '/treinamento',
    label: 'treinamento',
    checks: [
      { pattern: /data-active-tab="calculator"/i, description: 'treinamento active tab' }
    ]
  },
  {
    path: '/boost',
    label: 'boost',
    checks: [
      { pattern: /data-active-tab="boost"/i, description: 'boost active tab' },
      { pattern: /id="boost-hero-summary"/i, description: 'boost hero summary' }
    ]
  },
  {
    path: '/pokemon',
    label: 'pokemon',
    checks: [
      { pattern: /data-active-tab="pokemons"/i, description: 'pokemon active tab' },
      { pattern: /aria-label="Lista de pokemons"/i, description: 'unified pokemon grid' }
    ]
  },
  {
    path: '/pokemons',
    label: 'pokemons',
    checks: [
      { pattern: /data-active-tab="pokemons"/i, description: 'pokemons active tab' },
      { pattern: /aria-label="Lista de pokemons"/i, description: 'canonical pokemon grid' }
    ]
  },
  {
    path: '/times',
    label: 'times',
    checks: [
      { pattern: /data-active-tab="times"/i, description: 'times active tab' },
      { pattern: /id="times-card-grid"/i, description: 'times grid' }
    ]
  },
  {
    path: '/team-builder',
    label: 'team-builder',
    checks: [
      { pattern: /data-active-tab="team-builder"/i, description: 'team builder active tab' },
      { pattern: /id="team-builder-slots"/i, description: 'team builder slots' }
    ]
  },
  {
    path: '/hunt-builder',
    label: 'hunt-builder',
    checks: [
      { pattern: /data-active-tab="hunt-builder"/i, description: 'hunt builder active tab' },
      { pattern: /id="hunt-builder-search"/i, description: 'hunt builder search' },
      { pattern: /id="hunt-builder-team"/i, description: 'hunt builder team grid' }
    ]
  },
  {
    path: '/rotom-phone',
    label: 'rotom-phone',
    checks: [
      { pattern: /data-active-tab="rotom-phone"/i, description: 'rotom phone active tab' },
      { pattern: /id="content-rotom-phone"/i, description: 'rotom phone panel' },
      { pattern: /id="rotom-phone-kanto-title"/i, description: 'rotom kanto section' }
    ]
  },
  {
    path: '/mapa-interativo',
    label: 'mapa-interativo',
    checks: [
      { pattern: /id="content-mapa-interativo"/i, description: 'interactive map panel' },
      { pattern: /id="interactive-map-viewport"/i, description: 'interactive map viewport' }
    ]
  },
  {
    path: '/police-operation',
    label: 'police-operation',
    checks: [
      { pattern: /data-active-tab="police-operation"/i, description: 'police operation active tab' },
      { pattern: /id="content-police-operation"/i, description: 'police operation panel' },
      { pattern: /id="police-operation-rewards-title"/i, description: 'police operation rewards section' }
    ]
  },
  {
    path: '/slowpoke-well',
    label: 'slowpoke-well',
    checks: [
      { pattern: /data-active-tab="slowpoke-well"/i, description: 'slowpoke well active tab' },
      { pattern: /id="content-slowpoke-well"/i, description: 'slowpoke well panel' },
      { pattern: /id="slowpoke-well-rewards-title"/i, description: 'slowpoke rewards section' }
    ]
  },
  {
    path: '/liga-pokemon',
    label: 'liga-pokemon',
    checks: [
      { pattern: /data-active-tab="liga-pokemon"/i, description: 'liga pokemon active tab' },
      { pattern: /id="content-liga-pokemon"/i, description: 'liga pokemon panel' },
      { pattern: /id="liga-pokemon-kanto-grid"/i, description: 'kanto capture grid' },
      { pattern: /id="liga-pokemon-victory-title"/i, description: 'victory road section' }
    ]
  },
  {
    path: '/fusao-de-held',
    label: 'fusao-de-held',
    checks: [
      { pattern: /data-active-tab="fusao-de-held"/i, description: 'fusao de held active tab' },
      { pattern: /id="content-fusao-de-held"/i, description: 'fusao de held panel' },
      { pattern: /id="held-fusion-cost-title"/i, description: 'fusao de held costs section' }
    ]
  },
  {
    path: '/helds',
    label: 'helds',
    checks: [
      { pattern: /data-active-tab="helds"/i, description: 'helds active tab' },
      { pattern: /id="content-helds"/i, description: 'helds panel' },
      { pattern: /id="primary-helds-title"/i, description: 'primary helds section' },
      { pattern: /id="gems-title"/i, description: 'gems section' },
      { pattern: /id="boss-consumables-title"/i, description: 'boss consumables section' }
    ]
  },
  {
    path: '/profissoes',
    label: 'profissoes',
    checks: [
      { pattern: /data-active-tab="profissoes"/i, description: 'profissoes active tab' },
      { pattern: /id="content-profissoes"/i, description: 'profissoes panel' },
      { pattern: /data-profession-select="designer"/i, description: 'designer selection card' },
      { pattern: /data-profession-select="breeder"/i, description: 'breeder selection card' },
      { pattern: /data-profession-select="photographer"/i, description: 'photographer selection card' },
      { pattern: /data-profession-select="researcher"/i, description: 'researcher selection card' }
    ]
  },
  {
    path: '/bosses-info',
    label: 'bosses-info',
    checks: [
      { pattern: /data-active-tab="bosses-info"/i, description: 'bosses info active tab' },
      { pattern: /id="content-bosses-info"/i, description: 'bosses info panel' },
      { pattern: /id="bosses-info-grid"/i, description: 'bosses info grid' }
    ]
  },
  {
    path: '/catch',
    label: 'catch',
    checks: [
      { pattern: /data-active-tab="catch"/i, description: 'catch active tab' },
      { pattern: /id="catch-description"/i, description: 'catch description' }
    ]
  },
  {
    path: '/streamers',
    label: 'streamers',
    checks: [
      { pattern: /data-active-tab="streamers"/i, description: 'streamers active tab' },
      { pattern: /id="streamer-grid"/i, description: 'streamer grid' }
    ]
  },
  {
    path: '/youtube',
    label: 'youtube',
    checks: [
      { pattern: /data-active-tab="community"/i, description: 'youtube active tab' },
      { pattern: /id="community-video-frame"/i, description: 'community player iframe' }
    ]
  },
  {
    path: '/hoopa',
    label: 'hoopa',
    checks: [
      { pattern: /data-active-tab="bosses"/i, description: 'bosses active tab' },
      { pattern: /data-boss-mode="hoopa"/i, description: 'hoopa boss mode' }
    ]
  },
  {
    path: '/hoopa/mega-absol',
    label: 'hoopa-mega-absol',
    checks: [
      { pattern: /id="speedster-modal"[^>]*aria-hidden="false"|aria-hidden="false"[^>]*id="speedster-modal"/i, description: 'mega absol modal open' },
      { pattern: /Picks para Mega Absol/i, description: 'mega absol recommendation target' },
      { pattern: /speedster-reco-name[^>]*>Dedenne</i, description: 'instinct speedster recommendation' },
      { pattern: /speedster-reco-name[^>]*>Dachsbun</i, description: 'mystic speedster recommendation' },
      { pattern: /speedster-reco-name[^>]*>Ribombee</i, description: 'valor speedster recommendation' }
    ]
  },
  {
    path: '/champion',
    label: 'champion',
    checks: [
      { pattern: /data-active-tab="bosses"/i, description: 'bosses active tab' },
      { pattern: /data-boss-mode="champion"/i, description: 'champion boss mode' }
    ]
  },
  {
    path: '/mewtwo',
    label: 'mewtwo',
    checks: [
      { pattern: /data-active-tab="bosses"/i, description: 'bosses active tab' },
      { pattern: /data-boss-mode="mew2"/i, description: 'mewtwo boss mode' }
    ]
  },
  {
    path: '/ranger-bosses',
    label: 'ranger-bosses',
    checks: [
      { pattern: /data-active-tab="bosses"/i, description: 'bosses active tab' },
      { pattern: /data-boss-mode="special"/i, description: 'special boss mode' },
      { pattern: /Ranger Bosses/i, description: 'ranger bosses label' }
    ]
  },
  {
    path: '/main-quest',
    label: 'main-quest',
    checks: [
      { pattern: /data-active-tab="bosses"/i, description: 'bosses active tab' },
      { pattern: /data-boss-mode="mainquest"/i, description: 'main quest boss mode' },
      { pattern: /Main Quest/i, description: 'main quest label' }
    ]
  },
  {
    path: '/planejador',
    label: 'planejador',
    checks: [
      { pattern: /data-active-tab="bosses"/i, description: 'bosses active tab' },
      { pattern: /data-boss-mode="planner"/i, description: 'planner boss mode' }
    ]
  },
  {
    path: '/horizons',
    label: 'horizons',
    checks: [
      { pattern: /data-active-tab="bosses"/i, description: 'bosses active tab' },
      { pattern: /data-boss-mode="horizons"/i, description: 'horizons boss mode' }
    ]
  }
];

function collectPlaywrightBrowserCandidates() {
  const localAppData = process.env.LOCALAPPDATA || '';
  if (!localAppData) return [];

  const playwrightRoot = path.join(localAppData, 'ms-playwright');
  if (!fs.existsSync(playwrightRoot)) return [];

  return fs.readdirSync(playwrightRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name.startsWith('chromium-'))
    .sort((a, b) => b.name.localeCompare(a.name, undefined, { numeric: true }))
    .flatMap((entry) => ([
      path.join(playwrightRoot, entry.name, 'chrome-win64', 'chrome.exe'),
      path.join(playwrightRoot, entry.name, 'chrome-win', 'chrome.exe')
    ]));
}

function findBrowserBinary() {
  const manual = String(process.env.SMOKE_BROWSER || '').trim();
  const candidates = [
    manual,
    ...collectPlaywrightBrowserCandidates(),
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
  ].filter(Boolean);

  return candidates.find((candidate) => fs.existsSync(candidate)) || '';
}

function fetchWithHeadlessBrowser(browserPath, url) {
  const sharedArgs = ['--disable-gpu', '--virtual-time-budget=15000', '--dump-dom', url];
  const candidateArgSets = [
    ['--headless=new', ...sharedArgs],
    ['--headless', ...sharedArgs]
  ];

  for (const args of candidateArgSets) {
    const result = spawnSync(browserPath, args, {
      encoding: 'utf8',
      timeout: 45000,
      windowsHide: true,
      maxBuffer: 8 * 1024 * 1024
    });

    if (result.status === 0 && result.stdout) {
      return result.stdout;
    }
  }

  throw new Error(`Nao foi possivel obter o DOM renderizado com ${browserPath}`);
}

async function assertHttpOk(url) {
  const response = await fetch(url, { redirect: 'follow' });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} em ${url}`);
  }
}

async function main() {
  const browserPath = findBrowserBinary();
  if (!browserPath) {
    throw new Error('Nenhum navegador compativel encontrado para smoke test headless.');
  }

  console.log(`Usando navegador: ${browserPath}`);

  for (const route of routes) {
    const url = new URL(`${baseUrl}${route.path}`);
    url.searchParams.set('skipCounter', '1');
    const routeUrl = url.toString();
    await assertHttpOk(routeUrl);
    const dom = fetchWithHeadlessBrowser(browserPath, routeUrl);

    route.checks.forEach((check) => {
      if (!check.pattern.test(dom)) {
        throw new Error(`${route.label}: marcador ausente (${check.description}) em ${routeUrl}`);
      }
    });

    console.log(`OK ${route.label} -> ${routeUrl}`);
  }
}

main().catch((error) => {
  console.error(`Smoke routes failed: ${error.message}`);
  process.exitCode = 1;
});
