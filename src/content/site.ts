/**
 * The site's own words: navigation, events, speakers, sponsors, gallery and
 * page copy. Edit freely.
 *
 * The community's NAME and LOGO are not here: they come from the platform
 * (`GET /site-api/site`). Use `{name}` in any string for the community name.
 *
 * ✎ Anything marked `MADE UP` is a believable placeholder written for the
 *   first version: dates, venues, prices, speakers, attendee numbers,
 *   testimonials and sponsors. Replace each one with the real thing.
 *   Search this file for "MADE UP" to find them all.
 */

export interface NavItem {
  label: string;
  href: string;
}

/**
 * Header and footer navigation. Every href is a page of THIS site. `/events`
 * belongs to the community app, so the events page lives at `/schedule`.
 */
export const NAV: NavItem[] = [
  {label: 'Events', href: '/schedule'},
  {label: 'Speakers', href: '/speakers'},
  {label: 'Sponsors', href: '/sponsors'},
  {label: 'Gallery', href: '/gallery'},
  {label: 'About', href: '/about'},
  {label: 'Blog', href: '/blog'},
  {label: 'Contact', href: '/contact'},
];

/** Photos are Unsplash stand-ins: swap them for photos from your own events. */
const unsplash = (id: string, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const PHOTOS = {
  workshop: unsplash('1591115765373-5207764f72e7'),
  audience: unsplash('1515187029135-18ee286d815b'),
  tables: unsplash('1528605248644-14dd04022da1'),
  stage: unsplash('1505373877841-8d25f7d46678'),
  room: unsplash('1511578314322-379afb476865'),
  crowd: unsplash('1531058020387-3be344556be6'),
  meeting: unsplash('1517048676732-d65bc937f952'),
  deal: unsplash('1600880292203-757bb62b4baf'),
  coffee: unsplash('1495474472287-4d71bcdd2085'),
  listening: unsplash('1540575467063-178a50c2df87'),
  mic: unsplash('1475721027785-f74eccf877e2'),
  chat: unsplash('1543269865-cbf427effbad'),
};

// ---------------------------------------------------------------- events --

export interface AgendaItem {
  time: string;
  title: string;
}

export interface EventItem {
  slug: string;
  title: string;
  /** The format, shown as a badge. */
  kind: 'Breakfast' | 'Workshop' | 'Info night' | 'Online';
  /** ISO date-time WITH the offset (Missouri is UTC−6 in winter, −5 in summer). */
  start: string;
  /** Shown as written, e.g. "7:30 – 9:30 AM". */
  time: string;
  venue: string;
  city: string;
  /** Shown as written: "$25", "Free". */
  price: string;
  priceNote: string;
  /** Who it is for, one line. */
  audience: string;
  summary: string;
  speakers: string[]; // speaker slugs
  agenda?: AgendaItem[];
  photo: string;
  /** Past events only. */
  attendees?: number;
  highlight?: string;
}

/**
 * Upcoming events, soonest first. The first one is "the next event" on the
 * home page (title, countdown and the ticket form).
 */
export const UPCOMING: EventItem[] = [
  {
    // MADE UP: date, venue, price and agenda.
    slug: 'competitor-blackout-stl',
    title: 'The Competitor Blackout',
    kind: 'Breakfast',
    start: '2026-12-03T07:30:00-06:00',
    time: '7:30 – 9:30 AM',
    venue: 'The Loft at Clayton Commons',
    city: 'Clayton, MO (St. Louis)',
    price: '$25',
    priceNote: 'Hot breakfast and coffee included. Pay at the door.',
    audience: 'Owners of plumbing, HVAC, roofing, real estate, med spa and other local service businesses',
    summary:
      'How category exclusivity locks your competitors out of 10,000 mailboxes, and what it looks like when a route fills up. Bring your questions, your business cards and your toughest marketing story.',
    speakers: ['marcus-hale', 'renee-calloway', 'tony-brandt'],
    agenda: [
      {time: '7:30', title: 'Doors, hot breakfast and open networking'},
      {time: '8:00', title: 'The Competitor Blackout: one business per trade, per route'},
      {time: '8:25', title: 'Anchor panel: why a top Realtor puts her name on the card'},
      {time: '8:50', title: 'Live teardown: three real 9×12 cards, what worked and why'},
      {time: '9:10', title: 'Route check: is your trade still open in your ZIP?'},
    ],
    photo: PHOTOS.workshop,
  },
  {
    // MADE UP
    slug: 'postcard-teardown-kc',
    title: 'Postcard Teardown Workshop',
    kind: 'Workshop',
    start: '2027-01-14T08:00:00-06:00',
    time: '8:00 – 10:30 AM',
    venue: 'Crossroads Commons, second floor',
    city: 'Kansas City, MO',
    price: '$35',
    priceNote: 'Includes breakfast and a printed ad-copy worksheet.',
    audience: 'Owners who already mail, or want to, and want ads that make the phone ring',
    summary:
      'Bring your current ad, flyer or door hanger. We rebuild it live for a 9×12 card: one offer, one phone number, one QR code, and a headline a homeowner reads in two seconds.',
    speakers: ['marcus-hale', 'tony-brandt'],
    photo: PHOTOS.meeting,
  },
  {
    // MADE UP
    slug: 'licensee-info-night-online',
    title: 'Licensee Info Night',
    kind: 'Online',
    start: '2027-01-28T18:30:00-06:00',
    time: '6:30 – 7:30 PM (Central)',
    venue: 'Live online, link sent after you reserve',
    city: 'Online',
    price: 'Free',
    priceNote: 'Seats are limited so everyone can ask questions.',
    audience: 'Entrepreneurs, sales professionals and marketers who want their own local marketing business',
    summary:
      'How a Saving America Money territory works: selling a 12-spot card and directory listings, what a full card grosses against what it costs to mail, and what support looks like in your first 90 days.',
    speakers: ['alicia-moreno', 'marcus-hale'],
    photo: PHOTOS.deal,
  },
  {
    // MADE UP
    slug: 'premium-neighbor-sgf',
    title: 'The Premium Neighbor Effect',
    kind: 'Breakfast',
    start: '2027-02-11T07:30:00-06:00',
    time: '7:30 – 9:00 AM',
    venue: 'Downtown Event Hall',
    city: 'Springfield, MO',
    price: '$25',
    priceNote: 'Hot breakfast and coffee included. Pay at the door.',
    audience: 'Local service businesses in the Springfield area',
    summary:
      'Why homeowners toss coupon envelopes but keep a curated card, and how sitting beside trusted local names makes your business look like one of them.',
    speakers: ['renee-calloway', 'marcus-hale'],
    photo: PHOTOS.tables,
  },
];

/** Past events, newest first. */
export const PAST: EventItem[] = [
  {
    // MADE UP: date, venue and attendee numbers.
    slug: 'premium-neighbor-kc',
    title: 'The Premium Neighbor Effect',
    kind: 'Breakfast',
    start: '2026-10-15T07:30:00-05:00',
    time: '7:30 – 9:30 AM',
    venue: 'Crossroads Commons',
    city: 'Kansas City, MO',
    price: '$25',
    priceNote: '',
    audience: 'Local service business owners',
    summary: 'A full room of Kansas City trades and a panel on what a premium card says about the businesses on it.',
    speakers: ['renee-calloway', 'marcus-hale'],
    photo: PHOTOS.audience,
    attendees: 61,
    highlight: 'Four trades claimed their route before the coffee ran out.',
  },
  {
    // MADE UP
    slug: 'licensee-info-night-columbia',
    title: 'Licensee Info Night',
    kind: 'Info night',
    start: '2026-10-01T18:30:00-05:00',
    time: '6:30 – 8:00 PM',
    venue: 'Broadway Business Center',
    city: 'Columbia, MO',
    price: 'Free',
    priceNote: '',
    audience: 'Aspiring local marketing business owners',
    summary: 'The first in-person walk-through of the licensing model, with a full Q&A on territories and margins.',
    speakers: ['alicia-moreno'],
    photo: PHOTOS.meeting,
    attendees: 22,
    highlight: 'Questions ran 40 minutes past the scheduled end.',
  },
  {
    // MADE UP
    slug: 'nine-cent-takeover-stl',
    title: 'The 9-Cent Neighborhood Takeover',
    kind: 'Breakfast',
    start: '2026-09-17T07:30:00-05:00',
    time: '7:30 – 9:30 AM',
    venue: 'The Loft at Clayton Commons',
    city: 'Clayton, MO (St. Louis)',
    price: '$25',
    priceNote: '',
    audience: 'Local service business owners',
    summary: 'Our launch breakfast: how 12 local pros share one premium 9×12 card and reach 10,000 homes for about 9 cents a household each.',
    speakers: ['marcus-hale', 'tony-brandt'],
    photo: PHOTOS.workshop,
    attendees: 48,
    highlight: 'The first St. Louis route was anchored by a local Realtor that morning.',
  },
];

export const ALL_EVENTS = [...UPCOMING, ...PAST];

/** MADE UP: running totals for the stat strip. Keep in step with PAST. */
export const STATS = [
  {value: '130+', label: 'Business owners at our events so far'},
  {value: '3', label: 'Missouri cities, with more routes coming'},
  {value: '10,000', label: 'Homes reached by every card we mail'},
  {value: '1', label: 'Business per trade, per route. Always.'},
];

// -------------------------------------------------------------- speakers --

export interface Speaker {
  slug: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  talk: string;
}

/** MADE UP: every name, role, bio and photo here is a stand-in. */
export const SPEAKERS: Speaker[] = [
  {
    slug: 'marcus-hale',
    name: 'Marcus Hale',
    role: 'Founder, Saving America Money',
    photo: unsplash('1560250097-0b93528c311a', 600),
    bio: 'Built Saving America Money after watching good local trades lose to louder competitors. Hosts every breakfast and still answers the route-check calls himself.',
    talk: 'The 9-Cent Neighborhood Takeover',
  },
  {
    slug: 'renee-calloway',
    name: 'Renee Calloway',
    role: 'Anchor Realtor, St. Louis route',
    photo: unsplash('1573496359142-b8d87734a5a2', 600),
    bio: 'Top-producing agent and the anchor ad on the first St. Louis card. Talks about why she puts her name next to other local pros, and what homeowners say when they call.',
    talk: 'Why I Anchor the Card',
  },
  {
    slug: 'tony-brandt',
    name: 'Tony Brandt',
    role: 'Owner, Brandt Heating & Air',
    photo: unsplash('1507003211169-0a1dd7228f2d', 600),
    bio: 'Second-generation HVAC owner. Tried coupon packs, priced a solo mailer, then took the HVAC spot on his home route. Shares his tracked calls and scans, good weeks and slow ones.',
    talk: 'Every Call Counted: Tracking What Mail Brings Back',
  },
  {
    slug: 'alicia-moreno',
    name: 'Alicia Moreno',
    role: 'Licensing Program Lead',
    photo: unsplash('1580489944761-15a19d654956', 600),
    bio: 'Coaches new licensees through their first routes: finding an anchor, filling 12 spots and running a card from first call to mailbox.',
    talk: 'Your Territory, Your Business',
  },
];

// -------------------------------------------------------------- sponsors --

export interface Sponsor {
  name: string;
  kind: string;
  blurb: string;
}

/** MADE UP: placeholder partners. Replace with your real sponsors (and logos). */
export const SPONSORS: Sponsor[] = [
  {name: 'Riverbend Print Co.', kind: 'Print partner', blurb: 'Prints every 9×12 card on heavy gloss stock.'},
  {name: 'Clayton Commons', kind: 'Venue partner', blurb: 'Home of our St. Louis breakfasts.'},
  {name: 'Show-Me Trades Network', kind: 'Community partner', blurb: 'Brings Missouri contractors to the table.'},
  {name: 'Northside Coffee Roasters', kind: 'Breakfast partner', blurb: 'Keeps the coffee coming at 7:30 AM.'},
];

/** MADE UP: sponsorship packages and prices. */
export const SPONSOR_TIERS = [
  {
    name: 'Breakfast sponsor',
    price: '$500',
    per: 'per event',
    featured: false,
    items: [
      'Your name on the welcome slide and table cards',
      'Two minutes at the mic to introduce your business',
      'Two seats at the event',
      'A thank-you post on our blog',
    ],
  },
  {
    name: 'Series partner',
    price: '$2,000',
    per: 'per year',
    featured: true,
    items: [
      'Named partner at every breakfast and workshop',
      'Logo on this website and on event slides',
      'A table for your materials at every event',
      'Four seats at every event',
      'First look at new routes in your area',
    ],
  },
  {
    name: 'Table sponsor',
    price: '$250',
    per: 'per event',
    featured: false,
    items: ['A display table at one event', 'Your name in the event recap', 'One seat at the event'],
  },
];

// --------------------------------------------------------------- gallery --

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
  wide?: boolean;
}

