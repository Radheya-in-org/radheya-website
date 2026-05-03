export const COMPANY = {
  name: 'Radheya',
  nameTelugu: 'రాధేయ',
  tagline: 'Solving Tomorrow, Today.',
  description: 'We build products that solve real-world problems and craft custom software for businesses that demand excellence.',
  email: 'hello@radheya.in',
  location: 'India',
  socials: {
    linkedin: 'https://linkedin.com/company/radheya',
    twitter: 'https://x.com/radheya',
    github: 'https://github.com/radheya',
    instagram: 'https://www.instagram.com/_radheya.in/',
    whatsapp: 'https://whatsapp.com/channel/0029VbC7WTYH5JM3Y2aZXz3Y',
  },
} as const

export const COLORS = {
  primary: '#0A0A0A',
  accent: '#C9A84C',
  secondary: '#1A1A2E',
  text: '#F5F0E8',
  subtle: '#2A2A3E',
  muted: '#888888',
  darkCard: '#111118',
} as const

export const NAV_LINKS = [
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
] as const

export const STATS = [
  { value: 1, suffix: '+', label: 'Products Live' },
  { value: 7, suffix: '+', label: 'Builders & Counting' },
  { value: 100, suffix: '%', label: 'Purpose Driven' },
] as const

export type ProductStatus = 'live' | 'upcoming'

export interface Product {
  name: string
  tagline: string
  description: string
  features: readonly string[]
  techStack: readonly string[]
  url: string
  status: ProductStatus
}

export const PRODUCTS: readonly Product[] = [
  {
    name: 'MyNextStep.in',
    tagline: 'Career Navigator',
    description: 'AI-powered career guidance platform helping people find their next career move with personalized recommendations, skill gap analysis, and curated learning paths.',
    features: [
      'AI-powered career path recommendations',
      'Skill gap analysis with actionable insights',
      'Curated learning paths from top platforms',
      'Mentor matching and community support',
    ],
    techStack: ['Next.js', 'Python', 'GPT-4', 'PostgreSQL'],
    url: 'https://mynextstep.in',
    status: 'live',
  },
  {
    name: 'StudioMate',
    tagline: 'CRM for Indian wedding photography studios',
    description: 'Manage clients, bookings, packages, gallery delivery, and payments from one place — web + mobile, free APK download.',
    features: [
      'Bookings, calendar & client portal',
      'Invoices + Razorpay collections',
      'Mobile app with OTA updates',
      'Free APK — no Play Store required',
    ],
    techStack: ['Angular 18', 'Node.js', 'React Native', 'Postgres'],
    url: 'https://studiomate-web-production.up.railway.app',
    status: 'live',
  },
]

export const SERVICES = [
  {
    id: 'web-apps',
    title: 'Custom Web Applications',
    shortDesc: 'Scalable web apps built with modern frameworks.',
    description: 'From complex dashboards to customer-facing platforms, we build web applications that scale with your business. Our stack includes React, Next.js, Node.js, and cloud-native architectures that handle millions of users.',
    icon: 'Globe',
    techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    deliverables: ['Full-stack web application', 'Admin dashboard', 'API development', 'Cloud deployment'],
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    shortDesc: 'Native and cross-platform mobile experiences.',
    description: 'Whether you need a native iOS app, an Android app, or a cross-platform solution, we build mobile experiences that users love. We focus on performance, intuitive design, and seamless integration with your backend systems.',
    icon: 'Smartphone',
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    deliverables: ['iOS & Android apps', 'Cross-platform development', 'App Store deployment', 'Push notifications'],
  },
  {
    id: 'saas',
    title: 'SaaS Product Development',
    shortDesc: 'End-to-end SaaS products from concept to launch.',
    description: 'We bring SaaS ideas to life — from initial concept and architecture through development, launch, and iteration. With our product-first DNA, we build SaaS products with the care and attention we give our own.',
    icon: 'Layers',
    techStack: ['Next.js', 'Stripe', 'Auth0', 'PostgreSQL', 'Redis'],
    deliverables: ['Multi-tenant architecture', 'Subscription billing', 'User management', 'Analytics dashboard'],
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    shortDesc: 'Architecture review and technology strategy.',
    description: 'Sometimes you need expert guidance before building. We offer architecture reviews, technology audits, and strategic consulting to help you make the right technical decisions before committing resources.',
    icon: 'Compass',
    techStack: ['System Design', 'Cloud Architecture', 'Performance', 'Security'],
    deliverables: ['Architecture documentation', 'Technology roadmap', 'Performance audit', 'Security review'],
  },
] as const

export const PROCESS_STEPS = [
  {
    title: 'Discovery',
    description: 'We listen deeply, understand your vision, and define the scope of what matters most.',
  },
  {
    title: 'Design',
    description: 'We architect solutions and design experiences that serve your users and your business goals.',
  },
  {
    title: 'Develop',
    description: 'We build with precision — clean code, modern stack, rigorous testing, and iterative delivery.',
  },
  {
    title: 'Deliver',
    description: 'We launch, measure, and iterate — ensuring your product thrives in the real world.',
  },
] as const

