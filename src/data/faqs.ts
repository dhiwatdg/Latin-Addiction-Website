export interface FAQ {
  question: string;
  answer: string;
  link?: { href: string; label: string };
}

export const pageFaqs: FAQ[] = [
  {
    question: 'Can I try a free class in each city?',
    answer: 'Your free first beginner class is available once per person across Latin Addiction, rather than once in each city. After attending your trial, choose a paid ticket or pass for the city you want to join.',
  },
  {
    question: 'What should I wear?',
    answer: "Comfortable clothes you can move in — jeans are fine. Wear clean, smooth-soled shoes if you have them (trainers work too, just avoid anything that grips the floor). No special dance shoes needed.",
  },
  {
    question: 'Will it be awkward?',
    answer: "Honestly? The first five minutes might feel a bit new. But the class is structured so you're moving and laughing within minutes. Everyone remembers being a beginner — the room is on your side.",
  },
  {
    question: "What's the difference between Bachata and Salsa?",
    answer: "Both are Latin partner dances, but they feel very different. Salsa is faster and more energetic with complex footwork. Bachata is slower, more intimate, built on a simple side-to-side rhythm. It's widely considered one of the most beginner-friendly Latin dances — you can be dancing socially after one class. We teach Bachata at all our locations.",
  },
  {
    question: 'Do I need to book in advance?',
    answer: 'No advance booking is needed for weekly classes. You’re welcome to turn up. Message us on WhatsApp if you’d like help planning your first visit.',
  },
  {
    question: 'Do I need a partner?',
    answer: "No. We rotate partners so you dance with everyone. Come solo, with a friend, or as a couple.",
  },
  {
    question: 'What level am I?',
    answer: "If you've never danced Bachata, start in Beginners. If you've done a few months and know the basic step, Improvers. If you can dance socially and want to refine technique, Intermediate. If in doubt, message us on WhatsApp.",
  },
  {
    question: 'How quickly will I progress?',
    answer: "Most people feel comfortable dancing socially after 4–6 weeks of weekly classes. Everyone progresses at their own pace.",
  },
  {
    question: 'Is Bachata hard to learn?',
    answer: "No. The basic step is a simple side-to-side rhythm. Most beginners are dancing with a partner within their first class.",
  },
  {
    question: 'What happens after the class?',
    answer: "Every class night ends with a free social party where you can practise what you've learned in a relaxed setting. It's the best part of the night.",
  },
  {
    question: 'Can I use one pass in multiple cities?',
    answer: "No. Each Newcomer, Fixed or Flexi pass is valid only in the city you chose when buying it. To attend another city, you need a ticket or pass for that city.",
  },
  {
    question: 'Do you offer private coaching?',
    answer: 'Yes. Private Salsa and Bachata lessons are available for individuals and couples.',
    link: { href: '/services/private-coaching/', label: 'View private lesson prices and arrangements.' },
  },
  {
    question: 'Is there a student/NHS discount?',
    answer: "Yes. The £2 Student/NHS discount is available at the door only, where eligibility can be checked. It is not available in the online store.",
  },
  {
    question: 'What if I miss a week on my membership pass?',
    answer: "Fixed passes must be used in consecutive weeks. Flexi passes give you a longer window — a 4-week pass is valid for 8 weeks, an 8-week pass valid for 12 weeks — to account for missed weeks.",
  },
];

export const homepageFaqs: FAQ[] = [
  {
    question: 'Do I need to book?',
    answer: 'No advance booking is needed for weekly classes. You’re welcome to turn up. Message us on WhatsApp if you’d like help planning your first visit.',
  },
  {
    question: 'What should I wear?',
    answer: 'Comfortable clothes you can move in and clean shoes. No special dance clothes or shoes are needed.',
  },
  {
    question: 'Do I need a partner?',
    answer: 'No. We rotate partners during class, so you can come on your own, with a friend or as a couple.',
  },
  {
    question: 'Which class should I join?',
    answer: 'If you’re new to Bachata, choose Beginners. If you already dance, check your city’s timetable or ask us which group suits your experience.',
  },
];