/** MADE UP captions; stock photos. Replace with photos from your own events. */
export const GALLERY: GalleryPhoto[] = [
  {src: PHOTOS.workshop, alt: 'A speaker presents to a seated room of business owners in a brick-walled venue', caption: 'St. Louis launch breakfast', wide: true},
  {src: PHOTOS.audience, alt: 'Attendees seated close together, listening to a speaker', caption: 'Kansas City, anchor panel'},
  {src: PHOTOS.tables, alt: 'People talking and laughing around a long table', caption: 'Networking after the talks'},
  {src: PHOTOS.coffee, alt: 'Three people toast with coffee cups over a wooden table', caption: 'First coffee, 7:30 AM'},
  {src: PHOTOS.listening, alt: 'A full audience in a dark room facing the stage', caption: 'Full house in Kansas City', wide: true},
  {src: PHOTOS.meeting, alt: 'Business owners with notebooks around a meeting table', caption: 'Columbia licensee info night'},
  {src: PHOTOS.deal, alt: 'Two people high-five across a desk with a laptop', caption: 'A route claimed on the spot'},
  {src: PHOTOS.crowd, alt: 'A crowd mingles in a large hall with tall windows', caption: 'Open networking hour'},
  {src: PHOTOS.mic, alt: 'A microphone on a stand in front of a blurred audience', caption: 'Open mic: one-minute pitches'},
  {src: PHOTOS.stage, alt: 'A speaker on stage beside a large screen in front of a big audience', caption: 'Live card teardown'},
  {src: PHOTOS.chat, alt: 'Four people talk over drinks at a table', caption: 'Coffee-table conversations'},
  {src: PHOTOS.room, alt: 'An empty event room set with round tables and projection screens', caption: 'Setting up before doors open'},
];