export const VALUES = [
  {
    title: 'Purpose over Profit',
    description: 'We build software because it matters — not because it trends. Every product we create starts with a problem worth solving.',
    icon: 'Target',
  },
  {
    title: 'Craft over Speed',
    description: 'We write code that lasts. Quality is not a phase — it is our default mode. We ship fast, but never at the cost of craft.',
    icon: 'Gem',
  },
  {
    title: 'Impact over Vanity',
    description: 'We measure success by real-world change, not download counts or vanity metrics. If it does not help someone, it does not ship.',
    icon: 'Zap',
  },
  {
    title: 'Roots over Trends',
    description: 'We respect fundamentals. Trends fade, but solid engineering endures. We adopt new technology only when it serves the mission.',
    icon: 'TreePine',
  },
] as const

export const TESTIMONIALS = [] as const

export const BLOG_POSTS = [
  {
    slug: 'why-we-build-products-first',
    title: 'Why We Build Products First',
    excerpt: 'How building our own products makes us better partners for our clients — and why the product-first approach is the future of software companies.',
    date: '2026-03-10',
    readTime: '5 min read',
    category: 'Product Thinking',
  },
  {
    slug: 'architecture-lessons-from-scaling-mynextstep',
    title: 'Architecture Lessons from Scaling MyNextStep',
    excerpt: 'Real-world lessons in system design from building and scaling our career guidance platform to serve thousands of users.',
    date: '2026-02-28',
    readTime: '8 min read',
    category: 'Engineering',
  },
  {
    slug: 'the-karna-mindset-in-software',
    title: 'The Karna Mindset in Software Engineering',
    excerpt: 'What the warrior of the Mahabharata teaches us about purpose-driven engineering, humility, and unwavering commitment to craft.',
    date: '2026-02-15',
    readTime: '6 min read',
    category: 'Company Updates',
  },
  {
    slug: 'choosing-the-right-tech-stack-2026',
    title: 'Choosing the Right Tech Stack in 2026',
    excerpt: 'A pragmatic guide to selecting technologies that serve your product — not your resume. Roots over trends.',
    date: '2026-01-20',
    readTime: '7 min read',
    category: 'Engineering',
  },
  {
    slug: 'from-services-to-products-our-journey',
    title: 'From Services to Products: Our Journey',
    excerpt: 'The story of how Radheya evolved from a services company to a product-first studio — and the lessons learned along the way.',
    date: '2026-01-05',
    readTime: '4 min read',
    category: 'Company Updates',
  },
] as const

export const TEAM = [
  {
    name: 'Sai Teja Chunchu',
    role: 'Chief Executive Officer',
    tagline: 'Sets the direction, holds the line',
    image: null,
    linkedin: '#',
  },
  {
    name: 'Mahendher Padma',
    role: 'Chief Technical Officer',
    tagline: 'Builds systems that scale',
    image: null,
    linkedin: 'https://www.linkedin.com/in/mahendhar-padma-0418241b7/',
  },
  {
    name: 'Rohith Aerva',
    role: 'Marketing Head & DevOps Lead',
    tagline: 'Keeps the infrastructure alive',
    image: null,
    linkedin: 'https://www.linkedin.com/in/rohith-aerva-9980652b5/',
  },
  {
    name: 'Uday Sunkari',
    role: 'Head of Engineering',
    tagline: 'Ships the roadmap on time',
    image: null,
    linkedin: '#',
  },
  {
    name: 'Hari Krishna Vemula',
    role: 'Business & Research',
    tagline: 'Finds the problems worth solving',
    image: null,
    linkedin: 'https://www.linkedin.com/in/harikrishnav/',
  },
  {
    name: 'Sai Charan Vilasagaram',
    role: 'Chief Financial Officer',
    tagline: 'Makes the numbers talk',
    image: null,
    linkedin: 'https://www.linkedin.com/in/saicharan2804/',
  },
  {
    name: 'Arun Adepu',
    role: 'Engineering & Vision',
    tagline: 'Turns ideas into products',
    image: '/images/team/arun-adepu.png',
    linkedin: 'https://www.linkedin.com/in/arun-adepu/',
  },
  {
    name: 'Vishal Gajula',
    role: 'Product & Innovation',
    tagline: 'Ships what users actually need',
    image: null,
    linkedin: 'https://www.linkedin.com/in/vishal-gajula-303a8730b/',
  },
  {
    name: 'Manjunath Dudam',
    role: 'Chief Strategy Officer',
    tagline: 'Connects strategy to action',
    image: null,
    linkedin: 'https://www.linkedin.com/in/manjunath-dudam-43998a23b/',
  },
  {
    name: 'Naresh Edagotti',
    role: 'Artificial Intelligence & Machine Learning',
    tagline: 'Teaches machines to think',
    image: null,
    linkedin: 'https://www.linkedin.com/in/naresh-edagotti-6a71a1233/',
  },
] as const

export const BENEFITS = [
  {
    title: 'Remote-First',
    description: 'Work from anywhere. We believe great work happens when people have the freedom to choose their environment.',
    icon: 'MapPin',
  },
  {
    title: 'Product Mindset',
    description: 'You will not just write code — you will shape products. Every engineer here thinks like a founder.',
    icon: 'Lightbulb',
  },
  {
    title: 'Growth-Oriented',
    description: 'We invest in your growth. Learning budgets, conference sponsorships, and time to explore new technologies.',
    icon: 'TrendingUp',
  },
  {
    title: 'Real Impact',
    description: 'Your work will reach real users solving real problems. No meaningless tickets — every feature matters.',
    icon: 'Heart',
  },
] as const
