'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import Benefits from '@/components/careers/Benefits'
import JobListing from '@/components/careers/JobListing'
import { fadeInUp } from '@/lib/animations'
import PageTransition from '@/components/layout/PageTransition'

export default function CareersPageClient() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            className="font-ui text-accent text-xs uppercase tracking-[4px] mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Careers
          </motion.p>
          <motion.h1
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-warm-ivory mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            Join <span className="text-accent">Radheya</span>
          </motion.h1>
          <motion.p
            className="font-body text-muted text-lg max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Build software that matters. With people who care.
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Why Join Us"
            subtitle="We believe great work comes from great environments."
          />
          <div className="mt-12">
            <Benefits />
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-6 bg-dark-card/30">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Open Positions"
            subtitle="Current opportunities at Radheya."
          />
          <div className="mt-12">
            <JobListing />
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading title="Our Culture" />
          <motion.p
            className="font-body text-warm-ivory/70 text-lg leading-relaxed mt-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            At Radheya, we are a small team with big ambitions. We value
            deep work over busy work, craft over speed, and real impact
            over vanity metrics. We believe that the best software is
            built by people who care — about the craft, about the users,
            and about each other. If you are someone who finds joy in
            solving hard problems and building things that last, you will
            feel at home here.
          </motion.p>
        </div>
      </section>
    </PageTransition>
  )
}
