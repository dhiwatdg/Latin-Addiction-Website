export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Milton Keynes', href: '/milton-keynes' },
  { label: 'Leicester', href: '/leicester' },
  { label: 'Reading', href: '/reading' },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'Services',
    href: '#',
    children: [
      { label: 'Private Coaching', href: '/services/private-coaching' },
      { label: 'Corporate', href: '/services/corporate' },
      { label: 'Hire Us', href: '/services/hire-us' },
    ],
  },
  {
    label: 'About',
    href: '#',
    children: [
      { label: 'Our Story', href: '/about' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Learn', href: '/learn' },
    ],
  },
];
