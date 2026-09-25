const assert = require('node:assert/strict');
const { JSDOM } = require('jsdom');
const base = (process.env.AUDIT_BASE_URL || 'http://127.0.0.1:3000').replace(/\/$/, '');
const canonicalHost = 'https://blanchardorthodontics.com';
async function run() {
  const sitemapResponse = await fetch(`${base}/sitemap.xml`);
  assert.equal(sitemapResponse.status, 200);
  const xml = await sitemapResponse.text();
  const sitemap = new JSDOM(xml, { contentType: 'text/xml' }).window.document;
  const urls = Array.from(sitemap.querySelectorAll('loc'), el => el.textContent);
  assert.ok(urls.includes(`${canonicalHost}/locations/tyler-tx`));
  assert.ok(urls.includes(`${canonicalHost}/locations/jacksonville-tx`));
  assert.ok(urls.some(url => url.includes('/article/')));
  assert.ok(urls.some(url => url.includes('/detail-team/')));
  assert.ok(!urls.some(url => url.endsWith('/orthodontists')));
  const titles = new Set(), descriptions = new Set(), results = [], internalLinks = new Set();
  for (const canonical of urls) {
    const pathname = new URL(canonical).pathname;
    const response = await fetch(`${base}${pathname}`);
    assert.equal(response.status, 200, pathname);
    const html = await response.text();
    const document = new JSDOM(html).window.document;
    const links = document.querySelectorAll('link[rel="canonical"]');
    assert.equal(links.length, 1, `${pathname}: exactly one canonical`);
    assert.equal(new URL(links[0].href).href, new URL(canonical).href, `${pathname}: self canonical`);
    const title = document.title, description = document.querySelector('meta[name="description"]')?.content;
    assert.ok(title && !titles.has(title), `${pathname}: unique title`); titles.add(title);
    assert.ok(description && !descriptions.has(description), `${pathname}: unique description`); descriptions.add(description);
    assert.ok(!/noindex/.test(document.querySelector('meta[name="robots"]')?.content || ''), pathname);
    assert.notEqual(document.querySelector('meta[name="google-site-verification"]')?.content, 'G-VZ37QDRHNB');
    if (pathname === '/about') {
      assert.ok(document.querySelector('a[href="/detail-team/dr-katelyn-blanchard"]'));
      assert.ok(!document.body.textContent.includes('No team members found'));
    }
    if (pathname.startsWith('/detail-team/')) {
      assert.ok(document.body.textContent.includes('Baylor'));
      assert.ok(!document.body.textContent.includes('Loading team member'));
    }
    if (pathname === '/appointments') {
      assert.ok(document.querySelector('iframe[title]')?.title);
      assert.ok(document.querySelector('a[href="tel:+19037076275"]'));
      assert.ok(document.querySelector('a[href="https://appointments.greyfinch.com/?division=339905"]'));
    }
    if (pathname === '/') {
      for (const input of document.querySelectorAll('form input:not([type="checkbox"])')) {
        assert.ok(input.id && input.labels.length, `Missing label on ${input.name}`);
      }
    }
    for (const anchor of document.querySelectorAll('a[href]')) {
      const url = new URL(anchor.getAttribute('href'), canonicalHost + pathname);
      if (url.origin === canonicalHost && url.pathname !== pathname) internalLinks.add(url.pathname);
    }
    results.push({ path: pathname, status: response.status, canonical, title });
  }
  const robots = await (await fetch(`${base}/robots.txt`)).text();
  assert.ok(!robots.includes('Disallow: /_next/'));
  assert.ok(robots.includes(`Sitemap: ${canonicalHost}/sitemap.xml`));
  for (const path of ['/test-env','/api/test-env','/api/test-form','/detail-team','/detail-article','/detail-category','/detail-info-banners','/category','/401','/not-a-real-page','/article/not-a-real-article','/detail-team/not-a-real-person','/locations/not-a-real-office']) {
    const response = await fetch(`${base}${path}`); assert.equal(response.status, 404, `${path}: must be 404`);
  }
  for (const [oldPath,newPath] of [['/appointments.html','/appointments'],['/about.html','/about'],['/service.html','/service'],['/locations.html','/locations'],['/article.html','/article'],['/privacy-policy.html','/privacy-policy'],['/index.html','/'],['/orthodontists','/about']]) {
    const response = await fetch(`${base}${oldPath}`, { redirect:'manual' });
    assert.ok([301,308].includes(response.status), `${oldPath}: permanent redirect`);
    assert.equal(new URL(response.headers.get('location'),base).pathname,newPath);
  }
  for (const pathname of internalLinks) {
    const response = await fetch(`${base}${pathname}`); assert.equal(response.status,200,`Broken internal destination: ${pathname}`);
  }
  console.log(JSON.stringify({ checkedPages: results.length, internalDestinations: internalLinks.size, results }, null, 2));
}
run().catch(error => { console.error(error.message); process.exitCode=1; });
