'use client'

import React from 'react'

export default function HeroGlobe() {
  return (
    <div className="w-full aspect-square flex items-center justify-center relative">
      {/* CSS wireframe globe */}
      <div className="relative w-72 h-72 lg:w-80 lg:h-80">
        {/* Outer ring / equator */}
        <div
          className="absolute inset-0 rounded-full border border-accent/20"
          style={{ animation: 'spin 30s linear infinite' }}
        />

        {/* Tilted ring 1 */}
        <div
          className="absolute inset-2 rounded-full border border-accent/15"
          style={{
            transform: 'rotateX(60deg)',
            animation: 'spin 25s linear infinite reverse',
          }}
        />

        {/* Tilted ring 2 */}
        <div
          className="absolute inset-4 rounded-full border border-accent/10"
          style={{
            transform: 'rotateY(60deg)',
            animation: 'spin 35s linear infinite',
          }}
        />

        {/* Tilted ring 3 */}
        <div
          className="absolute inset-6 rounded-full border border-accent/[0.08]"
          style={{
            transform: 'rotateX(30deg) rotateZ(45deg)',
            animation: 'spin 40s linear infinite reverse',
          }}
        />

        {/* Latitude lines */}
        <div
          className="absolute rounded-full border border-accent/10"
          style={{
            top: '25%', left: '15%', right: '15%', bottom: '25%',
            transform: 'rotateX(75deg)',
            animation: 'spin 28s linear infinite',
          }}
        />
        <div
          className="absolute rounded-full border border-accent/[0.07]"
          style={{
            top: '35%', left: '25%', right: '25%', bottom: '35%',
            transform: 'rotateX(75deg)',
            animation: 'spin 28s linear infinite',
          }}
        />

        {/* Main sphere outline */}
        <div className="absolute inset-0 rounded-full border border-accent/25" />

        {/* Inner wireframe circles (longitude lines) */}
        <div
          className="absolute inset-0 rounded-full border border-accent/10"
          style={{
            transform: 'rotateY(30deg)',
          }}
        />
        <div
          className="absolute inset-0 rounded-full border border-accent/10"
          style={{
            transform: 'rotateY(60deg)',
          }}
        />
        <div
          className="absolute inset-0 rounded-full border border-accent/10"
          style={{
            transform: 'rotateY(90deg)',
          }}
        />

        {/* Glowing dots */}
        {[
          { top: '15%', left: '45%' },
          { top: '30%', left: '72%' },
          { top: '55%', left: '80%' },
          { top: '70%', left: '55%' },
          { top: '40%', left: '20%' },
          { top: '60%', left: '30%' },
          { top: '25%', left: '35%' },
          { top: '75%', left: '45%' },
          { top: '45%', left: '60%' },
          { top: '35%', left: '50%' },
          { top: '20%', left: '58%' },
          { top: '65%', left: '68%' },
        ].map((pos, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-accent"
            style={{
              ...pos,
              opacity: 0.3 + (i % 3) * 0.15,
              animation: `pulse ${2 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}

        {/* Center glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-accent/50 shadow-[0_0_20px_rgba(201,168,76,0.4)]" />
        </div>

        {/* Outer glow */}
        <div
          className="absolute -inset-8 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
          }}
        />
      </div>
    </div>
  )
}
