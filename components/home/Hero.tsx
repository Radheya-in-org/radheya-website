'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { COMPANY, STATS } from '@/lib/constants'
import Button from '@/components/ui/Button'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import HeroGlobe from '@/components/home/HeroGlobe'

const headingWords = ['Solving', 'Tomorrow,', 'Today.']

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.015] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* Left side - Text content (60%) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex-[3] md:flex-[3] w-full"
          >
            {/* Label */}
            <motion.p
              variants={staggerItem}
              className="font-ui text-accent text-xs uppercase tracking-ui-widest mb-6"
            >
              Product Studio & Software Company
            </motion.p>

            {/* Heading with staggered word animation */}
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
              {headingWords.map((word, index) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.15,
                    ease: 'easeOut',
                  }}
                  className={`inline-block mr-4 ${
                    index === 0 ? 'text-accent' : 'text-warm-ivory'
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Description */}
            <motion.p
              variants={staggerItem}
              className="font-body text-muted text-lg mt-6 max-w-xl"
            >
              {COMPANY.description}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={staggerItem} className="mt-8 flex gap-4 flex-wrap">
              <Button variant="primary" href="/products">
                Explore Our Products
              </Button>
              <Button variant="outline" href="/contact">
                Work With Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Globe (40%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="flex-[2] w-full hidden md:block"
          >
            <HeroGlobe />
          </motion.div>

          {/* Mobile fallback: gradient orb animation instead of globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="block md:hidden w-full flex items-center justify-center py-8"
          >
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 rounded-full bg-accent/10 animate-pulse-slow" />
              <div className="absolute inset-4 rounded-full bg-accent/5 animate-pulse-slow [animation-delay:0.5s]" />
              <div className="absolute inset-8 rounded-full bg-accent/[0.08] animate-pulse-slow [animation-delay:1s]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-accent/60 animate-glow-pulse" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-secondary pt-8 mt-16 grid grid-cols-3"
        >
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`${
                index > 0 ? 'border-l border-accent/30' : ''
              }`}
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
