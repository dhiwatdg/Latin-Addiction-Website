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
  { label: 'Classes', href: '/classes' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Reviews', href: '/reviews' },
];
