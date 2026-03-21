'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PROCESS_STEPS } from '@/lib/constants'
import KarnaArrow from '@/components/karna/KarnaArrow'

export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref}>
      {/* Desktop: Horizontal timeline */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Steps row */}
          <div className="grid grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.2,
                  ease: 'easeOut',
                }}
                className="flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={
                    isInView
                      ? { scale: 1, opacity: 1 }
                      : {}
                  }
                  transition={{
                    duration: 0.4,
                    delay: i * 0.2 + 0.2,
                    ease: 'easeOut',
                  }}
                  className="relative mb-6"
                >
                  <motion.div
                    initial={{ backgroundColor: 'rgba(201, 168, 76, 0)' }}
                    animate={
                      isInView
                        ? { backgroundColor: 'rgba(201, 168, 76, 1)' }
                        : {}
                    }
                    transition={{ duration: 0.3, delay: i * 0.2 + 0.4 }}
                    className="w-14 h-14 rounded-full border-2 border-accent flex items-center justify-center"
                  >
                    <motion.span
                      initial={{ color: '#C9A84C' }}
                      animate={
                        isInView
                          ? { color: '#0A0A0A' }
                          : {}
                      }
                      transition={{ duration: 0.3, delay: i * 0.2 + 0.4 }}
                      className="font-heading text-lg font-bold"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </motion.span>
                  </motion.div>
                </motion.div>

                {/* Arrow connector (between steps) */}
                {i < PROCESS_STEPS.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: i * 0.2 + 0.5 }}
                    className="absolute"
                    style={{
                      top: '24px',
                      left: `calc(${(i + 1) * 25}% - 50px)`,
                    }}
                  >
                    <KarnaArrow
                      size={80}
                      opacity={0.3}
                      direction="right"
                    />
                  </motion.div>
                )}

                <h4 className="font-heading text-lg font-semibold text-warm-ivory mb-2">
                  {step.title}
                </h4>
                <p className="font-body text-sm text-muted leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Vertical timeline */}
      <div className="md:hidden">
        <div className="relative pl-8">
          {/* Vertical line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute left-[22px] top-0 w-[1px] bg-accent/30"
          />

          <div className="space-y-10">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.2,
                  ease: 'easeOut',
                }}
                className="relative"
              >
                {/* Step circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.2 + 0.2,
                  }}
                  className="absolute -left-8 top-0 w-11 h-11 rounded-full bg-accent border-2 border-accent flex items-center justify-center"
                >
                  <span className="font-heading text-sm font-bold text-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </motion.div>

                {/* Arrow between steps (vertical) */}
                {i < PROCESS_STEPS.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: i * 0.2 + 0.4 }}
                    className="absolute -left-[13px] top-[52px]"
                  >
                    <KarnaArrow
                      size={40}
                      opacity={0.3}
                      direction="down"
                    />
                  </motion.div>
                )}

                <div className="pl-6 pt-1">
                  <h4 className="font-heading text-lg font-semibold text-warm-ivory mb-1">
                    {step.title}
                  </h4>
                  <p className="font-body text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
