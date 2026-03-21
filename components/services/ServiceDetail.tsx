'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Smartphone, Layers, Compass, type LucideIcon } from 'lucide-react'
import Button from '@/components/ui/Button'
import { fadeInLeft, fadeInRight } from '@/lib/animations'

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Layers,
  Compass,
}

interface Service {
  id: string
  title: string
  shortDesc: string
  description: string
  icon: string
  techStack: readonly string[]
  deliverables: readonly string[]
}

interface ServiceDetailProps {
  service: Service
  index: number
}

export default function ServiceDetail({ service, index }: ServiceDetailProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const isEven = index % 2 === 0

  const IconComponent = iconMap[service.icon] || Globe

  const iconSection = (
    <motion.div
      variants={isEven ? fadeInLeft : fadeInRight}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="flex items-center justify-center"
    >
      <div className="relative">
        {/* Glow ring behind icon */}
        <div className="absolute inset-0 rounded-full bg-accent/10 blur-xl scale-150" />
        <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border border-accent/30 flex items-center justify-center bg-dark-card">
          <IconComponent className="w-12 h-12 md:w-16 md:h-16 text-accent" strokeWidth={1.2} />
        </div>
      </div>
    </motion.div>
  )

  const textSection = (
    <motion.div
      variants={isEven ? fadeInRight : fadeInLeft}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="space-y-5"
    >
      <h3 className="font-heading text-2xl md:text-3xl font-bold text-warm-ivory">
        {service.title}
      </h3>
      <p className="font-body text-warm-ivory/70 leading-relaxed">
        {service.description}
      </p>

      {/* Tech stack tags */}
      <div className="flex flex-wrap gap-2">
        {service.techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-ui rounded-full bg-secondary/60 text-muted border border-subtle/20"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Deliverables list */}
      <ul className="space-y-2">
        {service.deliverables.map((item, i) => (
          <li key={i} className="flex items-center gap-3 font-body text-sm text-warm-ivory/80">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-accent flex-shrink-0"
            >
              <path
                d="M3 8l3 3 7-7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {item}
          </li>
        ))}
      </ul>

      <Button href="/contact" variant="outline" size="sm">
        Let&apos;s Talk
      </Button>
    </motion.div>
  )

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center py-16 ${
        index > 0 ? 'border-t border-subtle/10' : ''
      }`}
    >
      {isEven ? (
        <>
          {iconSection}
          {textSection}
        </>
      ) : (
        <>
          {textSection}
          {iconSection}
        </>
      )}
    </div>
  )
}