// ------------------------------------------------------------- home page --

export const HOME = {
  hero: {
    eyebrow: 'Breakfasts · workshops · info nights in Missouri',
    title: 'Where local pros get known',
    body: 'Saving America Money hosts morning meetups for the plumbers, roofers, HVAC techs, Realtors and med spas who keep Missouri running. Good coffee, straight talk about local marketing, and a room full of people who refer each other.',
  },
  expect: {
    title: 'What to expect',
    lead: 'Ninety minutes, start to finish. You are back at work by 9:30.',
    items: [
      {
        title: 'Real numbers',
        body: 'Tracked calls and QR scans from real cards, with what worked and what didn’t. No slides full of promises.',
      },
      {
        title: 'The right room',
        body: 'Owners and operators only: trades, home services, healthcare and real estate. One of each is the whole point.',
      },
      {
        title: 'Hot breakfast',
        body: 'Coffee from 7:30, a real breakfast, and a room set up for talking, not just listening.',
      },
      {
        title: 'A route check',
        body: 'Find out on the spot whether your trade is still open on the 9×12 card in your ZIP code.',
      },
    ],
  },
  /** MADE UP: testimonials. Replace with quotes from real attendees (with their permission). */
  testimonials: [
    {
      text: 'I came for the breakfast and left with two referrals from the plumber at my table. Then I claimed HVAC on my home route.',
      name: 'Tony Brandt',
      role: 'Brandt Heating & Air',
    },
    {
      text: 'Finally a marketing event that talks numbers, not hype. Ninety minutes and I knew exactly what the card costs per house.',
      name: 'Dana Whitfield',
      role: 'Whitfield Roofing',
    },
    {
      text: 'Sitting next to the best names in town on one card is the whole pitch. These mornings are where you meet them.',
      name: 'Renee Calloway',
      role: 'Realtor, St. Louis',
    },
  ],
  cta: {
    title: 'Your trade, your ZIP, one seat.',
    body: 'Reserve a seat at the next breakfast, or join the community to hear about new dates first.',
  },
};

