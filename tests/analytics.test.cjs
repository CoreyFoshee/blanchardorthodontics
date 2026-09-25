const { test } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { buildSync } = require('esbuild');

buildSync({ entryPoints: ['lib/analytics.ts'], outfile: '.qa/analytics.cjs', bundle: true, platform: 'node', format: 'cjs' });
const { trackEvent } = require(path.resolve('.qa/analytics.cjs'));
test('analytics sends only controlled fields and excludes URL query/patient data', () => {
  const calls = [];
  global.window = { location: { pathname: '/locations/tyler-tx', search: '?email=patient@example.invalid' }, gtag: (...args) => calls.push(args) };
  trackEvent('generate_lead', 'locations');
  assert.deepEqual(calls, [['event', 'generate_lead', { office: 'tyler', form_name: 'locations' }]]);
  delete global.window;
});
test('events queue correctly before Analytics has initialized', () => {
  global.window = { location: { pathname: '/appointments' } };
  trackEvent('phone_click');
  assert.deepEqual(Array.from(window.dataLayer[0]), ['event', 'phone_click', { office: 'unspecified' }]);
  delete global.window;
});
