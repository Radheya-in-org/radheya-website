'use client'

interface KavachShieldProps {
  size?: number
  opacity?: number
  showKundala?: boolean
  className?: string
}

export default function KavachShield({
  size = 200,
  opacity = 0.06,
  showKundala = true,
  className = '',
}: KavachShieldProps) {
  const strokeColor = '#C9A84C'

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        {/* Outer shield - heraldic shape: pointed top, wide middle, pointed bottom */}
        <path
          d="M 100 10 L 40 50 L 20 120 L 40 190 L 100 230 L 160 190 L 180 120 L 160 50 Z"
          stroke={strokeColor}
          strokeWidth={1.2}
          strokeLinejoin="round"
          fill="none"
        />

        {/* Inner concentric shield */}
        <path
          d="M 100 35 L 58 65 L 42 120 L 58 175 L 100 205 L 142 175 L 158 120 L 142 65 Z"
          stroke={strokeColor}
          strokeWidth={0.8}
          strokeLinejoin="round"
          fill="none"
        />

        {/* Center circle - Surya (the Sun) */}
        <circle
          cx="100"
          cy="120"
          r="25"
          stroke={strokeColor}
          strokeWidth={1}
          fill="none"
        />

        {/* Inner Surya ring */}
        <circle
          cx="100"
          cy="120"
          r="12"
          stroke={strokeColor}
          strokeWidth={0.6}
          fill="none"
        />

        {/* Surya dot at center */}
        <circle
          cx="100"
          cy="120"
          r="3"
          stroke={strokeColor}
          strokeWidth={0.5}
          fill="none"
        />

        {/* Kundala earrings - two concentric circle pairs at top sides */}
        {showKundala && (
          <>
            {/* Left Kundala */}
            <circle
              cx="55"
              cy="38"
              r="10"
              stroke={strokeColor}
              strokeWidth={0.8}
              fill="none"
            />
            <circle
              cx="55"
              cy="38"
              r="5"
              stroke={strokeColor}
              strokeWidth={0.6}
              fill="none"
            />

            {/* Right Kundala */}
            <circle
              cx="145"
              cy="38"
              r="10"
              stroke={strokeColor}
              strokeWidth={0.8}
              fill="none"
            />
            <circle
              cx="145"
              cy="38"
              r="5"
              stroke={strokeColor}
              strokeWidth={0.6}
              fill="none"
            />
          </>
        )}
      </svg>
    </div>
  )
}
