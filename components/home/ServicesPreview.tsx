'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Globe, Smartphone, Layers, Compass } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { SERVICES } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Globe,
  Smartphone,
  Layers,
  Compass,
}

export default function ServicesPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const services = SERVICES.slice(0, 4)

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="We Also Build For You"
          subtitle="Expert software development services tailored to your needs"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon]

            return (
              <motion.div key={service.id} variants={staggerItem}>
                <Card className="p-6 h-full">
                  {IconComponent && (
                    <div className="mb-4">
                      <IconComponent size={32} className="text-accent" />
                    </div>
                  )}
                  <h3 className="font-heading text-lg font-semibold text-warm-ivory">
                    {service.title}
                  </h3>
                  <p className="font-body text-muted text-sm mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <Link
            href="/services"
            className="font-heading text-accent text-sm font-semibold inline-flex items-center gap-2 group hover:gap-3 transition-all duration-300"
          >
            See All Services
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
