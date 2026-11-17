/**
 * The site's own words: brand, navigation and every page's copy. Edit freely.
 *
 * ✎ Program details (what coaching includes, how the agency path works) are
 *   a first draft written from the features of BEE’s four platforms. Search
 *   this file for "EDIT" to find the parts to check against your real offer.
 *   Prices, testimonials and results are deliberately left out: add real ones.
 */

export interface NavItem {
  label: string;
  href: string;
}

export const BRAND = {
  name: 'Business Efficiency Experts',
  short: 'BEE',
  tagline: 'Work smarter. Grow faster.',
  description:
    'Business Efficiency Experts (BEE) is a coaching program and community that helps owners run leaner with AI and build their own agency, with BEE’s own marketing, coaching, community and content platforms.',
  footer: 'Coaching, community and an AI-powered toolkit for owners who want to save time, cut costs and grow.',
  /** Shown as written; `phoneHref` is what a phone dials. */
  phone: '(808) 353-0040',
  phoneHref: 'tel:+18083530040',
  /** Every "Book a call" button: the discovery-call calendar on the BEE CRM. */
  callHref: 'https://crm.beegr8.com/c/bee-discovery-call',
};

/** Header and footer navigation. Every href is a page of THIS site. */
export const NAV: NavItem[] = [
  {label: 'Coaching', href: '/coaching'},
  {label: 'Agency', href: '/agency'},
  {label: 'Toolkit', href: '/toolkit'},
  {label: 'About', href: '/about'},
  {label: 'Blog', href: '/blog'},
  {label: 'Contact', href: '/contact'},
];

