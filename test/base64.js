const test = require('ava');
const h1de = require('..');

test('base64', (t) => {
  t.pass(h1de.base64('willin@willin.org', 'echo d2lsbGluQHdpbGxpbi5vcmc= | base64 -d'));
});
