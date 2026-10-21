const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const sourcePath = path.join(__dirname, '..', 'js', 'pokemon-search.js');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(sourcePath, 'utf8'), context, { filename: sourcePath });

const { normalizePokemonSearchText, getLimitedPokemonSearchEntries } = context.window.PokemonSearch;
assert.equal(normalizePokemonSearchText('  POKÉMON '), 'pokemon');

const entries = [
  { name: 'Pikachu Libre' },
  { name: 'Pikachu' },
  { name: 'Raichu' },
  { name: 'Pikáchu' }
];
const results = getLimitedPokemonSearchEntries(entries, 'Pikachu', (entry) => entry.name, 3);
assert.deepEqual(Array.from(results, (entry) => entry.name), ['Pikachu', 'Pikáchu', 'Pikachu Libre']);
assert.deepEqual(
  Array.from(getLimitedPokemonSearchEntries(entries, '', (entry) => entry.name, 2), (entry) => entry.name),
  ['Pikachu Libre', 'Pikachu']
);

console.log('Pokemon search tests passed.');
