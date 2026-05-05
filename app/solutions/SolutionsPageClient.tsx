'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { GraduationCap, Sparkles } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import PageTransition from '@/components/layout/PageTransition'
import ChariotWheel from '@/components/karna/ChariotWheel'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

interface Vertical {
  slug: string
  title: string
  tagline: string
  description: string
  status: 'live' | 'upcoming'
  href: string
}

const VERTICALS: Vertical[] = [
  {
    slug: 'education',
    title: 'Education',
    tagline: 'Schools, colleges & student platforms',
    description:
      'Where Radheya started. From MyNextStep — our AI career guidance product — to school websites, CRMs, and parent apps. We build software that institutions and students actually use.',
    status: 'live',
    href: '/solutions/education',
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    tagline: 'Coming soon',
    description:
      'Software for clinics, diagnostics, and digital health. Patient-first, clinician-friendly.',
    status: 'upcoming',
    href: '#',
  },
]

export default function SolutionsPageClient() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute top-16 right-8 hidden lg:block">
          <ChariotWheel size={240} opacity={0.04} />
        </div>
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            className="font-ui text-accent text-xs uppercase tracking-[4px] mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Solutions
          </motion.p>
          <motion.h1
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-warm-ivory mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            Industry expertise, <span className="text-accent">deployed</span>
          </motion.h1>
          <motion.p
            className="font-body text-muted text-lg max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            We don&apos;t build generic software. We pick verticals where we have
            real conviction, and build deeply for the people working in them.
          </motion.p>
        </div>
      </section>

      {/* Verticals grid */}
      <section className="py-16 px-6">
        <motion.div
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {VERTICALS.map((v) => (
            <motion.div key={v.slug} variants={staggerItem}>
              <VerticalCard vertical={v} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why this approach */}
      <section className="py-24 px-6 bg-dark-card/50">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            title="Why verticals, not generic software"
            subtitle="Software is downstream of context. The best products are built by people who understand the problem, not just the technology."
          />
          <motion.p
            className="font-body text-warm-ivory/70 text-lg leading-relaxed mt-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Every vertical we enter starts with a real product we&apos;ve built
            ourselves — not a sales deck. We learn the workflows, the
            stakeholders, the edge cases. Then we extend that knowledge to other
            institutions in the same space. That is why our work shows up
            tighter and faster than what you&apos;ll get from a generalist studio.
          </motion.p>
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
          Working in a different vertical?
        </motion.h2>
        <motion.p
          className="font-body text-muted mb-8 max-w-xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Tell us about your industry. If we see a long-term fit, we&apos;ll build
          deep — not surface deep.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button variant="primary" href="/contact" size="lg">
            Start a Conversation
          </Button>
        </motion.div>
      </section>
    </PageTransition>
  )
}

function VerticalCard({ vertical }: { vertical: Vertical }) {
  const Icon = vertical.slug === 'education' ? GraduationCap : Sparkles

  const cardInner = (
    <Card className="p-8 h-full flex flex-col" hover={vertical.status === 'live'} tilt={vertical.status === 'live'}>
      {/* Status badge */}
      {vertical.status === 'upcoming' ? (
        <motion.span
          className="self-start inline-block px-3 py-1 mb-6 text-xs font-heading font-semibold tracking-wider uppercase rounded-full bg-accent/10 text-accent border border-accent/20"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          Coming Soon
        </motion.span>
      ) : (
        <span className="self-start inline-block px-3 py-1 mb-6 text-xs font-heading font-semibold tracking-wider uppercase rounded-full bg-accent text-primary">
          Live
        </span>
      )}

      {/* Icon */}
      <div className="relative mb-6">
        <div className="absolute inset-0 rounded-full bg-accent/10 blur-xl scale-150 opacity-50" />
        <div className="relative w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center bg-secondary/40">
          <Icon className="w-7 h-7 text-accent" strokeWidth={1.4} />
        </div>
      </div>

      <h3 className="font-heading text-2xl font-bold text-warm-ivory mb-1">
        {vertical.title}
      </h3>
      <p className="font-body text-accent text-sm font-medium mb-4">
        {vertical.tagline}
      </p>
      <p className="font-body text-warm-ivory/70 leading-relaxed mb-6 flex-1">
        {vertical.description}
      </p>

      {vertical.status === 'live' && (
        <span className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-accent group-hover:text-accent/80 transition-colors">
          Explore Education
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="stroke-current"
          >
            <path
              d="M3 8h8M8 4l4 4-4 4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </Card>
  )

  if (vertical.status === 'live') {
    return (
      <Link href={vertical.href} className="block group h-full">
        {cardInner}
      </Link>
    )
  }
  return <div className="h-full">{cardInner}</div>
}