// ------------------------------------------------------------ about page --

export const ABOUT = {
  title: 'Local pros, in one room',
  lede: 'Saving America Money puts the best local service businesses on one premium postcard. Our events put them in one room.',
  story: [
    {
      heading: 'Why we started',
      body: 'Good local trades were losing to louder ones. A great roofer with no marketing budget was invisible on his own street, while coupon envelopes made everyone look like a discount. We built a premium 9×12 card that 12 non-competing local pros share, mailed to 10,000 homes in one ZIP code, with one business per trade on every route.',
    },
    {
      heading: 'Why we host events',
      body: 'Owners trust what they hear from other owners. So we started hosting early breakfasts where business owners compare real numbers, meet the other pros on their route and ask anything. They are also how most of our cards fill up.',
    },
    {
      heading: 'Where we are',
      body: 'We are launching across Missouri: St. Louis first, then Kansas City, Columbia and Springfield. Each new route starts with a local anchor, usually a top Realtor, then HVAC, plumbing and the rest of the trades.',
    },
  ],
  card: {
    title: 'The card, in four numbers',
    items: [
      {value: '9×12', label: 'Oversized, heavy gloss postcard'},
      {value: '10,000', label: 'Households in one ZIP per mail drop'},
      {value: '12', label: 'Spots per card, one trade each'},
      // Real prices from the business profile.
      {value: '$900', label: 'Smallest spot, about 9¢ a home'},
    ],
  },
  values: [
    {title: 'Premium, not coupons', body: 'Your business sits on a curated card next to trusted local names, never in a stuffed envelope.'},
    {title: 'One per trade', body: 'Category exclusivity on every route. Once a spot is claimed, no competitor in that trade can get on the card.'},
    {title: 'Everything tracked', body: 'Every spot gets its own QR code and phone number, so you see what each mail drop brought back.'},
    {title: 'No long contracts', body: 'Buy the drops you want. We would rather earn the next one with results.'},
  ],
};

