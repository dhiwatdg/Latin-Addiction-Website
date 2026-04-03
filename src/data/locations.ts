export interface ScheduleRow {
  time: string;
  description: string;
  isSocial?: boolean;
}

export interface Location {
  slug: string;
  name: string;
  shortName: string;
  day: string;
  dayShort: string;
  badgeText: string;
  venue: string;
  address: string;
  postcode: string;
  doorsOpen: string;
  schedule: ScheduleRow[];
  parking: string;
  mapsQuery: string;
  priceNote: string;
  whatsappMessage: string;
  note?: string;
  danceStyles: string[];
}

export const locations: Location[] = [
  {
    slug: 'milton-keynes',
    name: 'Milton Keynes',
    shortName: 'MK',
    day: 'Monday',
    dayShort: 'Mon',
    badgeText: 'Every Mon',
    venue: 'Midsummer Tap',
    address: 'Theatre District, Milton Keynes',
    postcode: 'MK9 3PU',
    doorsOpen: '7:45pm',
    schedule: [
      { time: '7:45pm', description: 'Doors open' },
      { time: '8:00pm', description: 'Bachata: Beginners / Improvers / Intermediate-Advanced' },
      { time: '9:00pm', description: 'Salsa: Beginners / Improvers / Intermediate-Advanced' },
      { time: '10:00pm', description: 'FREE Social Party', isSocial: true },
    ],
    parking: 'FREE from 6pm.',
    mapsQuery: 'Midsummer+Tap+Theatre+District+Milton+Keynes+MK9+3PU',
    priceNote: '£10 for the night · First class FREE · Newcomer 4-week pass: £20',
    whatsappMessage: "Hi! I'd like to try a free Salsa & Bachata class in Milton Keynes",
    note: 'Milton Keynes is our only location offering both Salsa and Bachata.',
    danceStyles: ['Bachata', 'Salsa'],
  },
  {
    slug: 'leicester',
    name: 'Leicester',
    shortName: 'Leicester',
    day: 'Tuesday',
    dayShort: 'Tue',
    badgeText: 'Every Tue',
    venue: 'Braunstone Frith Recreation Centre',
    address: '29A Sharmon Cres, Leicester',
    postcode: 'LE3 6NW',
    doorsOpen: '7:00pm',
    schedule: [
      { time: '7:00pm', description: 'Doors open' },
      { time: '7:15pm', description: 'Beginners (1 hr)' },
      { time: '8:15pm', description: 'Improver / Intermediate (1 hr)' },
      { time: '9:15pm', description: 'Intermediate / Advanced (1 hr)' },
      { time: '10:15pm', description: 'FREE Social Party', isSocial: true },
    ],
    parking: 'FREE street parking.',
    mapsQuery: 'Braunstone+Frith+Recreation+Centre+29A+Sharmon+Cres+Leicester+LE3+6NW',
    priceNote: '£10/night (1 class) · £15 (2 classes) · First class FREE · Newcomer 4-week pass: £20',
    whatsappMessage: "Hi! I'd like to try a free Bachata class in Leicester",
    danceStyles: ['Bachata'],
  },
  {
    slug: 'reading',
    name: 'Reading',
    shortName: 'Reading',
    day: 'Wednesday',
    dayShort: 'Wed',
    badgeText: 'Every Wed',
    venue: 'Wesley Methodist Church',
    address: "84 Queen's Rd, Reading",
    postcode: 'RG1 4BW',
    doorsOpen: '7:45pm',
    schedule: [
      { time: '7:45pm', description: 'Doors open' },
      { time: '8:00pm', description: 'Beginners & Intermediate (separate groups, same room)' },
      { time: '9:00pm', description: 'Improvers & Advanced (separate groups, same room)' },
      { time: '10:00pm', description: 'FREE Social Party', isSocial: true },
    ],
    parking: 'FREE on premises — register at the kiosk to avoid a fine.',
    mapsQuery: 'Wesley+Methodist+Church+84+Queens+Rd+Reading+RG1+4BW',
    priceNote: '£10/night (1 class) · £15 (2 classes) · First class FREE · Newcomer 4-week pass: £20',
    whatsappMessage: "Hi! I'd like to try a free Bachata class in Reading",
    danceStyles: ['Bachata'],
  },
];

export const WHATSAPP_NUMBER = '447424063798';
export const WHATSAPP_DEFAULT_MESSAGE = "Hi! I'd like to try a free class";
export const PHONE_DISPLAY = '07424 063798';
export const PHONE_TEL = '07424063798';
export const EMAIL = 'info@latinaddiction.co.uk';

export function whatsappUrl(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function mapsUrl(query: string): string {
  return `https://maps.google.com/?q=${query}`;
}
