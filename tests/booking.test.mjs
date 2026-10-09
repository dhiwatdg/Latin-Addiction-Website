import assert from 'node:assert/strict';
import { test } from 'node:test';
import { cityOffers, coachingOffers } from '../src/data/pricing.ts';
import { readFileSync } from 'node:fs';
test('catalogue enforces city availability and separate product destinations', () => {
  const mk = cityOffers.find(x => x.city === 'milton-keynes');
  const reading = cityOffers.find(x => x.city === 'reading');
  assert.deepEqual(mk.memberships.map(x => x.weeks), [4]);
  assert.deepEqual(mk.memberships[0].rows.map(x=>[x.fixedPence,x.flexiPence]), [[3200,3600]]);
  assert.ok(reading.memberships.every(x=>x.rows.every(row=>row.classes<=2)));
  const urls = cityOffers.flatMap(x=>[x.newcomer.storeUrl,x.dropIn.storeUrl,...x.memberships.map(p=>p.storeUrl)]);
  assert.equal(new Set(urls).size,11);
  for(const url of urls) assert.ok(url.startsWith('https://latinaddictionuk.sumupstore.com/product/'));
});
test('coaching offers use current duration and audience rules', () => {
  assert.equal(coachingOffers.length,9);
  assert.ok(coachingOffers.every(x=>[1,4].includes(x.sessions)));
  assert.ok(coachingOffers.filter(x=>x.audience==='Couple').every(x=>x.minutes>=90));
  assert.equal(Math.min(...coachingOffers.map(x=>x.amountPence)),5000);
});
test('built prices have direct links and no JavaScript payment dependency', () => {
  const html=readFileSync(new URL('../dist/pricing/index.html',import.meta.url),'utf8');
  for(const city of cityOffers) {
    for(const url of [city.newcomer.storeUrl,city.dropIn.storeUrl,...city.memberships.map(x=>x.storeUrl)]) assert.ok(html.includes(`href="${url}"`));
    assert.match(html,new RegExp(`id="${city.city}" data-city-panel`));
  }
  assert.ok(!html.includes('btn-checkout'));
  assert.ok(!readFileSync(new URL('../dist/services/private-coaching/index.html',import.meta.url),'utf8').includes('btn-checkout'));
});

test('city introduction keeps spaces around dynamic inline content', () => {
  const html = readFileSync(new URL('../dist/leicester/index.html', import.meta.url), 'utf8');
  const text = html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ');
  assert.ok(text.includes('Every Tuesday at Braunstone Frith Recreation Centre'));
});