// ---------------------------------------------------------- contact page --

export const CONTACT = {
  title: 'Talk to us',
  lede: 'Questions about an event, speaking, sponsoring, a spot on the card or becoming a licensee: send a note and a real person replies within one business day.',
  /** MADE UP: replace with your real contact details, or remove a line. */
  details: [
    {label: 'Email', value: 'hello@savingamericamoney.com', href: 'mailto:hello@savingamericamoney.com'},
    {label: 'Website', value: 'savingamericamoney.com', href: 'https://savingamericamoney.com'},
    {label: 'Based in', value: 'Missouri, USA', href: ''},
  ],
  faq: [
    {
      q: 'Who are the events for?',
      a: 'Owners and operators of local service businesses: plumbing, HVAC, roofing, contractors, real estate, med spas, auto and healthcare. Info nights are for people who want to run their own Saving America Money territory.',
    },
    {
      q: 'Do I pay online?',
      a: 'No. Reserve your seat here and pay at the door. Info nights are free.',
    },
    {
      q: 'Will someone try to sell me a spot on the card?',
      a: 'We will tell you how the card works and whether your trade is open on your route. Nobody is pushed into anything, and there are no long-term contracts.',
    },
    {
      q: 'Can I bring a colleague?',
      a: 'Yes. Reserve a seat for each person (up to four per request) so we have enough breakfast.',
    },
  ],
};

/** Fill `{name}` with the community's name. */
export function withName(text: string, name: string): string {
  return text.replaceAll('{name}', name);
}

/** "Thu, Dec 3, 2026" in the event's own city time (Missouri: America/Chicago). */
export function eventDate(event: EventItem, opts: Intl.DateTimeFormatOptions = {}): string {
  return new Date(event.start).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'America/Chicago',
    ...opts,
  });
}

export const speakerBySlug = (slug: string) => SPEAKERS.find(s => s.slug === slug);
