import { EMAIL, locations, type Location } from './locations';

export const SITE_URL = 'https://latinaddiction.co.uk';
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const organization = {
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: 'Latin Addiction',
  alternateName: 'Latin Addiction UK',
  url: `${SITE_URL}/`,
  telephone: '+447424063798',
  email: EMAIL,
  foundingDate: '2021-07',
  founder: [{ '@type': 'Person', name: 'Dhiwa' }, { '@type': 'Person', name: 'Gloria' }],
  logo: `${SITE_URL}/images/logos/logo-mark-golden-tight.png`,
  description: 'Weekly Bachata classes and tailored Salsa and Bachata private tuition, corporate workshops and event experiences in Milton Keynes, Leicester and Reading.',
  sameAs: [
    'https://www.instagram.com/latinaddictionuk',
    'https://www.facebook.com/LatinAddictionUK',
    'https://www.tiktok.com/@latin.addiction.uk',
    'https://www.youtube.com/@LatinAddictionUK',
  ],
};

export const serviceAreas = [
  ...locations.map(location => location.name),
  'Surrounding areas of Milton Keynes, Leicester and Reading',
  'Further afield across the UK by arrangement',
];

/** Class availability belongs to the service, not the venue's general opening hours. */
export function cityClassService(location: Location, streetAddress: string) {
  const page = `${SITE_URL}/${location.slug}/`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${page}#classes`,
    name: `Bachata classes in ${location.name}`,
    serviceType: 'Weekly Bachata classes and social dancing',
    description: `Bachata classes every ${location.day} at ${location.venue}, ${location.name}. Beginners welcome. First beginner class free, once per person across Latin Addiction.`,
    url: page,
    provider: { '@id': ORGANIZATION_ID },
    areaServed: location.name,
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${location.day}`,
      opens: location.slug === 'reading' ? '19:45' : '19:00',
      closes: '23:00',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${page}#schedule`,
      serviceLocation: {
        '@type': 'Place',
        '@id': `${page}#venue`,
        name: location.venue,
        address: {
          '@type': 'PostalAddress',
          streetAddress,
          addressLocality: location.name,
          postalCode: location.postcode,
          addressCountry: 'GB',
        },
      },
    },
  };
}
