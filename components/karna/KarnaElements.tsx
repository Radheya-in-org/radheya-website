'use client'

import VijayaBow from './VijayaBow'
import KavachShield from './KavachShield'
import ChariotWheel from './ChariotWheel'
import KarnaArrow from './KarnaArrow'

interface KarnaElementsProps {
  variant: 'hero' | 'section' | 'about' | 'services' | 'contact'
  className?: string
}

export default function KarnaElements({
  variant,
  className = '',
}: KarnaElementsProps) {
  if (variant === 'hero') {
    return (
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
        aria-hidden="true"
      >
        {/* Large VijayaBow on the right side */}
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2">
          <VijayaBow size={600} opacity={0.08} animated={false} />
        </div>

        {/* Kavach in top-right corner, partially clipped */}
        <div className="absolute top-[-30px] right-[10%]">
          <KavachShield size={180} opacity={0.05} showKundala />
        </div>

        {/* ChariotWheel bottom-left, slow spin */}
        <div className="absolute bottom-[5%] left-[3%]">
          <ChariotWheel size={250} opacity={0.03} spinning />
        </div>

        {/* Scroll-down arrow indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <KarnaArrow size={60} opacity={0.15} direction="down" />
        </div>
      </div>
    )
  }

  if (variant === 'section') {
    return (
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center ${className}`}
        aria-hidden="true"
      >
        {/* Centered ChariotWheel as subtle divider */}
        <ChariotWheel size={120} opacity={0.05} spinning={false} />
      </div>
    )
  }

  if (variant === 'about') {
    return (
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
        aria-hidden="true"
      >
        {/* Large ChariotWheel behind content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ChariotWheel size={500} opacity={0.03} spinning={false} />
        </div>

        {/* Animated VijayaBow on left edge */}
        <div className="absolute left-[-3%] top-[10%]">
          <VijayaBow size={350} opacity={0.06} animated />
        </div>
      </div>
    )
  }

  if (variant === 'services') {
    return (
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
        aria-hidden="true"
      >
        {/* Small bow accent top-right */}
        <div className="absolute top-[5%] right-[5%]">
          <VijayaBow size={200} opacity={0.05} animated={false} />
        </div>

        {/* Arrow motifs for process flow - stacked vertically on the left */}
        <div className="absolute left-[8%] top-[30%] flex flex-col gap-16">
          <KarnaArrow size={80} opacity={0.1} direction="right" animated />
          <KarnaArrow size={80} opacity={0.08} direction="right" animated />
          <KarnaArrow size={80} opacity={0.06} direction="right" animated />
        </div>
      </div>
    )
  }

  if (variant === 'contact') {
    return (
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
        aria-hidden="true"
      >
        {/* Arrow flying across the top */}
        <div className="absolute top-[10%] left-[5%]">
          <KarnaArrow size={200} opacity={0.08} direction="right" animated />
        </div>

        {/* Kavach around form area - positioned center-right */}
        <div className="absolute top-1/2 right-[15%] -translate-y-1/2">
          <KavachShield size={300} opacity={0.04} showKundala={false} />
        </div>
      </div>
    )
  }

  return null
}
