'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Globe, Users, Bus, ArrowUpRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import PageTransition from '@/components/layout/PageTransition'
import KavachShield from '@/components/karna/KavachShield'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

interface Offering {
  slug: string
  icon: typeof Globe
  title: string
  shortDesc: string
  description: string
  status: 'live' | 'upcoming'
  href: string
  bullets: string[]
}

const OFFERINGS: Offering[] = [
  {
    slug: 'schools',
    icon: Globe,
    title: 'School Websites',
    shortDesc: 'Premium websites that drive admissions',
    description:
      'Mobile-first marketing websites for schools — designed around what makes your campus different. Photography, content management, hosting, and ongoing support included.',
    status: 'live',
    href: '/solutions/education/schools',
    bullets: [
      'Custom design + on-campus photography',
      'Self-service CMS for staff',
      'Online admission inquiry routing',
      'Hosting, SSL, and ongoing support',
    ],
  },
  {
    slug: 'school-crm',
    icon: Users,
    title: 'School CRM',
    shortDesc: 'Admissions, fees, and parent communication',
    description:
      'A modern CRM purpose-built for Indian schools. Replace fragmented WhatsApp groups, paper forms, and Excel sheets with one calm, easy-to-use system.',
    status: 'upcoming',
    href: '#',
    bullets: [
      'Lead capture & admission funnel',
      'Fee collection & receipts',
      'Parent + teacher communication',
      'Reports the principal actually reads',
    ],
  },
  {
    slug: 'bus-tracking',
    icon: Bus,
    title: 'Bus Location Tracking',
    shortDesc: 'Real-time visibility for parents',
    description:
      'Live bus tracking on the parent app, with stop-level ETAs, driver visibility, and route management for the school transport coordinator.',
    status: 'upcoming',
    href: '#',
    bullets: [
      'Live GPS on parent app',
      'Stop-level arrival alerts',
      'Driver + vehicle records',
      'Per-student or flat pricing',
    ],
  },
]

