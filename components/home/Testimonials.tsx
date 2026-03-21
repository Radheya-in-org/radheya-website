'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Rocket, ArrowRight } from 'lucide-react'
import { fadeInUp } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Trusted By Builders"
          subtitle="We are just getting started — and that is the most exciting part"
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-16 max-w-2xl mx-auto text-center"
        >
          <div className="relative p-10 md:p-14 rounded-2xl border border-subtle/20 bg-dark-card/50">
            {/* Rocket icon */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="flex justify-center mb-6"
            >
              <Rocket size={40} className="text-accent" />
            </motion.div>

            <h3 className="font-heading text-2xl font-bold text-warm-ivory mb-4">
              We Have Just Started
            </h3>
            <p className="font-body text-muted leading-relaxed mb-6">
              Radheya is a young company with a bold vision. We are building
              products, shipping code, and earning trust — one project at a
              time. Our best testimonials are the ones we are writing right
              now, through the work we do every single day.
            </p>
            <p className="font-body text-warm-ivory/70 text-sm">
              Want to be part of our story?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 mt-4 font-heading font-semibold text-accent hover:text-accent/80 transition-colors group"
            >
              Work with us
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
