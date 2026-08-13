const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawn } = require('child_process');

const baseUrl = String(process.argv[2] || 'http://127.0.0.1:8011').replace(/\/+$/, '');
const outputRoot = path.resolve(process.argv[3] || '.codex-temp/visual-audit');
const browserPath = process.env.SMOKE_BROWSER
  || path.join(process.env.LOCALAPPDATA || '', 'ms-playwright', 'chromium-1228', 'chrome-win64', 'chrome.exe');

const defaultRoutes = [
  'home', 'tipos', 'fossils', 'treinamento', 'boost', 'pokemon', 'pokemons',
  'times', 'team-builder', 'hunt-builder', 'rotom-phone', 'mapa-interativo',
  'police-operation', 'slowpoke-well', 'fusao-de-held', 'helds', 'profissoes',
  'bosses-info', 'catch', 'streamers', 'youtube', 'hoopa', 'champion',
  'mewtwo', 'ranger-bosses', 'main-quest', 'planejador', 'horizons'
];

const defaultViewports = [
  { name: 'desktop', width: 1440, height: 1000, mobile: false, scale: 1 },
  { name: 'mobile', width: 390, height: 844, mobile: true, scale: 1 }
];

const requestedRoutes = String(process.env.VISUAL_AUDIT_ROUTES || '')
  .split(',')
  .map((value) => value.trim())
  .filter(Boolean);
const requestedViewports = String(process.env.VISUAL_AUDIT_VIEWPORTS || '')
  .split(',')
  .map((value) => value.trim())
  .filter(Boolean);
const routes = requestedRoutes.length
  ? defaultRoutes.filter((route) => requestedRoutes.includes(route))
  : defaultRoutes;
const viewports = requestedViewports.length
  ? defaultViewports.filter((viewport) => requestedViewports.includes(viewport.name))
  : defaultViewports;
const captureInteractions = String(process.env.VISUAL_AUDIT_INTERACTIONS || '') === '1';

const interactionExpressions = {
  hoopa: `(() => {
    const target = document.querySelector('.speedster-card');
    if (!target) return false;
    target.click();
    setTimeout(() => {
      const mapButton = document.querySelector('.speedster-modal-location-btn');
      if (mapButton) mapButton.click();
    }, 350);
    return true;
  })()`,
  pokemon: `(() => {
    const input = document.querySelector('#pokemon-filter-name');
    if (!input) return false;
    input.value = 'VenusaurTwo';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    setTimeout(() => {
      const target = document.querySelector('.pokemon-entry-card');
      if (target) target.click();
    }, 350);
    return true;
  })()`,
  pokemons: `(() => {
    const input = document.querySelector('#site-global-search-input');
    if (!input) return false;
    input.focus();
    input.value = 'te';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    return true;
  })()`,
  catch: `(() => {
    const input = document.querySelector('#catch-pokemon-search');
    if (!input) return false;
    input.focus();
    input.value = 'a';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    return true;
  })()`,
  champion: `(() => {
    const input = document.querySelector('#speedster-search');
    if (!input) return false;
    input.focus();
    input.value = 'a';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    return true;
  })()`,
  horizons: `(() => {
    const target = document.querySelector('.horizons-selector--category[data-value="silver"]');
    if (!target) return false;
    target.click();
    return true;
  })()`,
  'mapa-interativo': `(() => {
    const target = document.querySelector('#interactive-map-floor-down');
    if (!target) return false;
    target.click();
    return true;
  })()`
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForJson(url, attempts = 80) {
  for (let index = 0; index < attempts; index += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return response.json();
    } catch {}
    await delay(100);
  }
  throw new Error(`Chrome DevTools indisponivel em ${url}`);
}

class CdpClient {
  constructor(url) {
    this.nextId = 1;
    this.pending = new Map();
    this.socket = new WebSocket(url);
  }

  async open() {
    await new Promise((resolve, reject) => {
      this.socket.addEventListener('open', resolve, { once: true });
      this.socket.addEventListener('error', reject, { once: true });
    });
    this.socket.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      if (!message.id || !this.pending.has(message.id)) return;
      const { resolve, reject } = this.pending.get(message.id);
      this.pending.delete(message.id);
      if (message.error) reject(new Error(message.error.message));
      else resolve(message.result || {});
    });
  }

  send(method, params = {}) {
    const id = this.nextId++;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.socket.send(JSON.stringify({ id, method, params }));
    });
  }

  close() {
    this.socket.close();
  }
}

