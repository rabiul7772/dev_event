export interface Event {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: Event[] = [
  {
    image: '/images/event1.png',
    title: 'JSConf EU 2026',
    slug: 'jsconf-eu-2026',
    location: 'Berlin, Germany',
    date: 'June 2-4, 2026',
    time: '9:00 AM - 6:00 PM'
  },
  {
    image: '/images/event2.png',
    title: 'React Summit 2026',
    slug: 'react-summit-2026',
    location: 'Amsterdam, Netherlands',
    date: 'June 9, 2026',
    time: '10:00 AM - 5:00 PM'
  },
  {
    image: '/images/event3.png',
    title: 'Global AI Hackathon',
    slug: 'global-ai-hackathon',
    location: 'San Francisco, USA',
    date: 'July 15-16, 2026',
    time: 'All Day'
  },
  {
    image: '/images/event4.png',
    title: 'DevFest 2026',
    slug: 'devfest-2026',
    location: 'Online',
    date: 'August 20, 2026',
    time: '12:00 PM - 8:00 PM'
  },
  {
    image: '/images/event5.png',
    title: 'Kubernetes Community Days',
    slug: 'kubernetes-community-days',
    location: 'Paris, France',
    date: 'September 10, 2026',
    time: '9:00 AM - 5:00 PM'
  },
  {
    image: '/images/event6.png',
    title: 'PyCon US 2026',
    slug: 'pycon-us-2026',
    location: 'Salt Lake City, USA',
    date: 'October 5-7, 2026',
    time: '8:00 AM - 6:00 PM'
  }
];
