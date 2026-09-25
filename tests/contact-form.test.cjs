const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { buildSync } = require('esbuild');
let handler;
const originalFetch = global.fetch;
const originalWebhook = process.env.GOHIGHLEVEL_WEBHOOK_URL;

before(() => {
  buildSync({ entryPoints: ['src/app/api/contact-form/route.ts'], outfile: '.qa/contact-api.cjs', bundle: true, platform: 'node', format: 'cjs', external: ['next/server'] });
  handler = require(path.resolve('.qa/contact-api.cjs'));
});
after(() => { global.fetch = originalFetch; if (originalWebhook === undefined) delete process.env.GOHIGHLEVEL_WEBHOOK_URL; else process.env.GOHIGHLEVEL_WEBHOOK_URL = originalWebhook; });
const data = { name: 'Test Patient', email: 'test@example.invalid', phone: '9035550100', consent: true, subject: 'Test request' };
const request = value => new Request('http://localhost/api/contact-form', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(value) });

test('missing consent fails validation without attempting delivery', async () => {
  let calls = 0; global.fetch = async () => { calls++; throw new Error('Should not send'); };
  const response = await handler.POST(request({ ...data, consent: false }));
  assert.equal(response.status, 400); assert.equal(calls, 0);
});
test('a non-boolean consent value cannot bypass validation', async () => {
  let calls = 0; global.fetch = async () => { calls++; throw new Error('Should not send'); };
  const response = await handler.POST(request({ ...data, consent: 'false' }));
  assert.equal(response.status, 400); assert.equal(calls, 0);
});
test('missing CRM configuration returns failure, not success', async () => {
  delete process.env.GOHIGHLEVEL_WEBHOOK_URL;
  let calls = 0; global.fetch = async () => { calls++; throw new Error('Should not send'); };
  const response = await handler.POST(request(data));
  assert.equal(response.status, 500); assert.equal((await response.json()).success, undefined); assert.equal(calls, 0);
});
test('CRM rejection is not reported as a successful inquiry', async () => {
  process.env.GOHIGHLEVEL_WEBHOOK_URL = 'https://crm.example.invalid/webhook';
  global.fetch = async () => new Response('Rejected', { status: 503 });
  const response = await handler.POST(request(data));
  assert.equal(response.status, 500); assert.equal((await response.json()).success, undefined);
});
test('success is returned only after a successful CRM response', async () => {
  process.env.GOHIGHLEVEL_WEBHOOK_URL = 'https://crm.example.invalid/webhook';
  let calls = 0;
  global.fetch = async (url, options) => {
    calls++; assert.equal(url, process.env.GOHIGHLEVEL_WEBHOOK_URL);
    const sent = JSON.parse(options.body); assert.equal(sent.email, data.email); assert.equal(sent.consent, true);
    return new Response('Accepted', { status: 200 });
  };
  const response = await handler.POST(request(data));
  assert.equal(response.status, 200); const result = await response.json();
  assert.equal(result.success, true); assert.equal(calls, 1); assert.equal(result.result, undefined);
});
