const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const appHtml = fs.readFileSync(path.join(root, 'app.html'), 'utf8');
const panelTags = [...appHtml.matchAll(/<div\b[^>]*\bdata-panel-fragment="[^"]+"[^>]*>/g)]
  .map(([tag]) => tag);
const errors = [];
const seenFragments = new Set();

function getAttribute(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}="([^"]*)"`));
  return match ? match[1] : '';
}

if (panelTags.length === 0) {
  errors.push('Nenhum painel lazy-loaded foi encontrado em app.html.');
}

for (const tag of panelTags) {
  const name = getAttribute(tag, 'data-panel-fragment');
  const fragmentPath = getAttribute(tag, 'data-panel-fragment-path');
  const usesStylesheet = getAttribute(tag, 'data-panel-fragment-styles') !== 'none';

  if (!name || seenFragments.has(name)) {
    errors.push(`Nome de painel vazio ou duplicado: "${name}".`);
    continue;
  }
  seenFragments.add(name);

  if (!fragmentPath || path.isAbsolute(fragmentPath) || fragmentPath.includes('..')) {
    errors.push(`Caminho inválido para o painel "${name}": "${fragmentPath}".`);
    continue;
  }

  const pageDirectory = fragmentPath.split('/')[0];
  const routeEntry = path.join(root, pageDirectory, 'index.html');
  const fragmentFile = path.join(root, `${fragmentPath}.html`);
  const stylesheetFile = path.join(root, `${fragmentPath}.css`);

  if (!fs.existsSync(routeEntry)) {
    errors.push(`A rota "${pageDirectory}" não tem index.html (${name}).`);
  }
  if (!fs.existsSync(fragmentFile)) {
    errors.push(`Fragmento ausente para "${name}": ${path.relative(root, fragmentFile)}.`);
  }
  if (usesStylesheet && !fs.existsSync(stylesheetFile)) {
    errors.push(`CSS ausente para "${name}": ${path.relative(root, stylesheetFile)}.`);
    continue;
  }
  if (!usesStylesheet) continue;

  const stylesheet = fs.readFileSync(stylesheetFile, 'utf8');
  for (const [, rawUrl] of stylesheet.matchAll(/url\(([^)]*)\)/gi)) {
    const assetUrl = rawUrl.trim().replace(/^['"]|['"]$/g, '').trim();
    if (!assetUrl || /^(?:data:|https?:|\/\/|#)/i.test(assetUrl)) continue;

    const assetPath = assetUrl.startsWith('/')
      ? path.join(root, assetUrl.slice(1))
      : path.resolve(path.dirname(stylesheetFile), assetUrl);
    if (!fs.existsSync(assetPath)) {
      errors.push(
        `Asset CSS ausente em ${path.relative(root, stylesheetFile)}: ${assetUrl}.`
      );
    }
  }
}

const legacyDirectory = path.join(root, 'fragments');
if (fs.existsSync(legacyDirectory) && fs.readdirSync(legacyDirectory).length > 0) {
  errors.push('A pasta fragments/ ainda contém arquivos.');
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`OK ${panelTags.length} painéis associados às pastas de rota.`);
}