export default function EducationPageClient() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute top-12 right-0 hidden lg:block">
          <KavachShield size={280} opacity={0.04} />
        </div>
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            className="font-ui text-accent text-xs uppercase tracking-[4px] mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Solutions / Education
          </motion.p>
          <motion.h1
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-warm-ivory mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            Software for the institutions{' '}
            <span className="text-accent">shaping India&apos;s next generation</span>
          </motion.h1>
          <motion.p
            className="font-body text-muted text-lg max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Education is where Radheya started — and where we&apos;ve gone deepest.
            From students choosing a career, to schools welcoming them in, we
            build the tools that close the loop.
          </motion.p>
        </div>
      </section>

      {/* MyNextStep cross-link */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Card className="p-8 md:p-12" tilt={false}>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
                <div>
                  <p className="font-ui text-accent text-xs uppercase tracking-[3px] mb-3">
                    Our flagship education product
                  </p>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-warm-ivory mb-4">
                    MyNextStep — AI career guidance for Indian students
                  </h3>
                  <p className="font-body text-warm-ivory/70 leading-relaxed mb-6">
                    Built for the moment a 10th or 12th student asks &quot;what
                    next?&quot; — MyNextStep blends a personality-first
                    assessment, a curated knowledge base of Indian careers, and
                    Claude AI to deliver guidance that actually helps. It&apos;s
                    the foundation of everything we know about students,
                    parents, and the schools that serve them.
                  </p>
                  <Link
                    href="https://mynextstep.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                  >
                    Visit MyNextStep
                    <ArrowUpRight size={16} strokeWidth={2} />
                  </Link>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-accent/10 blur-2xl scale-150" />
                    <div className="relative w-32 h-32 rounded-full border border-accent/30 flex items-center justify-center bg-secondary/40">
                      <span className="font-heading font-bold text-accent text-3xl">
                        MNS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Offerings for institutions */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="What we build for schools"
            subtitle="Three focused offerings. Buy one, or stack them as your institution grows."
          />
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {OFFERINGS.map((offering) => (
              <motion.div key={offering.slug} variants={staggerItem}>
                <OfferingCard offering={offering} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Radheya for education */}
      <section className="py-24 px-6 bg-dark-card/50">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="Why schools pick Radheya"
            subtitle="Most software vendors treat schools like enterprise customers. We don't — because they aren't."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ReasonCard
              title="Local team in Telangana"
              body="Karimnagar and Nizamabad roots. We visit your campus, meet your principal, and support your staff in Telugu, Hindi, and English — not by a ticket portal from Bangalore."
            />
            <ReasonCard
              title="Education is our home turf"
              body="Every product decision is informed by what we've learned running MyNextStep. We know what students search for, what parents fear, what correspondents care about."
            />
            <ReasonCard
              title="We don't disappear after launch"
              body="Freelancers ship and vanish. We host, maintain, and grow with you — the same team that built it is the team you'll WhatsApp when something breaks."
            />
            <ReasonCard
              title="Built to stack"
              body="Start with the website. Add the CRM next year. Plug in bus tracking when ready. Same login, same support team, same data model — not three vendors to argue with."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <motion.h2
          className="font-heading font-bold text-3xl md:text-4xl text-warm-ivory mb-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Ready to start?
        </motion.h2>
        <motion.p
          className="font-body text-muted mb-8 max-w-xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Most schools start with the website. See pricing, what&apos;s included,
          and how the process works.
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button variant="primary" href="/solutions/education/schools" size="lg">
            See School Website Pricing
          </Button>
          <Button variant="outline" href="/contact" size="lg">
            Talk to Us
          </Button>
        </motion.div>
      </section>
    </PageTransition>
  )
}

function OfferingCard({ offering }: { offering: Offering }) {
  const Icon = offering.icon
  const isLive = offering.status === 'live'

  const inner = (
    <Card className="p-8 h-full flex flex-col" hover={isLive} tilt={isLive}>
      <div className="flex items-center justify-between mb-6">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-accent/10 blur-lg scale-150 opacity-60" />
          <div className="relative w-14 h-14 rounded-full border border-accent/30 flex items-center justify-center bg-secondary/40">
            <Icon className="w-6 h-6 text-accent" strokeWidth={1.4} />
          </div>
        </div>
        {isLive ? (
          <span className="px-3 py-1 text-xs font-heading font-semibold tracking-wider uppercase rounded-full bg-accent text-primary">
            Live
          </span>
        ) : (
          <motion.span
            className="px-3 py-1 text-xs font-heading font-semibold tracking-wider uppercase rounded-full bg-accent/10 text-accent border border-accent/20"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            Coming Soon
          </motion.span>
        )}
      </div>

      <h3 className="font-heading text-xl font-bold text-warm-ivory mb-1">
        {offering.title}
      </h3>
      <p className="font-body text-accent text-sm font-medium mb-4">
        {offering.shortDesc}
      </p>
      <p className="font-body text-warm-ivory/70 leading-relaxed mb-6">
        {offering.description}
      </p>

      <ul className="space-y-2 mb-6 flex-1">
        {offering.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent/70 ring-2 ring-accent/20" />
            <span className="font-body text-warm-ivory/80 text-sm">
              {bullet}
            </span>
          </li>
        ))}
      </ul>

      {isLive ? (
        <span className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-accent transition-colors">
          See pricing
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="stroke-current">
            <path d="M3 8h8M8 4l4 4-4 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      ) : (
        <span className="font-body text-sm text-muted/80 italic">
          Talk to us for early access
        </span>
      )}
    </Card>
  )

  if (isLive) {
    return (
      <Link href={offering.href} className="block h-full group">
        {inner}
      </Link>
    )
  }
  return <div className="h-full">{inner}</div>
}

function ReasonCard({ title, body }: { title: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="p-6 border border-subtle/20 rounded-xl bg-dark-card/40"
    >
      <h4 className="font-heading text-lg font-bold text-warm-ivory mb-2">
        {title}
      </h4>
      <p className="font-body text-warm-ivory/70 text-sm leading-relaxed">
        {body}
      </p>
    </motion.div>
  )
}
