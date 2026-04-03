export interface Review {
  text: string;
  author: string;
  initial: string;
  source: string;
  stars: number;
  featured?: boolean;
}

export const reviews: Review[] = [
  {
    text: "As a complete beginner, I wasn't sure what to expect, but this dance school is amazing! The instructors were so encouraging, and the class atmosphere was really friendly. I loved how they broke everything down step by step.",
    author: 'G V James',
    initial: 'G',
    source: 'Google Review',
    stars: 5,
    featured: true,
  },
  {
    text: "It really feels like you're finding a new dance family. Would 1000% recommend, especially for beginners.",
    author: 'Amy',
    initial: 'A',
    source: 'Google Review',
    stars: 5,
  },
  {
    text: "They don't just teach steps — they explain the technique in a way that makes it all click.",
    author: 'Jonathan',
    initial: 'J',
    source: 'Google Review',
    stars: 5,
  },
  {
    text: "The teachers are really good. The social at the end is a great way to put learning into practice.",
    author: 'Siva',
    initial: 'S',
    source: 'Google Review',
    stars: 5,
  },
];
