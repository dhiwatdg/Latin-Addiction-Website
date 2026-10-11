export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Classes', href: '/classes', children: [
    { label: 'All weekly classes', href: '/classes/' },
    { label: 'Milton Keynes', href: '/milton-keynes/' },
    { label: 'Leicester', href: '/leicester/' },
    { label: 'Reading', href: '/reading/' },
  ] },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Services', href: '/services/hire-us/', children: [
    { label: 'Private lessons', href: '/services/private-coaching/' },
    { label: 'Corporate workshops', href: '/services/corporate/' },
    { label: 'Event hire', href: '/services/hire-us/' },
  ] },
  { label: 'About', href: '/about/' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Reviews', href: '/reviews' },
];
