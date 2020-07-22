const test = require('ava');
const h1de = require('..');

test('tr', (t) => {
  t.pass(h1de.tr('willin@willin.org'));
});

test('tr with placeholder', (t) => {
  t.pass(h1de.tr('willin@willin.org', '123'));
});
