'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Gem, Zap, TreePine, type LucideIcon } from 'lucide-react'
import { VALUES } from '@/lib/constants'
import { staggerContainer, staggerItem } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'
import ChariotWheel from '@/components/karna/ChariotWheel'

const iconMap: Record<string, LucideIcon> = {
  Target,
  Gem,
  Zap,
  TreePine,
}

export default function Values() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="relative max-w-4xl mx-auto">
      {/* ChariotWheel background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <ChariotWheel size={400} opacity={0.03} />
      </div>

      <SectionHeading
        title="What We Stand For"
        subtitle="The values that guide every line of code we write."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 max-w-3xl mx-auto"
      >
        {VALUES.map((value) => {
          const IconComponent = iconMap[value.icon] || Target
          return (
            <motion.div
              key={value.title}
              variants={staggerItem}
              className="p-5 rounded-xl bg-dark-card/50 border border-subtle/10 backdrop-blur-sm text-center"
            >
              <div className="mb-3 flex justify-center">
                <IconComponent
                  className="w-7 h-7 text-accent"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-warm-ivory mb-2">
                {value.title}
              </h3>
              <p className="font-body text-muted text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
