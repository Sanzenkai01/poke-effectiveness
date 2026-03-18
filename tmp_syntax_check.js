const fs = require('fs');
const vm = require('vm');
try {
  vm.createScript(fs.readFileSync('hoopa-portais/hoopa-portais.js','utf8'));
  console.log('ok');
} catch (e) {
  console.error(e.stack);
  process.exit(1);
}
