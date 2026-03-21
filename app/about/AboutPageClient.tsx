'use client'

import { motion } from 'framer-motion'
import Story from '@/components/about/Story'
import Values from '@/components/about/Values'
import Team from '@/components/about/Team'
import { fadeInUp } from '@/lib/animations'
import PageTransition from '@/components/layout/PageTransition'
import KavachShield from '@/components/karna/KavachShield'

export default function AboutPageClient() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute top-10 right-0">
          <KavachShield size={250} opacity={0.04} />
        </div>
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            className="font-ui text-accent text-xs uppercase tracking-[4px] mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Our Story
          </motion.p>
          <motion.h1
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-warm-ivory mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            The <span className="text-accent">Radheya</span> Story
          </motion.h1>
        </div>
      </section>

      {/* Origin Story */}
      <Story />

      {/* Values */}
      <section className="py-24 px-6 bg-dark-card/30">
        <Values />
      </section>

      {/* Team */}
      <section className="py-24 px-6">
        <Team />
      </section>
    </PageTransition>
  )
}
