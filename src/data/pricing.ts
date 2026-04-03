export type LocationScope = 'all' | 'mk' | 'leicester' | 'reading' | 'leicester-reading';

export interface PricingProduct {
  id: string;
  label: string;
  checkoutDescription: string; // passed to Worker → SumUp checkout
  amountPence: number;
  locations: LocationScope;
}

// ── NEWCOMER ────────────────────────────────────────────────────────────────

export const newcomerPass: PricingProduct = {
  id: 'newcomer-pass',
  label: '4-Week Newcomer Pass',
  checkoutDescription: 'Latin Addiction – 4-Week Newcomer Pass (beginners)',
  amountPence: 2000,
  locations: 'all',
};

// ── DROP-IN ─────────────────────────────────────────────────────────────────

export const dropInProducts: PricingProduct[] = [
  {
    id: 'dropin-mk',
    label: 'Milton Keynes – Night ticket',
    checkoutDescription: 'Latin Addiction MK – 1-night ticket (Bachata + Salsa)',
    amountPence: 1000,
    locations: 'mk',
  },
  {
    id: 'dropin-1class',
    label: '1 class',
    checkoutDescription: 'Latin Addiction – Drop-in, 1 class',
    amountPence: 1000,
    locations: 'leicester-reading',
  },
  {
    id: 'dropin-2class',
    label: '2 classes',
    checkoutDescription: 'Latin Addiction – Drop-in, 2 classes',
    amountPence: 1500,
    locations: 'leicester-reading',
  },
  {
    id: 'dropin-3class',
    label: '3 classes',
    checkoutDescription: 'Latin Addiction – Drop-in, 3 classes (Leicester only)',
    amountPence: 1800,
    locations: 'leicester',
  },
];

// ── MEMBERSHIPS ──────────────────────────────────────────────────────────────
// 4-week Fixed / Flexi — 1 / 2 / 3 classes per week
// 3-class options: Leicester only

export interface MembershipRow {
  classesPerWeek: 1 | 2 | 3;
  locations: LocationScope;
  fixed4: PricingProduct;
  flexi4: PricingProduct;
  fixed8: PricingProduct;
  flexi8: PricingProduct;
}

export const membershipRows: MembershipRow[] = [
  {
    classesPerWeek: 1,
    locations: 'leicester-reading',
    fixed4: {
      id: 'mem-4wk-fixed-1',
      label: '4-week Fixed – 1 class/week',
      checkoutDescription: 'Latin Addiction – 4-week Fixed membership (1 class/week)',
      amountPence: 3600,
      locations: 'leicester-reading',
    },
    flexi4: {
      id: 'mem-4wk-flexi-1',
      label: '4-week Flexi – 1 class/week',
      checkoutDescription: 'Latin Addiction – 4-week Flexi membership (1 class/week)',
      amountPence: 3800,
      locations: 'leicester-reading',
    },
    fixed8: {
      id: 'mem-8wk-fixed-1',
      label: '8-week Fixed – 1 class/week',
      checkoutDescription: 'Latin Addiction – 8-week Fixed membership (1 class/week)',
      amountPence: 6400,
      locations: 'leicester-reading',
    },
    flexi8: {
      id: 'mem-8wk-flexi-1',
      label: '8-week Flexi – 1 class/week',
      checkoutDescription: 'Latin Addiction – 8-week Flexi membership (1 class/week)',
      amountPence: 7200,
      locations: 'leicester-reading',
    },
  },
  {
    classesPerWeek: 2,
    locations: 'leicester-reading',
    fixed4: {
      id: 'mem-4wk-fixed-2',
      label: '4-week Fixed – 2 classes/week',
      checkoutDescription: 'Latin Addiction – 4-week Fixed membership (2 classes/week)',
      amountPence: 5200,
      locations: 'leicester-reading',
    },
    flexi4: {
      id: 'mem-4wk-flexi-2',
      label: '4-week Flexi – 2 classes/week',
      checkoutDescription: 'Latin Addiction – 4-week Flexi membership (2 classes/week)',
      amountPence: 5800,
      locations: 'leicester-reading',
    },
    fixed8: {
      id: 'mem-8wk-fixed-2',
      label: '8-week Fixed – 2 classes/week',
      checkoutDescription: 'Latin Addiction – 8-week Fixed membership (2 classes/week)',
      amountPence: 9200,
      locations: 'leicester-reading',
    },
    flexi8: {
      id: 'mem-8wk-flexi-2',
      label: '8-week Flexi – 2 classes/week',
      checkoutDescription: 'Latin Addiction – 8-week Flexi membership (2 classes/week)',
      amountPence: 10400,
      locations: 'leicester-reading',
    },
  },
  {
    classesPerWeek: 3,
    locations: 'leicester',
    fixed4: {
      id: 'mem-4wk-fixed-3',
      label: '4-week Fixed – 3 classes/week',
      checkoutDescription: 'Latin Addiction – 4-week Fixed membership (3 classes/week, Leicester)',
      amountPence: 6200,
      locations: 'leicester',
    },
    flexi4: {
      id: 'mem-4wk-flexi-3',
      label: '4-week Flexi – 3 classes/week',
      checkoutDescription: 'Latin Addiction – 4-week Flexi membership (3 classes/week, Leicester)',
      amountPence: 7000,
      locations: 'leicester',
    },
    fixed8: {
      id: 'mem-8wk-fixed-3',
      label: '8-week Fixed – 3 classes/week',
      checkoutDescription: 'Latin Addiction – 8-week Fixed membership (3 classes/week, Leicester)',
      amountPence: 11000,
      locations: 'leicester',
    },
    flexi8: {
      id: 'mem-8wk-flexi-3',
      label: '8-week Flexi – 3 classes/week',
      checkoutDescription: 'Latin Addiction – 8-week Flexi membership (3 classes/week, Leicester)',
      amountPence: 12400,
      locations: 'leicester',
    },
  },
];
