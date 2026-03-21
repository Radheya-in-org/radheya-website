'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { PRODUCTS } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'

export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="What We're Building"
          subtitle="Our products tackle real problems with elegant solutions"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
        >
          {PRODUCTS.map((product) => (
            <motion.div key={product.name} variants={staggerItem}>
              <Card className="p-6 md:p-8 h-full relative">
                {/* Shimmer overlay for upcoming products */}
                {product.status === 'upcoming' && (
                  <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gold-shimmer bg-[length:200%_100%] animate-shimmer opacity-30" />
                  </div>
                )}

                {/* Image/mockup placeholder */}
                <div className="relative h-48 bg-secondary/30 rounded-lg overflow-hidden mb-6">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gold-shimmer bg-[length:200%_100%] animate-shimmer opacity-20" />

                  {/* Status badge */}
                  {product.status === 'upcoming' && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="font-ui text-xs uppercase tracking-ui-wide px-3 py-1 rounded-full bg-accent/20 text-accent border border-accent/30">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  {product.status === 'live' && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="font-ui text-xs uppercase tracking-ui-wide px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        Live
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="font-heading text-2xl font-bold text-warm-ivory">
                  {product.name}
                </h3>
                <p className="font-body text-accent text-sm mt-1">
                  {product.tagline}
                </p>
                <p className="font-body text-muted mt-3 leading-relaxed">
                  {product.description}
                </p>

                {/* Link */}
                <div className="mt-6">
                  {product.status === 'live' ? (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading text-accent text-sm font-semibold inline-flex items-center gap-2 group hover:gap-3 transition-all duration-300"
                    >
                      Visit Product
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </a>
                  ) : (
                    <p className="font-body text-muted/60 text-sm italic">
                      Stay tuned
                    </p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
