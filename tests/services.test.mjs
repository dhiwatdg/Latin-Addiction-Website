import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const page = path => readFileSync(new URL(`../dist/${path}/index.html`, import.meta.url), 'utf8');

test('event customers reach the relevant enquiry from every WhatsApp control', () => {
  for (const path of ['services/corporate', 'services/hire-us']) {
    const html = page(path);
    const links = [...html.matchAll(/href="(https:\/\/wa\.me\/[^\"]+)"/g)].map(match => new URL(match[1].replaceAll('&amp;', '&')));
    assert.ok(links.length >= 4, `${path}: header, body, footer and sticky enquiries`);
    for (const link of links) {
      assert.equal(link.pathname, '/447951522216');
      assert.doesNotMatch(link.searchParams.get('text'), /try a free class/i);
    }
    assert.doesNotMatch(html, /Claim your free class|href="\/#schedule"/);
    assert.doesNotMatch(html, /1-hour taster|90-min workshop|Half-day team event|headline workshops|whether that's 10 people or 100/);
  }
});

test('all service pages are discoverable while weekly classes retain their own journey', () => {
  const home = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
  for (const path of ['about', 'services/corporate', 'services/hire-us', 'services/private-coaching']) {
    assert.ok(home.includes(`href="/${path}/"`), path);
  }
  assert.match(home, /Ask about your free class/);
  assert.match(home, /href="\/#schedule"/);
  for (const city of ['milton-keynes', 'leicester', 'reading']) assert.ok(home.includes(`href="/${city}/"`));
});

test('private tuition enquiries retain dance and audience context without a checkout', () => {
  const html = page('services/private-coaching');
  const links = [...html.matchAll(/href="(https:\/\/wa\.me\/[^\"]+)"/g)].map(match => new URL(match[1].replaceAll('&amp;', '&')));
  assert.ok(links.length >= 6, 'header, hero, solo, couple, final and floating enquiries');
  for (const link of links) {
    assert.equal(link.pathname, '/447951522216');
    const message = link.searchParams.get('text');
    // The footer also contains a deliberately separate weekly-discount help link.
    assert.ok(message.includes('private Salsa or Bachata lessons') || message === 'Hi! I have a question about the Student and NHS discount at weekly classes.');
  }
  for (const audience of ['solo', 'couple']) assert.ok(links.some(link => link.searchParams.get('text').includes(`${audience} private`)));
  assert.doesNotMatch(html, /SumUp|sumupstore|btn-checkout|Claim your free class|href="\/#schedule"/);
  const service = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(match => JSON.parse(match[1])).find(item => item['@type'] === 'Service');
  assert.deepEqual(service.offers.map(offer => offer.price), [50, 75, 100, 250, 350, 120, 150, 400, 500]);
  assert.ok(service.offers.every(offer => offer.priceCurrency === 'GBP'));
  assert.match(html, /48 hours’ notice/);
});

test('approved biographies and flexible event services replace contradictory claims', () => {
  const about = page('about');
  assert.match(about, /July 2021/);
  assert.match(about, /ballet for over ten years/);
  assert.match(about, /"foundingDate":"2021-07"/);
  const hire = page('services/hire-us');
  for (const text of ['birthdays', 'hen and stag parties', 'community events', 'local festivals', 'speakers for smaller events', 'venue will need to provide a suitable PA system', 'Book a DJ set on its own']) assert.ok(hire.includes(text), text);
  assert.doesNotMatch(hire, /wedding/i);
  assert.doesNotMatch(readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8'), /no dance experience, no idea what to expect/);
});

test('new visitors see the timetable first and can walk in without sending a message', () => {
  const home = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
  assert.ok(home.indexOf('id="schedule"') < home.indexOf('id="first-night-title"'));
  assert.ok(home.indexOf('id="schedule"') < home.indexOf('id="teaching-title"'));
  assert.match(home, /No advance booking needed. Walk-ins welcome./);
  assert.doesNotMatch(home, /Everyone starts at Level 1|We’ll be expecting you|mini-review/);
  assert.equal((home.match(/Google review excerpt/g) || []).length, 1);
  assert.doesNotMatch(home, /href="#schedule"[^>]+target="_blank"/);
});

test('Reading levels map to the correct parallel groups and city timetables remain discoverable', () => {
  const reading = page('reading');
  for (const label of ['Beginners · 8pm', 'Improvers · 9pm', 'Intermediate · 8pm', 'Advanced · 9pm']) assert.ok(reading.includes(label), label);
  assert.doesNotMatch(reading, /Start with 8pm. Everyone does./);
  for (const city of ['milton-keynes', 'leicester', 'reading']) {
    for (const path of ['classes', 'links']) assert.ok(page(path).includes(`href="/${city}/#schedule"`), `${path}: ${city}`);
    assert.match(page(city), /Google review excerpt/);
  }
});

test('privacy reading is uninterrupted and general enquiries do not request a free class', () => {
  const privacy = page('privacy');
  assert.doesNotMatch(privacy, /class="mobile-cta|aria-label="WhatsApp us"|has-mobile-cta/);
  const faq = page('faq');
  assert.match(faq, /href="\/services\/private-coaching\/"[^>]*>View private lesson prices and arrangements./);
  const questionLinks = [...faq.matchAll(/href="(https:\/\/wa\.me\/[^\"]+)"[^>]*>\s*(?:<svg[^]*?<\/svg>\s*)?Ask us on WhatsApp/g)];
  assert.equal(questionLinks.length, 2);
  for (const [, href] of questionLinks) {
    assert.equal(new URL(href).searchParams.get('text'), 'Hi! I have a question about Latin Addiction.');
  }
  const hire = page('services/hire-us');
  for (const id of ['workshops', 'guest-teaching', 'dj-sets']) {
    assert.ok(hire.includes(`href="#${id}"`));
    assert.ok(hire.includes(`id="${id}"`));
  }
});
