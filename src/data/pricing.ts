// Public offer snapshot verified against the hub on 2026-10-09.
// SumUp product destinations verified in the public city catalogues on that date.
// Display catalogue only: any future checkout must validate prices server-side.
export type CitySlug = 'milton-keynes' | 'leicester' | 'reading';
export interface MembershipOffer {
  id: string; weeks: 4 | 8; flexiValidityWeeks: 8 | 12; storeUrl: string;
  rows: { classes: number; label: string; fixedPence: number; flexiPence: number }[];
}
export interface CityOffers {
  city: CitySlug; firstClass: string;
  newcomer: { id: string; amountPence: number; storeUrl: string };
  dropIn: { id: string; storeUrl: string; options: { classes: number; label: string; amountPence: number }[] };
  memberships: MembershipOffer[];
}
export const cityOffers: CityOffers[] = [
  {
    "city": "milton-keynes",
    "firstClass": "19:15",
    "newcomer": {
      "id": "milton-keynes-newcomer",
      "amountPence": 2000,
      "storeUrl": "https://latinaddictionuk.sumupstore.com/product/new-to-bachata-newcomer-pass-beginners-2"
    },
    "dropIn": {
      "id": "milton-keynes-drop-in",
      "storeUrl": "https://latinaddictionuk.sumupstore.com/product/weekly-drop-in-2",
      "options": [
        {
          "classes": 3,
          "label": "All classes + social",
          "amountPence": 1000
        }
      ]
    },
    "memberships": [
      {
        "id": "milton-keynes-4-week",
        "weeks": 4,
        "flexiValidityWeeks": 8,
        "storeUrl": "https://latinaddictionuk.sumupstore.com/product/4-week-pass-2",
        "rows": [
          {
            "classes": 3,
            "label": "All classes on the night",
            "fixedPence": 3200,
            "flexiPence": 3600
          }
        ]
      }
    ]
  },
  {
    "city": "leicester",
    "firstClass": "19:15",
    "newcomer": {
      "id": "leicester-newcomer",
      "amountPence": 2000,
      "storeUrl": "https://latinaddictionuk.sumupstore.com/product/new-to-bachata-newcomer-pass-beginners"
    },
    "dropIn": {
      "id": "leicester-drop-in",
      "storeUrl": "https://latinaddictionuk.sumupstore.com/product/weekly-drop-in-1",
      "options": [
        {
          "classes": 1,
          "label": "1 class",
          "amountPence": 1000
        },
        {
          "classes": 2,
          "label": "2 classes",
          "amountPence": 1500
        },
        {
          "classes": 3,
          "label": "3 classes",
          "amountPence": 1800
        }
      ]
    },
    "memberships": [
      {
        "id": "leicester-4-week",
        "weeks": 4,
        "flexiValidityWeeks": 8,
        "storeUrl": "https://latinaddictionuk.sumupstore.com/product/4-week-pass-1",
        "rows": [
          {
            "classes": 1,
            "label": "1 class per night",
            "fixedPence": 3600,
            "flexiPence": 3800
          },
          {
            "classes": 2,
            "label": "2 classes per night",
            "fixedPence": 5200,
            "flexiPence": 5800
          },
          {
            "classes": 3,
            "label": "3 classes per night",
            "fixedPence": 6200,
            "flexiPence": 7000
          }
        ]
      },
      {
        "id": "leicester-8-week",
        "weeks": 8,
        "flexiValidityWeeks": 12,
        "storeUrl": "https://latinaddictionuk.sumupstore.com/product/8-week-pass-1",
        "rows": [
          {
            "classes": 1,
            "label": "1 class per night",
            "fixedPence": 6400,
            "flexiPence": 7200
          },
          {
            "classes": 2,
            "label": "2 classes per night",
            "fixedPence": 9200,
            "flexiPence": 10400
          },
          {
            "classes": 3,
            "label": "3 classes per night",
            "fixedPence": 11000,
            "flexiPence": 12400
          }
        ]
      }
    ]
  },
  {
    "city": "reading",
    "firstClass": "20:00",
    "newcomer": {
      "id": "reading-newcomer",
      "amountPence": 2000,
      "storeUrl": "https://latinaddictionuk.sumupstore.com/product/new-to-bachata-newcomer-pass-beginners-1"
    },
    "dropIn": {
      "id": "reading-drop-in",
      "storeUrl": "https://latinaddictionuk.sumupstore.com/product/weekly-drop-in",
      "options": [
        {
          "classes": 1,
          "label": "1 class",
          "amountPence": 1000
        },
        {
          "classes": 2,
          "label": "2 classes",
          "amountPence": 1500
        }
      ]
    },
    "memberships": [
      {
        "id": "reading-4-week",
        "weeks": 4,
        "flexiValidityWeeks": 8,
        "storeUrl": "https://latinaddictionuk.sumupstore.com/product/4-week-pass",
        "rows": [
          {
            "classes": 1,
            "label": "1 class per night",
            "fixedPence": 3600,
            "flexiPence": 3800
          },
          {
            "classes": 2,
            "label": "2 classes per night",
            "fixedPence": 5200,
            "flexiPence": 5800
          }
        ]
      },
      {
        "id": "reading-8-week",
        "weeks": 8,
        "flexiValidityWeeks": 12,
        "storeUrl": "https://latinaddictionuk.sumupstore.com/product/8-week-pass",
        "rows": [
          {
            "classes": 1,
            "label": "1 class per night",
            "fixedPence": 6400,
            "flexiPence": 7200
          },
          {
            "classes": 2,
            "label": "2 classes per night",
            "fixedPence": 9200,
            "flexiPence": 10400
          }
        ]
      }
    ]
  }
];
export interface CoachingOffer {
  id: string; audience: 'Solo' | 'Couple'; minutes: number; sessions: number; amountPence: number;
}
export const coachingOffers: CoachingOffer[] = [
  {
    "id": "solo-60",
    "audience": "Solo",
    "minutes": 60,
    "sessions": 1,
    "amountPence": 5000
  },
  {
    "id": "solo-90",
    "audience": "Solo",
    "minutes": 90,
    "sessions": 1,
    "amountPence": 7500
  },
  {
    "id": "solo-120",
    "audience": "Solo",
    "minutes": 120,
    "sessions": 1,
    "amountPence": 10000
  },
  {
    "id": "solo-4x90",
    "audience": "Solo",
    "minutes": 90,
    "sessions": 4,
    "amountPence": 25000
  },
  {
    "id": "solo-4x120",
    "audience": "Solo",
    "minutes": 120,
    "sessions": 4,
    "amountPence": 35000
  },
  {
    "id": "couple-90",
    "audience": "Couple",
    "minutes": 90,
    "sessions": 1,
    "amountPence": 12000
  },
  {
    "id": "couple-120",
    "audience": "Couple",
    "minutes": 120,
    "sessions": 1,
    "amountPence": 15000
  },
  {
    "id": "couple-4x90",
    "audience": "Couple",
    "minutes": 90,
    "sessions": 4,
    "amountPence": 40000
  },
  {
    "id": "couple-4x120",
    "audience": "Couple",
    "minutes": 120,
    "sessions": 4,
    "amountPence": 50000
  }
];
export const bookingRules = {
  city: 'All tickets and passes are valid only in the city selected. They cannot be used across cities.',
  newcomer: 'After your free first beginner class, your £20 pass covers four consecutive paid beginner weeks in your selected city. It starts on your first paid beginner class; missed weeks count.',
  fixed: 'Fixed passes start on your first agreed or attended class date after purchase and run for consecutive calendar weeks. Missed weeks count.',
  flexi: 'Flexi passes start on your first paid attendance. A 4-week pass gives you four nights within 8 weeks; an 8-week pass gives you eight nights within 12 weeks. Unused nights expire.',
  dropIn: 'Advance tickets cover the next scheduled night in your selected city; same-day tickets cover that night. Message before classes start for one transfer to a later night in the same city. Otherwise the ticket expires.',
  discount: '£2 Student/NHS discount at the door only. It is not available in the online store.',
  coaching: 'Agree your slot on WhatsApp before paying. Payment through SumUp confirms the agreed booking.',
};
const currency = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 });
export const formatPrice = (pence: number) => currency.format(pence / 100);
export const offersFor = (city: string) => {
  const offers = cityOffers.find(item => item.city === city);
  if (!offers) throw new Error(`Unknown booking city: ${city}`);
  return offers;
};
