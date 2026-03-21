'use client'

import { motion } from 'framer-motion'

interface KarnaArrowProps {
  size?: number
  opacity?: number
  direction?: 'left' | 'right' | 'down'
  animated?: boolean
  className?: string
}

export default function KarnaArrow({
  size = 100,
  opacity = 0.15,
  direction = 'right',
  animated = false,
  className = '',
}: KarnaArrowProps) {
  const strokeColor = '#C9A84C'

  const rotation =
    direction === 'left' ? 180 : direction === 'down' ? 90 : 0

  const arrowSvg = (
    <svg
      width={size}
      height={size * 0.2}
      viewBox="0 0 100 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        opacity,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {/* Arrow shaft */}
      <line
        x1="5"
        y1="10"
        x2="90"
        y2="10"
        stroke={strokeColor}
        strokeWidth={1}
        strokeLinecap="round"
      />
      {/* Arrowhead */}
      <path
        d="M 85 5 L 95 10 L 85 15"
        stroke={strokeColor}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Fletching lines */}
      <line
        x1="10"
        y1="10"
        x2="5"
        y2="4"
        stroke={strokeColor}
        strokeWidth={0.8}
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="10"
        x2="5"
        y2="16"
        stroke={strokeColor}
        strokeWidth={0.8}
        strokeLinecap="round"
      />
      <line
        x1="14"
        y1="10"
        x2="9"
        y2="5"
        stroke={strokeColor}
        strokeWidth={0.6}
        strokeLinecap="round"
      />
      <line
        x1="14"
        y1="10"
        x2="9"
        y2="15"
        stroke={strokeColor}
        strokeWidth={0.6}
        strokeLinecap="round"
      />
    </svg>
  )

  if (animated) {
    const slideFrom =
      direction === 'left'
        ? { x: 40, opacity: 0 }
        : direction === 'down'
          ? { y: -40, opacity: 0 }
          : { x: -40, opacity: 0 }

    const slideTo =
      direction === 'left'
        ? { x: 0, opacity: 1 }
        : direction === 'down'
          ? { y: 0, opacity: 1 }
          : { x: 0, opacity: 1 }

    return (
      <motion.div
        className={`pointer-events-none select-none ${className}`}
        initial={slideFrom}
        animate={slideTo}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        aria-hidden="true"
      >
        {arrowSvg}
      </motion.div>
    )
  }

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {arrowSvg}
    </div>
  )
}