/** Photos are Unsplash stand-ins: swap them for photos of your own team and members. */
const unsplash = (id: string, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const PHOTOS = {
  /** Two colleagues high-fiving at a desk with a laptop. */
  success: unsplash('1600880292203-757bb62b4baf'),
  /** A team working on laptops around a shared table. */
  team: unsplash('1522071820081-009f0129c71c'),
  /** A woman leading a whiteboard session covered in sticky notes. */
  workshop: unsplash('1552664730-d307ca884978'),
  /** People with notebooks around a wooden meeting table. */
  meeting: unsplash('1517048676732-d65bc937f952'),
  /** A team meeting with laptops in a bright room. */
  boardroom: unsplash('1521737604893-d14cc237f11d'),
  /** A laptop showing a business analytics dashboard. */
  dashboard: unsplash('1460925895917-afdab827c52f'),
  /** Four people smiling around a table, looking at a phone together. */
  community: unsplash('1543269865-cbf427effbad'),
};

// --------------------------------------------------------------- toolkit --

export interface Tool {
  slug: string;
  name: string;
  role: string;
  icon: 'trending' | 'target' | 'users' | 'zap';
  /** One line for cards. */
  body: string;
  points: string[];
  /** The toolkit page. */
  replaces: string;
  useFor: string[];
}

/** BEE’s four platforms, offered under the BEE brand. Rename them here. */
export const TOOLS: Tool[] = [
  {
    slug: 'growth',
    name: 'BEE Growth',
    role: 'Marketing & CRM',
    icon: 'trending',
    body: 'Your AI marketing operating system, set up as your own account: a complete CRM with its own leads, inbox, phone number, calendar and automations.',
    points: ['AI texts new leads in seconds and books them', 'Facebook and Instagram ads from a plain description', 'Run it for your clients under your own brand'],
    replaces: 'A CRM, a texting tool, an ad designer, a booking app, a landing page builder and an answering service.',
    useFor: [
      'Reply to every new lead in seconds, day or night, and book them on your calendar',
      'Build and launch ads from a short description, starting from proven templates',
      'Manage your Google Business Profile, reviews and AI calling in one place',
      'Send estimates and invoices, run email campaigns and track the pipeline',
      'Give each client their own account under your brand',
    ],
  },
  {
    slug: 'coach',
    name: 'BEE Coach',
    role: 'Coaching',
    icon: 'target',
    body: 'Everything a coach or consultant needs to run sessions clients remember, under your own brand.',
    points: ['320+ interactive coaching tools', 'Booking, client CRM and video in one place', 'AI session recaps as branded PDFs'],
    replaces: 'A scheduling app, a video tool, worksheet templates, a client CRM and hours of session notes.',
    useFor: [
      'Run live sessions with interactive tools like the Life Wheel, DISC and GROW',
      'Book clients online with calendar sync and built-in video',
      'Turn recorded sessions into AI summaries and branded PDF recaps',
      'Run team assessments, 360 reviews and surveys with a QR code',
    ],
  },
  {
    slug: 'community',
    name: 'BEE Community',
    role: 'Community',
    icon: 'users',
    body: 'Run a branded community with courses and memberships, or launch your own community platform for clients.',
    points: ['Branded iOS and Android apps', 'Courses, events, live streams and chat', 'Sell memberships with 0% transaction fees'],
    replaces: 'A course platform, a membership plugin, a forum, an events tool and a separate mobile app.',
    useFor: [
      'Host your clients and students in one branded home, on web and mobile',
      'Sell memberships, paid channels and courses and keep all the revenue',
      'Run live events, streams and challenges with points and badges',
      'Build pages and mini apps by describing them, with no code',
    ],
  },
  {
    slug: 'content',
    name: 'BEE Content',
    role: 'Content',
    icon: 'zap',
    body: 'Build a whole marketing campaign in an afternoon, in your voice, from facts you save once.',
    points: ['Sales pages, emails, ads and posts', 'Guided workflows, not blank prompts', 'Flags missing facts instead of inventing them'],
    replaces: 'A copywriter for every launch, a pile of prompt documents and the blank page.',
    useFor: [
      'Save your business facts, voice and proof once, then reuse them everywhere',
      'Write sales pages, email sequences, ads, webinars and blog posts that match',
      'Follow guided workflows instead of guessing what to ask an AI',
      'Review every draft before it goes out, with missing facts flagged',
    ],
  },
];

/** Figures from BEE’s platforms, for the home page strip. */
export const FACTS = [
  {value: 'Seconds', label: 'How fast BEE Growth AI replies to a new lead'},
  {value: '320+', label: 'Interactive coaching tools in BEE Coach'},
  {value: '0%', label: 'Transaction fees on BEE Community memberships'},
  {value: '1 day', label: 'To build a full campaign with BEE Content'},
];

// ------------------------------------------------------------------ home --

export const HOME = {
  hero: {
    eyebrow: 'Business Efficiency Experts',
    title: 'Work smarter. Grow faster.',
    body: 'BEE is the coaching program and community for owners who want AI to do the busywork. Run your business leaner, or build your own agency, with a proven toolkit and experts in your corner.',
  },
  pillars: {
    title: 'The rules of competing have changed',
    lead: 'Businesses using AI answer faster, market cheaper and serve more clients with the same team. We help you become one of them.',
    items: [
      {icon: 'clock', title: 'Save time', body: 'Automate lead replies, booking, follow-ups and reporting. Get back the hours admin used to eat.'},
      {icon: 'trending', title: 'Make more money', body: 'Respond first, follow up every time and launch campaigns in an afternoon. Fewer leads slip away.'},
      {icon: 'layers', title: 'Cut the tool sprawl', body: 'Replace a stack of separate subscriptions with four platforms that cover marketing, coaching, community and content.'},
      {icon: 'users', title: 'Never build alone', body: 'Coaching and a community of owners building the same thing. Ask, share and get unstuck fast.'},
    ] as const,
  },
  steps: {
    title: 'How BEE works',
    items: [
      {title: 'Join the hive', body: 'Get into the community: the coaching, the playbooks and owners a step ahead of you.'},
      {title: 'Set up your stack', body: 'We help you set up your BEE Growth account and the tools that fit your business, in the right order.'},
      {title: 'Grow with coaching', body: 'Work the plan with regular coaching. Measure the time saved and the revenue gained, then scale.'},
    ],
  },
  paths: {
    title: 'Two ways to work with BEE',
    lead: 'Same toolkit, same coaching. Pick the path that fits where you are.',
    items: [
      {
        name: 'Grow your business',
        who: 'For owners who want to run leaner and win more customers.',
        items: [
          'AI lead response and booking on your own BEE Growth account',
          'Campaigns and content built in an afternoon',
          'Coaching on where AI saves you the most time',
          'A community of owners solving the same problems',
        ],
        cta: {label: 'Explore coaching', href: '/coaching'},
      },
      {
        name: 'Build your own agency',
        who: 'For coaches, consultants and marketers ready to serve clients.',
        items: [
          'BEE marketing, coaching and community platforms, under your brand',
          'A BEE Growth account for every client you sign',
          'Coaching on packaging, pricing and selling your offer',
          'Playbooks to deliver results without a big team',
        ],
        cta: {label: 'Explore the agency path', href: '/agency'},
        featured: true,
      },
    ],
  },
  faq: [
    {q: 'Do I need to be technical?', a: 'No. The platforms are built for business owners, and coaching walks you through setup step by step.'},
    {
      q: 'What is a BEE Growth account?',
      a: 'A complete CRM of your own: your leads, inbox, phone number, calendar, pipelines, forms and automations, under your branding.',
    },
    {q: 'Can I resell the tools to my own clients?', a: 'Yes. That is the agency path: BEE platforms you set up for each client under your own brand.'},
    {q: 'Do I have to use all four platforms?', a: 'No. Start with whatever saves you the most time right now. We help you add the rest when it makes sense.'},
  ],
  cta: {
    eyebrow: 'Your next step',
    title: 'Stop doing it the hard way',
    body: 'Join BEE and get the coaching, the community and the tools to grow with less effort.',
  },
};

// -------------------------------------------------------------- coaching --

/** ✎ EDIT: the coaching program's real format, cadence and price. */
export const COACHING = {
  title: 'Coaching that turns AI into hours and dollars',
  lede: 'Practical business coaching for owners who want a leaner operation: find where the time goes, automate it with the right tools, and put the hours back into growth.',
  focus: {
    title: 'What we work on together',
    items: [
      {title: 'Efficiency audit', body: 'Map where your week actually goes and find the tasks AI and automation can take off your plate first.'},
      {title: 'Lead to booking', body: 'Set up instant lead replies, follow-ups and online booking so no enquiry waits until Monday.'},
      {title: 'Marketing on a system', body: 'Build campaigns, content and ads from one profile of your business instead of starting from scratch each time.'},
      {title: 'Offer and pricing', body: 'Sharpen what you sell and what you charge, so the time you save turns into profit, not just free hours.'},
      {title: 'Team and delegation', body: 'Decide what people do, what software does, and how you hand work off without losing quality.'},
      {title: 'Numbers that matter', body: 'Track response time, booked calls, close rate and hours saved, so you can see the change every month.'},
    ],
  },
  format: {
    title: 'How the coaching works',
    items: [
      {icon: 'message', title: 'Group coaching calls', body: 'Live calls where you bring a real problem and leave with the next step.'},
      {icon: 'target', title: 'Strategy sessions', body: 'Focused one-to-one time to plan your stack and your priorities.'},
      {icon: 'layers', title: 'Playbooks and courses', body: 'Step-by-step setups for each tool, inside the community, at your own pace.'},
      {icon: 'users', title: 'The hive', body: 'Owners at every stage, sharing what works, in one place on web and mobile.'},
    ] as const,
  },
  faq: [
    {q: 'Who is coaching for?', a: 'Owners and operators of small and growing businesses who feel busy but not efficient, and want a clear plan to fix it.'},
    {q: 'How much time do I need?', a: 'A few hours a week to start. The point of the program is to give you more time back than it takes.'},
    {q: 'Do I need the tools before I start?', a: 'No. We help you choose and set them up as part of the coaching, starting with the one that pays off fastest.'},
  ],
};

// ---------------------------------------------------------------- agency --

/** ✎ EDIT: the agency program's real format and terms. */
export const AGENCY = {
  title: 'Build your own agency on a proven stack',
  lede: 'Every local business needs faster lead response, better marketing and less admin. BEE gives you the platforms, branded as yours, the playbooks and the coaching to sell that as your own agency.',
  services: {
    title: 'What you can sell',
    lead: 'Services local businesses already pay for, delivered with tools that do most of the work.',
    items: [
      {title: 'AI lead response', body: 'Instant texting, booking and follow-up for every lead, on the client’s own BEE Growth account.'},
      {title: 'Ads and campaigns', body: 'Facebook and Instagram ads and full campaigns, built fast from proven templates.'},
      {title: 'Local visibility', body: 'Google Business Profile management, reviews and listings, run for the client.'},
      {title: 'Client communities', body: 'A branded community, course or membership with its own mobile app.'},
      {title: 'Coaching programs', body: 'Package your expertise into sessions and assessments with interactive tools.'},
      {title: 'Content on retainer', body: 'Emails, posts, sales pages and blogs, in the client’s voice, every month.'},
    ],
  },
  steps: {
    title: 'From zero to your first clients',
    items: [
      {title: 'Pick your niche', body: 'Choose who you serve and the problem you solve best.'},
      {title: 'Package your offer', body: 'Turn the toolkit into two or three clear packages with a price.'},
      {title: 'Brand your platform', body: 'Put your name and logo on the platforms your clients log into.'},
      {title: 'Sign and deliver', body: 'Win your first clients with our playbooks and set each one up in minutes.'},
      {title: 'Scale', body: 'Add clients without adding staff, because the platforms do the heavy lifting.'},
    ],
  },
  included: [
    'BEE marketing, coaching and community platforms, under your brand',
    'A BEE Growth account for every client',
    'Playbooks for setup, onboarding and delivery',
    'Coaching on niche, offer, pricing and sales',
    'A community of agency owners to learn from',
  ],
  faq: [
    {q: 'Do I need agency experience?', a: 'No. The program is built for coaches, consultants, marketers and owners starting their first agency.'},
    {q: 'Whose brand do clients see?', a: 'Yours. Clients see your name, logo and colours.'},
    {q: 'Can I start part-time?', a: 'Yes. Many agencies start with one or two clients alongside other work and grow from there.'},
  ],
};

// ----------------------------------------------------------------- about --

/** ✎ EDIT: tell your own story, and add your name and photo. */
export const ABOUT = {
  title: 'We help businesses do more with less',
  lede: 'Business Efficiency Experts, BEE for short, is a coaching program and community built on one idea: in today’s market, the efficient business wins.',
  story: [
    {
      heading: 'Why BEE exists',
      body: 'Small businesses are competing with companies that answer every lead instantly, market every day and run lean with AI. Most owners are too busy running the business to work out how. We built BEE to close that gap: the right tools, set up in the right order, with coaching to make them stick.',
    },
    {
      heading: 'Why a bee',
      body: 'A hive gets more done than any single bee, and nothing in it is wasted. That is the business we want you to run: organised, efficient and productive, with a community around you that makes everyone stronger.',
    },
    {
      heading: 'What we believe',
      body: 'Technology should save you time, not eat it. You should own your brand and your clients. And the best way to learn is next to people a step ahead of you, sharing what actually works.',
    },
  ],
  values: [
    {title: 'Efficient', body: 'Every tool and every habit has to earn its place by saving time or making money.'},
    {title: 'Practical', body: 'Real setups and real numbers, not theory. You leave every session with a next step.'},
    {title: 'Together', body: 'The hive is the advantage. Members share wins, templates and lessons openly.'},
  ],
};

// --------------------------------------------------------------- contact --

export const CONTACT = {
  title: 'Talk to the BEE team',
  lede: 'Book a discovery call, ask about coaching or the agency program, or get help choosing the right tools. A real person replies.',
  /** The BEE CRM Smart Form on /contact. */
  formUrl: 'https://crm.beegr8.com/f/book-discovery-call',
  details: [
    {label: 'Phone', value: '(808) 353-0040', href: 'tel:+18083530040'},
    {label: 'Replies', value: 'Within one business day', href: null},
    {label: 'Members', value: 'Ask in the community', href: '/feeds'},
    {label: 'New here', value: 'Join BEE', href: '/join'},
  ],
  faq: [
    {q: 'What happens on a discovery call?', a: 'We look at where your time goes, where leads slip away and which tool would pay off first. You leave with a plan, whether or not you join.'},
    {q: 'Is BEE for my kind of business?', a: 'If you sell a service and spend too much time on admin, follow-up or marketing, yes. Tell us about your business and we will say honestly.'},
    {q: 'I already use some of the tools. Can I still join?', a: 'Of course. We help you get more out of what you have and fill the gaps.'},
  ],
};