const diagnosticExpression = `(() => {
  const visible = (element) => {
    if (!element) return false;
    const style = getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    return style.display !== 'none' && style.visibility !== 'hidden'
      && Number(style.opacity) > 0 && rect.width > 1 && rect.height > 1;
  };
  const rect = (selector) => {
    const element = document.querySelector(selector);
    if (!visible(element)) return null;
    const value = element.getBoundingClientRect();
    return {
      x: Math.round(value.x), y: Math.round(value.y),
      width: Math.round(value.width), height: Math.round(value.height),
      right: Math.round(value.right), bottom: Math.round(value.bottom)
    };
  };
  const intersection = (left, right) => {
    if (!left || !right) return 0;
    const width = Math.max(0, Math.min(left.right, right.right) - Math.max(left.x, right.x));
    const height = Math.max(0, Math.min(left.bottom, right.bottom) - Math.max(left.y, right.y));
    return width * height;
  };
  const header = rect('.header');
  const headerElement = document.querySelector('.header');
  const headerStyle = headerElement ? getComputedStyle(headerElement) : null;
  const search = rect('#site-global-search');
  const title = rect('.header-title-cluster');
  const topbarPart = (selector) => {
    const element = document.querySelector(selector);
    if (!element) return null;
    const style = getComputedStyle(element);
    return {
      rect: rect(selector),
      display: style.display,
      position: style.position,
      gridColumn: style.gridColumn,
      gridRow: style.gridRow,
      order: style.order,
      margin: style.margin
    };
  };
  const main = rect('.app-main');
  const active = [...document.querySelectorAll('.app-main > [id^="content-"]')]
    .find((element) => visible(element));
  const activeRect = active ? active.getBoundingClientRect() : null;
  const viewportWidth = document.documentElement.clientWidth;
  const offenders = [...document.querySelectorAll('body *')].filter((element) => {
    if (!visible(element) || getComputedStyle(element).position === 'fixed') return false;
    if (element.closest('.app-sidebar') || element.closest('.interactive-map-stage')) return false;
    const value = element.getBoundingClientRect();
    return value.right > viewportWidth + 4 || value.left < -4;
  }).slice(0, 12).map((element) => {
    const value = element.getBoundingClientRect();
    return {
      tag: element.tagName.toLowerCase(),
      id: element.id,
      className: String(element.className || '').slice(0, 100),
      left: Math.round(value.left),
      right: Math.round(value.right),
      width: Math.round(value.width)
    };
  });
  return {
    href: location.href,
    title: document.title,
    activeId: active ? active.id : '',
    viewport: { width: viewportWidth, height: innerHeight },
    scroll: {
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight,
      horizontalOverflow: Math.max(0, document.documentElement.scrollWidth - viewportWidth)
    },
    shell: {
      header, search, title, main,
      headerStyle: headerStyle ? {
        display: headerStyle.display,
        direction: headerStyle.direction,
        gridTemplateColumns: headerStyle.gridTemplateColumns,
        gridAutoFlow: headerStyle.gridAutoFlow
      } : null,
      brand: topbarPart('#home-btn'),
      status: topbarPart('.wiki-topbar__status'),
      actions: topbarPart('.wiki-topbar__actions')
    },
    overlaps: {
      headerSearch: intersection(header, search),
      titleSearch: intersection(title, search)
    },
    active: activeRect ? {
      x: Math.round(activeRect.x), y: Math.round(activeRect.y),
      width: Math.round(activeRect.width), right: Math.round(activeRect.right)
    } : null,
    components: {
      bossCardHeights: [...document.querySelectorAll('.boss-role-card')]
        .filter(visible)
        .slice(0, 12)
        .map((element) => Math.round(element.getBoundingClientRect().height)),
      speedsterCardHeights: [...document.querySelectorAll('.speedster-card')]
        .filter(visible)
        .slice(0, 12)
        .map((element) => Math.round(element.getBoundingClientRect().height)),
      visibleBossDescriptions: [...document.querySelectorAll('.boss-role-card__description')]
        .filter(visible).length,
      visibleSpeedsterDescriptions: [...document.querySelectorAll('.speedster-card__description')]
        .filter(visible).length,
      openModal: Boolean(document.querySelector(
        '.speedster-modal[data-open="true"], #pokemon-details-modal[aria-hidden="false"]'
      )),
      modalContent: (() => {
        const element = document.querySelector('.speedster-modal[data-open="true"] .speedster-modal-content');
        if (!element) return null;
        const box = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        return {
          x: Math.round(box.x), y: Math.round(box.y),
          width: Math.round(box.width), height: Math.round(box.height),
          display: style.display, opacity: style.opacity, visibility: style.visibility,
          transform: style.transform
        };
      })(),
      globalSearchResult: (() => {
        const result = document.querySelector('.site-global-search__result');
        const copy = result?.querySelector('.site-global-search__copy');
        const title = result?.querySelector('.site-global-search__title');
        if (!result || !copy || !title) return null;
        const summarize = (element) => {
          const box = element.getBoundingClientRect();
          const style = getComputedStyle(element);
          return {
            width: Math.round(box.width), height: Math.round(box.height),
            display: style.display, color: style.color, opacity: style.opacity,
            visibility: style.visibility, fontSize: style.fontSize,
            overflow: style.overflow
          };
        };
        return { result: summarize(result), copy: summarize(copy), title: summarize(title), text: title.textContent };
      })(),
      interactiveMap: (() => {
        const image = document.querySelector('#interactive-map-image');
        const floor = document.querySelector('#interactive-map-floor-value');
        if (!image || !floor) return null;
        const style = getComputedStyle(image);
        return {
          floor: floor.textContent,
          width: image.width,
          height: image.height,
          naturalWidth: image.naturalWidth,
          naturalHeight: image.naturalHeight,
          transform: style.transform
        };
      })()
    },
    offenders
  };
})()`;

