'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Lightbulb, TrendingUp, Heart, type LucideIcon } from 'lucide-react'
import { BENEFITS } from '@/lib/constants'
import { staggerContainer, staggerItem } from '@/lib/animations'

const iconMap: Record<string, LucideIcon> = {
  MapPin,
  Lightbulb,
  TrendingUp,
  Heart,
}

export default function Benefits() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
    >
      {BENEFITS.map((benefit) => {
        const IconComponent = iconMap[benefit.icon] || Heart
        return (
          <motion.div
            key={benefit.title}
            variants={staggerItem}
            className="p-6 rounded-xl bg-dark-card/50 border border-subtle/10"
          >
            <div className="mb-4">
              <IconComponent
                className="w-7 h-7 text-accent"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="font-heading text-lg font-semibold text-warm-ivory mb-2">
              {benefit.title}
            </h3>
            <p className="font-body text-sm text-muted leading-relaxed">
              {benefit.description}
            </p>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
