'use client'

import React from 'react'
import Link from 'next/link'

interface RadheyaLogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

function SuryaIcon({ size }: { size: number }) {
  const r = size * 0.23
  const innerR = size * 0.33
  const outerR = size * 0.47

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
    >
      <g transform={`translate(${size / 2}, ${size / 2})`}>
        {/* Sun disc */}
        <circle cx={0} cy={0} r={r} fill="#C9A84C" opacity={0.9} />
        <circle cx={0} cy={0} r={r} fill="none" stroke="#C9A84C" strokeWidth={0.4} opacity={0.5} />
        {/* Primary rays (8 directions) */}
        <g stroke="#C9A84C" strokeWidth={size * 0.042} strokeLinecap="round" opacity={0.82}>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
            const rad = (deg * Math.PI) / 180
            const x1 = innerR * Math.cos(rad)
            const y1 = innerR * Math.sin(rad)
            const x2 = outerR * Math.cos(rad)
            const y2 = outerR * Math.sin(rad)
            return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} />
          })}
        </g>
        {/* Secondary rays (between primary rays) */}
        <g stroke="#C9A84C" strokeWidth={size * 0.02} strokeLinecap="round" opacity={0.35}>
          {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((deg) => {
            const rad = (deg * Math.PI) / 180
            const x1 = innerR * 0.95 * Math.cos(rad)
            const y1 = innerR * 0.95 * Math.sin(rad)
            const x2 = outerR * 0.92 * Math.cos(rad)
            const y2 = outerR * 0.92 * Math.sin(rad)
            return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} />
          })}
        </g>
      </g>
    </svg>
  )
}

const sizes = {
  sm: { icon: 22, text: 'text-sm', spacing: 'tracking-[2px]', gap: 'gap-1.5' },
  md: { icon: 30, text: 'text-lg', spacing: 'tracking-[3px]', gap: 'gap-2.5' },
  lg: { icon: 40, text: 'text-2xl', spacing: 'tracking-[4px]', gap: 'gap-3' },
}

export default function RadheyaLogo({
  size = 'md',
  showText = true,
  className = '',
}: RadheyaLogoProps) {
  const s = sizes[size]

  return (
    <Link href="/" className={`flex items-center ${s.gap} ${className}`}>
      <SuryaIcon size={s.icon} />
      {showText && (
        <span
          className={`font-heading font-bold ${s.text} ${s.spacing} text-accent`}
        >
          RADHEYA
        </span>
      )}
    </Link>
  )
}

export { SuryaIcon }
