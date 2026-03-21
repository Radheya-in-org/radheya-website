'use client'

import { motion } from 'framer-motion'

interface VijayaBowProps {
  size?: number
  opacity?: number
  animated?: boolean
  className?: string
}

export default function VijayaBow({
  size = 400,
  opacity = 0.08,
  animated = false,
  className = '',
}: VijayaBowProps) {
  const strokeColor = '#C9A84C'
  const strokeWidth = 1.2

  // Bow limb path - elegant curved arc
  const bowPath = 'M 50 20 Q 10 200 50 380'
  // Arrow nocked on the string
  const arrowPath = 'M 30 200 L 90 200'
  const arrowHeadPath = 'M 85 195 L 95 200 L 85 205'
  // Fletching lines
  const fletchTop = 'M 30 200 L 22 193'
  const fletchBottom = 'M 30 200 L 22 207'

  if (animated) {
    return (
      <div
        className={`pointer-events-none select-none ${className}`}
        style={{ width: size, height: size, mixBlendMode: 'screen' }}
        aria-hidden="true"
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity }}
        >
          {/* Bow limb - animated draw */}
          <motion.path
            d={bowPath}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
          {/* Bowstring - animated draw */}
          <motion.line
            x1="50"
            y1="20"
            x2="50"
            y2="380"
            stroke={strokeColor}
            strokeWidth={0.8}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.8 }}
          />
          {/* Arrow shaft */}
          <motion.path
            d={arrowPath}
            stroke={strokeColor}
            strokeWidth={1}
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1.8 }}
          />
          {/* Arrowhead */}
          <motion.path
            d={arrowHeadPath}
            stroke={strokeColor}
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 2.2 }}
          />
          {/* Fletching */}
          <motion.path
            d={fletchTop}
            stroke={strokeColor}
            strokeWidth={0.8}
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 2.4 }}
          />
          <motion.path
            d={fletchBottom}
            stroke={strokeColor}
            strokeWidth={0.8}
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 2.4 }}
          />
        </svg>
      </div>
    )
  }

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ width: size, height: size, mixBlendMode: 'screen' }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        {/* Bow limb */}
        <path
          d={bowPath}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
        />
        {/* Bowstring */}
        <line
          x1="50"
          y1="20"
          x2="50"
          y2="380"
          stroke={strokeColor}
          strokeWidth={0.8}
        />
        {/* Arrow shaft */}
        <path
          d={arrowPath}
          stroke={strokeColor}
          strokeWidth={1}
          strokeLinecap="round"
          fill="none"
        />
        {/* Arrowhead */}
        <path
          d={arrowHeadPath}
          stroke={strokeColor}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Fletching */}
        <path
          d={fletchTop}
          stroke={strokeColor}
          strokeWidth={0.8}
          strokeLinecap="round"
          fill="none"
        />
        <path
          d={fletchBottom}
          stroke={strokeColor}
          strokeWidth={0.8}
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  )
}
