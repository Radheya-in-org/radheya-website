'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import ServiceDetail from '@/components/services/ServiceDetail'
import ProcessTimeline from '@/components/services/ProcessTimeline'
import Button from '@/components/ui/Button'
import { SERVICES } from '@/lib/constants'
import { fadeInUp } from '@/lib/animations'
import PageTransition from '@/components/layout/PageTransition'
import VijayaBow from '@/components/karna/VijayaBow'

export default function ServicesPageClient() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute top-20 right-10 hidden lg:block">
          <VijayaBow size={200} opacity={0.04} />
        </div>
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            className="font-ui text-accent text-xs uppercase tracking-[4px] mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Services
          </motion.p>
          <motion.h1
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-warm-ivory mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            When your vision needs{' '}
            <span className="text-accent">expert hands</span>
          </motion.h1>
          <motion.p
            className="font-body text-muted text-lg max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            We bring the same product-thinking mindset to every client
            engagement. Your project gets the care and attention of an
            in-house team.
          </motion.p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {SERVICES.map((service, index) => (
            <ServiceDetail
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 px-6 bg-dark-card/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="How We Work"
            subtitle="A proven process that delivers results, every time."
          />
          <div className="mt-16">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 text-center">
        <motion.h2
          className="font-heading font-bold text-3xl md:text-4xl text-warm-ivory mb-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Have a project in mind?
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Button variant="primary" href="/contact" size="lg">
            Start a Conversation
          </Button>
        </motion.div>
      </section>
    </PageTransition>
  )
}
