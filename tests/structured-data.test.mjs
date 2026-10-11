import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { locations } from '../src/data/locations.ts';

const blocks = route => [...readFileSync(new URL(`../dist/${route}index.html`, import.meta.url), 'utf8').matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));

test('weekly services distinguish the business from the venue and its opening hours', () => {
  for (const location of locations) {
    const data = blocks(`${location.slug}/`);
    const org = data.find(item => item['@type'] === 'Organization');
    const service = data.find(item => item['@type'] === 'Service');
    assert.equal(org['@id'], 'https://latinaddiction.co.uk/#organization');
    assert.equal(service.provider['@id'], org['@id']);
    assert.equal(service.url, `https://latinaddiction.co.uk/${location.slug}/`);
    assert.equal(service.availableChannel.serviceLocation.name, location.venue);
    assert.equal(service.availableChannel.serviceLocation['@type'], 'Place');
    assert.equal(service.availableChannel.serviceLocation.address.postalCode, location.postcode);
    assert.equal(service.hoursAvailable.dayOfWeek, `https://schema.org/${location.day}`);
    assert.equal(service.hoursAvailable.opens, location.slug === 'reading' ? '19:45' : '19:00');
    assert.equal(service.hoursAvailable.closes, '23:00');
    assert.equal(service.availableChannel.serviceLocation.openingHours, undefined);
    assert.equal(org.address, undefined, 'Do not invent headquarters from a hired venue');
    assert.ok(!JSON.stringify(data).includes('DanceSchool'));
  }
});

test('tailored services share the business identity and preserve conditional UK coverage', () => {
  for (const route of ['services/private-coaching/', 'services/corporate/', 'services/hire-us/']) {
    const service = blocks(route).find(item => item['@type'] === 'Service');
    assert.equal(service.provider['@id'], 'https://latinaddiction.co.uk/#organization');
    assert.ok(service.areaServed.includes('Further afield across the UK by arrangement'));
  }
});
