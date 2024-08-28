import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
import tour5 from './images/tour-5.jpeg';
import tour6 from './images/tour-6.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 5, href: 'www.facebook.com', icon: 'fab fa-facebook' },
  { id: 6, href: 'www.twitter.com', icon: 'fab fa-twitter' },
  { id: 7, href: 'www.squarespace.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 8,
    icon: 'fa-solid fa-wallet',
    title: 'saving money',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis, urna ac pretium posuere, justo.',
  },
  {
    id: 9,
    icon: 'fa-solid fa-tree',
    title: 'endless hiking',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis, urna ac pretium posuere, justo.',
  },
  {
    id: 10,
    icon: 'fa-solid fa-socks',
    title: 'amazing comfort',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis, urna ac pretium posuere, justo.',
  },
];

export const tours = [
  {
    id: 11,
    image: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus metus dui, vehicula vel lectus pharetra, sagittis tempus turpis. Donec quis ipsum sagittis, varius orci nec.',
    location: 'china',
    duration: 6,
    cost: 2100,
  },
  {
    id: 12,
    image: tour2,
    date: 'october 1st, 2020',
    title: 'best of java',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus metus dui, vehicula vel lectus pharetra, sagittis tempus turpis. Donec quis ipsum sagittis, varius orci nec.',
    location: 'indonesia',
    duration: 11,
    cost: 1400,
  },
  {
    id: 13,
    image: tour3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus metus dui, vehicula vel lectus pharetra, sagittis tempus turpis. Donec quis ipsum sagittis, varius orci nec.',
    location: 'hong kong',
    duration: 8,
    cost: 5000,
  },
  {
    id: 14,
    image: tour4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus metus dui, vehicula vel lectus pharetra, sagittis tempus turpis. Donec quis ipsum sagittis, varius orci nec.',
    location: 'kenya',
    duration: 20,
    cost: 3300,
  },
  {
    id: 15,
    image: tour5,
    date: 'september 12th, 2019',
    title: 'essential peru',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus metus dui, vehicula vel lectus pharetra, sagittis tempus turpis. Donec quis ipsum sagittis, varius orci nec.',
    location: 'peru',
    duration: 16,
    cost: 4645,
  },
  {
    id: 16,
    image: tour6,
    date: 'january 29th, 2019',
    title: 'grand tour of india',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus metus dui, vehicula vel lectus pharetra, sagittis tempus turpis. Donec quis ipsum sagittis, varius orci nec.',
    location: 'india',
    duration: 10,
    cost: 5080,
  },
];
