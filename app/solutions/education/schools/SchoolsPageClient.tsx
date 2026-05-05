'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Check,
  Camera,
  PenTool,
  Code2,
  Rocket,
  HeartHandshake,
  ChevronDown,
  MessageCircle,
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import PageTransition from '@/components/layout/PageTransition'
import VijayaBow from '@/components/karna/VijayaBow'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { COMPANY } from '@/lib/constants'

interface Tier {
  id: string
  name: string
  tagline: string
  setup: string
  monthly: string
  bestFor: string
  features: string[]
  highlighted?: boolean
}

const TIERS: Tier[] = [
  {
    id: 'standard',
    name: 'Standard',
    tagline: 'Showcase',
    setup: '₹49,999',
    monthly: '₹999/month',
    bestFor: 'Smaller schools — 300 to 700 students',
    features: [
      '8 to 10 pages, mobile responsive',
      'Basic CMS (news + gallery)',
      'Online inquiry form + WhatsApp button',
      '1-year hosting + domain + SSL',
      '2 professional email IDs',
      'Monthly: hosting + 1 hour content updates',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'Showcase Pro',
    setup: '₹79,999',
    monthly: '₹1,999/month',
    bestFor: 'Established mid-tier schools — 700 to 1,200 students',
    features: [
      '12 to 15 pages, custom design',
      'Full CMS (gallery, news, faculty, achievements, events)',
      'Online admission inquiry with WhatsApp + email routing',
      'Multi-campus support',
      '5 professional email IDs',
      'SEO setup + Google Search Console',
      'Monthly: hosting + 3 hours content updates + WhatsApp support',
    ],
    highlighted: true,
  },
  {
    id: 'elite',
    name: 'Elite',
    tagline: 'Showcase Pro+',
    setup: '₹1,29,999',
    monthly: '₹2,999/month',
    bestFor: 'Top-end mid-tier schools — 1,000+ students',
    features: [
      'Everything in Premium',
      'Professional photography day at your campus',
      'Telugu + English language toggle',
      '360° virtual campus tour',
      'Newsletter setup + monthly mailer template',
      'Local SEO (Google Business + citations)',
      'Monthly: 5 hours content updates + quarterly review',
    ],
  },
]

const INCLUDED = [
  { title: 'Mobile-first design', body: '60%+ of parents browse on mobile. Every page is built for phones first.' },
  { title: 'Self-service CMS', body: 'Your staff updates gallery, news, and achievements without calling us.' },
  { title: 'Online admission inquiry', body: 'Form submissions route to WhatsApp + email instantly.' },
  { title: 'Photo gallery', body: 'Categorized by event and year, with lightbox and lazy loading.' },
  { title: 'Achievements showcase', body: 'Toppers, sports, cultural — with photos that build credibility.' },
  { title: 'News & events', body: 'Auto-archived, searchable, and SEO-friendly.' },
  { title: 'SEO + schema markup', body: 'Structured data for Google to recognize you as an EducationalOrganization.' },
  { title: 'Multi-campus support', body: 'Different addresses, maps, and contact details per campus.' },
  { title: 'Professional email', body: 'admissions@yourschool.in, principal@yourschool.in — your domain, not gmail.' },
  { title: 'Automated backups', body: 'Daily backups, 30-day retention, restore on request.' },
  { title: 'SSL + security', body: 'HTTPS, security headers, and uptime monitoring.' },
  { title: 'Analytics + Search Console', body: 'Know which pages drive admission inquiries.' },
]

const PROCESS = [
  {
    step: '01',
    title: 'Discovery',
    icon: PenTool,
    body: 'We meet your principal and correspondent, understand your school’s story, and lock the scope. Typically 2 to 3 days.',
  },
  {
    step: '02',
    title: 'Photography',
    icon: Camera,
    body: 'We visit your campus and capture infrastructure, classrooms, faculty, and student moments. Fresh photos, not stock.',
  },
  {
    step: '03',
    title: 'Design',
    icon: PenTool,
    body: 'We share design mockups in Figma. You review with your team. We iterate until it feels like your school.',
  },
  {
    step: '04',
    title: 'Build',
    icon: Code2,
    body: 'Development, content entry, CMS setup, email setup. We send weekly progress updates over WhatsApp.',
  },
  {
    step: '05',
    title: 'Launch',
    icon: Rocket,
    body: 'Domain pointed, SSL live, Google Search Console submitted. Staff trained on the CMS in person.',
  },
  {
    step: '06',
    title: 'Support',
    icon: HeartHandshake,
    body: 'We host, monitor, back up, and update. You message us on WhatsApp when you need something.',
  },
]

const FAQ: { q: string; a: string }[] = [
  {
    q: 'Why ₹49,999 when Wix or Squarespace cost ₹3,000 a year?',
    a: 'Because templates don’t convert parents. A Wix site looks like every other Wix site — it doesn’t tell your school’s story, doesn’t showcase your toppers and infrastructure, and doesn’t rank on Google. Schools that take admissions seriously invest in a real website. The ones that don’t will keep losing parents to schools that did.',
  },
  {
    q: 'Can our staff update content themselves?',
    a: 'Yes. Every plan includes a CMS — your office staff can add news, upload gallery photos, update achievements, and post events without writing any code. We train your team in person on launch day.',
  },
  {
    q: 'Do we own the website if we stop working with Radheya?',
    a: 'Yes. The content, photos, and design are yours from day one. If you ever want to leave, we hand over the codebase and migrate your domain to your new provider. No lock-in beyond the standard 12-month support contract.',
  },
  {
    q: 'How long does it take from kick-off to launch?',
    a: 'Standard: 4 to 5 weeks. Premium: 6 to 8 weeks. Elite: 8 to 10 weeks (the photography day adds time). We commit to dates in writing — no vague "soon" answers.',
  },
  {
    q: 'Do we need to provide our own photos and content?',
    a: 'For Standard and Premium, yes — you share existing photos, faculty bios, and achievement data. For Elite, our photographer comes to your campus. For all tiers, we help write and edit content so it sounds professional.',
  },
  {
    q: 'Can the website be in Telugu?',
    a: 'Yes — Elite plan includes a Telugu + English toggle. For Standard and Premium, we can add Telugu as a paid add-on (₹10,000) or build only in English.',
  },
  {
    q: 'What does the monthly fee actually cover?',
    a: 'Hosting, domain renewal, SSL renewal, professional email, daily backups, security monitoring, and a fixed number of hours of content/maintenance work per month (1 to 5 hours depending on tier). It is not a "sit on your money" fee — you use those hours every month.',
  },
  {
    q: 'What if our school grows and we need more features later?',
    a: 'Add-ons are à la carte: extra language (₹10K), virtual tour (₹15K), online fee payment (₹20K), parent portal (₹40K). Or upgrade to our School CRM and Bus Tracking products when they launch — same login, same support team.',
  },
  {
    q: 'Are there any hidden costs?',
    a: 'No. The setup fee is one-time. The monthly fee is fixed. Domain and hosting are included. The only extra costs are: optional add-ons (which you choose), or content updates beyond your monthly hours (₹1,000/hour, billed only if you ask).',
  },
  {
    q: 'What if we need to cancel?',
    a: '60-day notice on the monthly plan after the first 12 months. Setup fee is non-refundable once work has started. We will hand over your domain and backups gracefully.',
  },
]

export default function SchoolsPageClient() {
  return (
    <PageTransition>
      <Hero />
      <Problem />
      <Pricing />
      <Included />
      <Hosting />
      <Process />
      <FAQSection />
      <FinalCTA />
    </PageTransition>
  )
}

function Hero() {
  return (
    <section className="relative pt-32 pb-16 px-6 overflow-hidden">
      <div className="absolute top-20 right-8 hidden lg:block">
        <VijayaBow size={220} opacity={0.04} />
      </div>
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          className="font-ui text-accent text-xs uppercase tracking-[4px] mb-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          Solutions / Education / Schools
        </motion.p>
        <motion.h1
          className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-warm-ivory mb-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          A school website that <span className="text-accent">drives admissions</span>
        </motion.h1>
        <motion.p
          className="font-body text-muted text-lg max-w-2xl mx-auto mb-10"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Built for mid-tier private schools in Telangana and across India.
          Real photography. Real story. Real conversions. Hosting, support, and
          updates all included.
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <Button variant="primary" href="#pricing" size="lg">
            See Pricing
          </Button>
          <a
            href={COMPANY.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg border border-accent text-warm-ivory bg-transparent hover:bg-accent/10 font-heading font-semibold rounded-lg transition-colors duration-300"
          >
            <MessageCircle size={18} strokeWidth={2} />
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function Problem() {
  const points = [
    'Parents Google your school before they call. What they see decides whether they call.',
    'Most school websites in Telangana look like 2012 — table layouts, broken galleries, dead phone numbers.',
    'Your competitors are catching up. The schools winning admissions in 2026 invested in their digital first impression.',
    'A great website is not vanity. It is the cheapest admissions team you will ever hire.',
  ]
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Your website is your first admissions counsellor"
          subtitle="It works 24/7, never takes leave, and either convinces parents — or sends them to your competitor."
        />
        <motion.ul
          className="mt-12 space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {points.map((point, i) => (
            <motion.li
              key={i}
              variants={staggerItem}
              className="flex items-start gap-4 font-body text-warm-ivory/80 text-lg leading-relaxed"
            >
              <span className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-accent ring-2 ring-accent/30" />
              <span>{point}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-dark-card/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Three plans, transparent pricing"
          subtitle="Pick the one that fits your school size today. Upgrade anytime."
        />
        <motion.div
          className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {TIERS.map((tier) => (
            <motion.div key={tier.id} variants={staggerItem}>
              <TierCard tier={tier} />
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-10 text-center font-body text-muted text-sm">
          Custom requirements (multiple campuses, parent portal, online fee
          collection, etc.)?{' '}
          <a
            href={COMPANY.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 font-medium"
          >
            Talk to us →
          </a>
        </p>
      </div>
    </section>
  )
}

function TierCard({ tier }: { tier: Tier }) {
  const highlighted = tier.highlighted
  return (
    <Card
      className={`relative p-8 h-full flex flex-col ${
        highlighted ? 'border-accent/60 ring-1 ring-accent/30' : ''
      }`}
      tilt={false}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-heading font-semibold tracking-wider uppercase rounded-full bg-accent text-primary whitespace-nowrap">
          Most Popular
        </span>
      )}
      <p className="font-ui text-accent text-xs uppercase tracking-[3px] mb-2">
        {tier.tagline}
      </p>
      <h3 className="font-heading text-3xl font-bold text-warm-ivory mb-4">
        {tier.name}
      </h3>

      <div className="mb-2">
        <span className="font-heading text-4xl font-bold text-warm-ivory">
          {tier.setup}
        </span>
        <span className="font-body text-muted text-sm ml-2">one-time</span>
      </div>
      <p className="font-body text-warm-ivory/70 text-sm mb-1">
        + <span className="font-heading text-accent font-semibold">{tier.monthly}</span>{' '}
        managed
      </p>
      <p className="font-body text-muted text-xs mb-6 italic">
        {tier.bestFor}
      </p>

      <ul className="space-y-3 mb-8 flex-1">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check
              className="mt-0.5 flex-shrink-0 text-accent"
              size={16}
              strokeWidth={2.5}
            />
            <span className="font-body text-warm-ivory/80 text-sm leading-relaxed">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        variant={highlighted ? 'primary' : 'outline'}
        href="/contact"
        size="md"
        className="w-full justify-center"
      >
        Get Started
      </Button>
    </Card>
  )
}

function Included() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="What every plan includes"
          subtitle="The basics aren’t add-ons. They’re defaults."
        />
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {INCLUDED.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              className="p-6 border border-subtle/20 rounded-xl bg-dark-card/40 hover:border-accent/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="mt-0.5 w-5 h-5 rounded-full border border-accent/40 flex items-center justify-center bg-accent/10 flex-shrink-0">
                  <Check size={11} strokeWidth={3} className="text-accent" />
                </div>
                <h4 className="font-heading text-base font-semibold text-warm-ivory">
                  {item.title}
                </h4>
              </div>
              <p className="font-body text-warm-ivory/65 text-sm leading-relaxed pl-8">
                {item.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Hosting() {
  return (
    <section className="py-24 px-6 bg-dark-card/40">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="font-ui text-accent text-xs uppercase tracking-[3px] mb-4">
              Hosting & Support
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-warm-ivory mb-6">
              We host it. We maintain it. <span className="text-accent">We answer your WhatsApp.</span>
            </h2>
            <p className="font-body text-warm-ivory/70 leading-relaxed mb-4">
              Most agencies build a website and disappear. Then your office
              staff is stuck calling Hostinger Manila support at 9pm before
              admission day, trying to figure out why the site is down.
            </p>
            <p className="font-body text-warm-ivory/70 leading-relaxed">
              We don&apos;t do that. Your monthly fee covers hosting, security,
              backups, uptime monitoring, and a real human you can WhatsApp.
              The same team that built your site is the team that supports it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="space-y-4"
          >
            <SupportItem
              title="Indian-region hosting"
              body="Fast for parents in your city, not routed through Singapore."
            />
            <SupportItem
              title="9am to 7pm support, Mon to Sat"
              body="WhatsApp messages answered same-day. Emergencies (site down) handled outside hours."
            />
            <SupportItem
              title="Daily automated backups"
              body="Site goes down? We restore from yesterday in under an hour."
            />
            <SupportItem
              title="Uptime monitoring"
              body="We get alerted before you do. Most issues are fixed before anyone notices."
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SupportItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="p-5 border border-subtle/20 rounded-xl bg-dark-card/60">
      <h4 className="font-heading text-base font-semibold text-warm-ivory mb-1">
        {title}
      </h4>
      <p className="font-body text-warm-ivory/65 text-sm leading-relaxed">
        {body}
      </p>
    </div>
  )
}

function Process() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="How we build your website"
          subtitle="A clear process, weekly updates, no surprises."
        />
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {PROCESS.map((step) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.step}
                variants={staggerItem}
                className="relative p-6 border border-subtle/20 rounded-xl bg-dark-card/40"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-3xl font-bold text-accent/30">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center bg-secondary/40">
                    <Icon className="w-4 h-4 text-accent" strokeWidth={1.6} />
                  </div>
                </div>
                <h4 className="font-heading text-lg font-bold text-warm-ivory mb-2">
                  {step.title}
                </h4>
                <p className="font-body text-warm-ivory/70 text-sm leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="py-24 px-6 bg-dark-card/40">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="Questions schools ask us"
          subtitle="If yours isn’t here, WhatsApp us. We’ll answer the same day."
        />
        <div className="mt-16 space-y-3">
          {FAQ.map((item, i) => (
            <FAQItem key={i} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="border border-subtle/20 rounded-xl bg-dark-card/60 overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-dark-card/80 transition-colors duration-200"
        aria-expanded={open}
      >
        <span className="font-heading text-base md:text-lg font-semibold text-warm-ivory">
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-accent"
        >
          <ChevronDown size={20} strokeWidth={2} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 font-body text-warm-ivory/75 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function FinalCTA() {
  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-warm-ivory mb-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Ready to build a website your <span className="text-accent">parents will share?</span>
        </motion.h2>
        <motion.p
          className="font-body text-muted text-lg mb-10 max-w-xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          We&apos;ll do a free 30-minute call — review your current site (or your
          competitor&apos;s), suggest a tier, and give you a clear timeline.
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button variant="primary" href="/contact" size="lg">
            Book a Free Call
          </Button>
          <a
            href={COMPANY.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg border border-accent text-warm-ivory bg-transparent hover:bg-accent/10 font-heading font-semibold rounded-lg transition-colors duration-300"
          >
            <MessageCircle size={18} strokeWidth={2} />
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
