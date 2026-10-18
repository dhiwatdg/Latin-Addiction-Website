import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const built = new URL('../dist/', import.meta.url);
const read = route => readFileSync(new URL(route, built), 'utf8');
const decode = text => text.replace(/&amp;/g, '&').replace(/&#(?:x([\da-f]+)|(\d+));/gi, (_, hex, dec) => String.fromCodePoint(parseInt(hex ?? dec, hex ? 16 : 10))).replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const attr = (attrs, name) => decode(attrs.match(new RegExp(`(?:^|\\s)${name}="([^"]*)"`))?.[1] ?? '');
const anchors = html => [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].map(([, attrs, text]) => ({ href: attr(attrs, 'href'), classes: attr(attrs, 'class'), label: attr(attrs, 'aria-label'), text: decode(text.replace(/<[^>]*>/g, '').trim()) }));
const message = link => new URL(link.href).searchParams.get('text');
const floating = html => anchors(html).find(link => link.classes.includes('fixed bottom-6'));
const sticky = html => anchors(html.match(/<div\b[^>]*class="[^"]*mobile-cta[^\"]*"[^>]*>([\s\S]*?)<\/div>/)?.[1] ?? '')[0];
const wa = html => anchors(html).filter(link => link.href.startsWith('https://wa.me/'));
const trial = "Hi! I'd like to try a free Bachata class.";

const matrix = [
  ['index.html', trial, 'Ask about your free class'],
  ['reviews/index.html', trial, 'Ask about your free class'],
  ['404.html', trial, 'Ask about your free class'],
  ...[['milton-keynes', 'Milton Keynes'], ['leicester', 'Leicester'], ['reading', 'Reading']].map(([slug, city]) => [`${slug}/index.html`, `Hi! I'd like to try a free Bachata class in ${city}.`, 'Ask about your free class']),
  ['classes/index.html', "Hi! I'm not sure which level to join — can you help?", 'Help choosing your class'],
  ['faq/index.html', 'Hi! I have a question about Latin Addiction.', 'Ask us on WhatsApp'],
  ['about/index.html', "Hi! I'd like to find out about Latin Addiction classes, private tuition or an event.", 'Chat with us on WhatsApp'],
  ['services/corporate/index.html', "Hi! I'm interested in a corporate Salsa or Bachata workshop. Can we discuss the date, location and group size?", 'Discuss your corporate event'],
  ['services/hire-us/index.html', "Hi! I'd like to discuss Salsa, Bachata or a DJ set for an event. Can we talk about the date, location and guests?", 'Discuss your event'],
];

test('floating and mobile WhatsApp controls agree with each page purpose and accessible label', () => {
  for (const [route, expected, label] of matrix) {
    const html = read(route); const desktop = floating(html); const phone = sticky(html);
    assert.ok(desktop && phone, route);
    assert.equal(message(desktop), expected, route);
    assert.equal(message(phone), expected, route);
    assert.equal(desktop.label, label, route);
    assert.equal(phone.text, label, route);
  }
  assert.equal(message(floating(read('pricing/index.html'))), 'Hi! I need help choosing a class or pass.');
  assert.equal(sticky(read('pricing/index.html')), undefined);
  assert.equal(sticky(read('services/private-coaching/index.html')), undefined);
  for (const route of ['privacy/index.html', 'links/index.html']) {
    assert.equal(floating(read(route)), undefined);
    assert.equal(sticky(read(route)), undefined);
  }
});

test('question links remain questions and first-class links carry the relevant city', () => {
  for (const city of ['Milton Keynes', 'Leicester', 'Reading']) {
    const link = wa(read('index.html')).find(a => message(a) === `Hi! I'd like to try a free Bachata class in ${city}.`);
    assert.ok(link && link.text.includes('Ask about your first class'), city);
  }
  for (const [slug, city] of [['milton-keynes', 'Milton Keynes'], ['leicester', 'Leicester'], ['reading', 'Reading']]) {
    const links = wa(read(`${slug}/index.html`));
    assert.equal(links.filter(a => message(a) === `Hi! I have a question about Bachata classes in ${city}.`).length, 2);
    assert.ok(links.some(a => message(a) === `Hi! I'm not sure which level to join in ${city}.`));
  }
  assert.ok(wa(read('index.html')).some(a => a.text === 'Questions? WhatsApp us' && message(a) === 'Hi! I have a question about Latin Addiction.'));
  assert.ok(wa(read('links/index.html')).every(a => message(a) === trial));
});

test('service enquiries retain their scope and do not request a free weekly class', () => {
  const discount = 'Hi! I have a question about the Student and NHS discount at weekly classes.';
  const expected = new Map([
    ['about/index.html', ["Hi! I'd like to find out about Latin Addiction classes, private tuition or an event.", "Hi! I'd like to arrange private Salsa or Bachata lessons. Can we discuss availability?", discount]],
    ['services/private-coaching/index.html', ["Hi! I'd like to discuss private Salsa or Bachata lessons. My preferred city is ... and I'd like to work on ...", "Hi! I'd like to discuss solo private Salsa or Bachata lessons. Can we discuss availability?", "Hi! I'd like to discuss couple private Salsa or Bachata lessons. Can we discuss availability?", discount]],
    ['services/corporate/index.html', [matrix.find(([route]) => route === 'services/corporate/index.html')[1], discount]],
    ['services/hire-us/index.html', [matrix.find(([route]) => route === 'services/hire-us/index.html')[1], discount]],
  ]);
  for (const [route, messages] of expected) {
    assert.deepEqual(new Set(wa(read(route)).map(message)), new Set(messages), route);
  }
});

test('all public WhatsApp links use Business number and encoded nonempty text without JavaScript', () => {
  const files = dir => readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? files(join(dir, entry.name)) : entry.name.endsWith('.html') ? [join(dir, entry.name)] : []);
  let checked = 0;
  for (const path of files(fileURLToPath(built))) {
    for (const link of wa(readFileSync(path, 'utf8'))) {
      const url = new URL(link.href);
      assert.equal(url.pathname, '/447951522216', path);
      assert.ok(message(link)?.trim(), path);
      assert.ok(!link.href.includes(' '), path);
      checked++;
    }
  }
  assert.ok(checked > 50);
});
