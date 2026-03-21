'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import Button from '@/components/ui/Button'

export default function HomeCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-primary via-secondary/20 to-primary"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-warm-ivory">
            Ready to build something that matters?
          </h2>

          <p className="font-body text-muted mt-4 text-lg">
            Whether you have a product idea or need a development partner, we are here to help you create software that makes a difference.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex gap-4 justify-center flex-wrap"
          >
            <Button variant="primary" href="/contact">
              Start a Project
            </Button>
            <Button variant="outline" href="/careers">
              Explore Careers
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
