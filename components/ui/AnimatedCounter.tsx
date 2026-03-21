'use client'

import React, { useRef, useEffect, useState } from 'react'
import { useInView, useMotionValue, animate } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  label: string
}

export default function AnimatedCounter({
  value,
  suffix = '',
  label,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const motionValue = useMotionValue(0)
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const unsubscribe = motionValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest))
    })
    return () => unsubscribe()
  }, [motionValue])

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: 'easeOut',
      })
      return () => controls.stop()
    }
  }, [isInView, motionValue, value])

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="flex items-baseline">
        <span className="font-heading text-4xl md:text-5xl font-bold text-accent tabular-nums">
          {displayValue}
        </span>
        {suffix && (
          <span className="font-heading text-4xl md:text-5xl font-bold text-accent">
            {suffix}
          </span>
        )}
      </div>
      <span className="font-ui text-muted text-sm uppercase tracking-ui-wide mt-2">
        {label}
      </span>
    </div>
  )
}
