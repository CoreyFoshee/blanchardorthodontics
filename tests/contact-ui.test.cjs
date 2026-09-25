const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { buildSync } = require('esbuild');
const { JSDOM } = require('jsdom');
const React = require('react');
let createRoot, ContactForm;
const oldFetch = global.fetch;
before(() => {
  buildSync({ entryPoints: ['src/components/ContactForm.tsx'], outfile: '.qa/contact-ui.cjs', bundle: true, platform: 'node', format: 'cjs', jsx: 'automatic', external: ['react','react-dom'] });
  const dom = new JSDOM('<html><body><div id="root"></div></body></html>', { url:'https://blanchardorthodontics.com/' });
  global.window = dom.window; global.document = dom.window.document;
  global.IS_REACT_ACT_ENVIRONMENT = true;
  createRoot = require('react-dom/client').createRoot;
  ContactForm = require(path.resolve('.qa/contact-ui.cjs')).ContactForm;
});
after(() => { global.fetch = oldFetch; delete global.window; delete global.document; delete global.IS_REACT_ACT_ENVIRONMENT; });

async function submit(response) {
  const events = [], pixels = [];
  window.gtag = (...args) => events.push(args); window.fbq = (...args) => pixels.push(args);
  let sends=0; global.fetch = async () => { sends++; return response; };
  const root = createRoot(document.getElementById('root'));
  await React.act(async () => root.render(React.createElement(ContactForm)));
  const fields = document.querySelectorAll('input:not([type=checkbox])');
  assert.equal(fields.length,4); for (const field of fields) assert.equal(field.labels.length,1);
  await React.act(async () => document.querySelector('input[type=checkbox]').click());
  await React.act(async () => { document.querySelector('form').dispatchEvent(new window.Event('submit',{bubbles:true,cancelable:true})); });
  const result = { events, pixels, sends, text: document.body.textContent };
  await React.act(async () => root.unmount());
  return result;
}
test('a rejected request never fires GA4 or Meta lead events', async () => {
  const result = await submit(new Response(JSON.stringify({error:'Rejected'}),{status:503}));
  assert.equal(result.sends,1); assert.ok(result.text.includes('could not be sent'));
  assert.equal(result.events.filter(x=>x[1]==='generate_lead').length,0); assert.equal(result.pixels.length,0);
});
test('a confirmed request emits one lead without form field values', async () => {
  const result = await submit(new Response(JSON.stringify({success:true}),{status:200}));
  assert.equal(result.sends,1); assert.ok(result.text.includes('has been sent'));
  const leads=result.events.filter(x=>x[1]==='generate_lead'); assert.equal(leads.length,1);
  assert.deepEqual(leads[0][2], {office:'unspecified',form_name:'home'});
  assert.equal(result.pixels.length,1); assert.equal(result.pixels[0][1],'Lead');
});
