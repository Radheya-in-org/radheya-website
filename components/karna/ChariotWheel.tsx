'use client'

interface ChariotWheelProps {
  size?: number
  opacity?: number
  spinning?: boolean
  className?: string
}

export default function ChariotWheel({
  size = 200,
  opacity = 0.05,
  spinning = false,
  className = '',
}: ChariotWheelProps) {
  const strokeColor = '#C9A84C'
  const cx = 100
  const cy = 100
  const outerR = 90
  const innerR = 15

  // Generate 8 spokes evenly distributed
  const spokes = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * Math.PI * 2) / 8
    const x1 = cx + innerR * Math.cos(angle)
    const y1 = cy + innerR * Math.sin(angle)
    const x2 = cx + outerR * Math.cos(angle)
    const y2 = cy + outerR * Math.sin(angle)
    return { x1, y1, x2, y2 }
  })

  // Generate small decorative circles at spoke-rim intersections
  const rimDots = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * Math.PI * 2) / 8
    const x = cx + outerR * Math.cos(angle)
    const y = cy + outerR * Math.sin(angle)
    return { x, y }
  })

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
        className={spinning ? 'animate-slow-spin' : undefined}
      >
        {/* Outer rim */}
        <circle
          cx={cx}
          cy={cy}
          r={outerR}
          stroke={strokeColor}
          strokeWidth={1.2}
          fill="none"
        />

        {/* Secondary rim for depth */}
        <circle
          cx={cx}
          cy={cy}
          r={outerR - 6}
          stroke={strokeColor}
          strokeWidth={0.5}
          fill="none"
        />

        {/* Hub circle */}
        <circle
          cx={cx}
          cy={cy}
          r={innerR}
          stroke={strokeColor}
          strokeWidth={1}
          fill="none"
        />

        {/* Inner hub dot */}
        <circle
          cx={cx}
          cy={cy}
          r={4}
          stroke={strokeColor}
          strokeWidth={0.6}
          fill="none"
        />

        {/* 8 Spokes */}
        {spokes.map((spoke, i) => (
          <line
            key={`spoke-${i}`}
            x1={spoke.x1}
            y1={spoke.y1}
            x2={spoke.x2}
            y2={spoke.y2}
            stroke={strokeColor}
            strokeWidth={0.8}
          />
        ))}

        {/* Decorative dots at rim-spoke intersections */}
        {rimDots.map((dot, i) => (
          <circle
            key={`dot-${i}`}
            cx={dot.x}
            cy={dot.y}
            r={2.5}
            stroke={strokeColor}
            strokeWidth={0.5}
            fill="none"
          />
        ))}
      </svg>
    </div>
  )
}
