'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import SuryaEmblem from '@/components/karna/SuryaEmblem'

export default function Story() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text */}
          <div className="flex-1 lg:max-w-[55%]">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="space-y-6"
            >
              <p className="font-body text-lg leading-relaxed text-warm-ivory/80">
                The name{' '}
                <span className="text-accent font-semibold">
                  Radheya (రాధేయ)
                </span>{' '}
                comes from the Mahabharata &mdash; the birth name of{' '}
                <span className="text-accent font-semibold">Karna</span>,
                one of the greatest warriors in Indian mythology. Karna was
                not born into privilege. He earned everything through
                relentless practice, unwavering loyalty, and a refusal to
                compromise on his values. He was judged by his origins, yet
                proved himself through his actions. That spirit drives
                everything we build.
              </p>

              <motion.p
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ delay: 0.2 }}
                className="font-body text-lg leading-relaxed text-warm-ivory/80"
              >
                We are a product-first software studio. That means we do
                not just build for clients &mdash; we build our own
                products that solve real-world problems. This gives us skin
                in the game. When we work on your project, we bring the
                same ownership mindset, the same obsession with quality,
                and the same commitment to impact that we bring to our own
                products. No shortcuts. No filler. Just software that
                matters.
              </motion.p>
            </motion.div>
          </div>

          {/* Right: Surya Emblem */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="hidden lg:block">
              <SuryaEmblem width={340} height={380} />
            </div>
            <div className="block lg:hidden">
              <SuryaEmblem width={260} height={300} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