async function main() {
  if (!fs.existsSync(browserPath)) {
    throw new Error(`Chromium nao encontrado: ${browserPath}`);
  }

  fs.mkdirSync(outputRoot, { recursive: true });
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'poke-visual-audit-'));
  const port = 9333 + Math.floor(Math.random() * 400);
  const browser = spawn(browserPath, [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--hide-scrollbars',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profile}`,
    'about:blank'
  ], { windowsHide: true, stdio: 'ignore' });

  try {
    const targets = await waitForJson(`http://127.0.0.1:${port}/json/list`);
    const pageTarget = targets.find((target) => target.type === 'page');
    if (!pageTarget) throw new Error('Nenhuma pagina DevTools encontrada');
    const cdp = new CdpClient(pageTarget.webSocketDebuggerUrl);
    await cdp.open();
    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');

    const report = [];
    for (const viewport of viewports) {
      const viewportDir = path.join(outputRoot, viewport.name);
      fs.mkdirSync(viewportDir, { recursive: true });
      await cdp.send('Emulation.setDeviceMetricsOverride', {
        width: viewport.width,
        height: viewport.height,
        deviceScaleFactor: viewport.scale,
        mobile: viewport.mobile
      });

      for (const route of routes) {
        const url = `${baseUrl}/${route}?skipCounter=1&visualAudit=1`;
        await cdp.send('Page.navigate', { url });
        await delay(route === 'home' ? 4500 : 6000);
        const evaluation = await cdp.send('Runtime.evaluate', {
          expression: diagnosticExpression,
          returnByValue: true
        });
        const capture = await cdp.send('Page.captureScreenshot', {
          format: 'png',
          captureBeyondViewport: false,
          fromSurface: true
        });
        fs.writeFileSync(path.join(viewportDir, `${route}.png`), Buffer.from(capture.data, 'base64'));
        report.push({ route, viewportName: viewport.name, ...evaluation.result.value });
        process.stdout.write(`OK ${viewport.name} ${route}\n`);

        if (captureInteractions && interactionExpressions[route]) {
          const interaction = await cdp.send('Runtime.evaluate', {
            expression: interactionExpressions[route],
            returnByValue: true
          });
          if (interaction.result.value) {
            await delay(1800);
            const stateEvaluation = await cdp.send('Runtime.evaluate', {
              expression: diagnosticExpression,
              returnByValue: true
            });
            const stateCapture = await cdp.send('Page.captureScreenshot', {
              format: 'png',
              captureBeyondViewport: false,
              fromSurface: true
            });
            fs.writeFileSync(
              path.join(viewportDir, `${route}-state.png`),
              Buffer.from(stateCapture.data, 'base64')
            );
            report.push({
              route: `${route}-state`,
              viewportName: viewport.name,
              ...stateEvaluation.result.value
            });
            process.stdout.write(`OK ${viewport.name} ${route} state\n`);
          }
        }
      }
    }

    fs.writeFileSync(
      path.join(outputRoot, 'report.json'),
      `${JSON.stringify(report, null, 2)}\n`,
      'utf8'
    );
    cdp.close();
  } finally {
    browser.kill();
    await delay(500);
    try {
      fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
    } catch {}
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
