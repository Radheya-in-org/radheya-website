'use client'

import React, { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  tilt?: boolean
}

export default function Card({
  children,
  className = '',
  hover = true,
  tilt = true,
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!tilt || !cardRef.current) return

      const rect = cardRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const mouseX = e.clientX - centerX
      const mouseY = e.clientY - centerY

      const maxTilt = 8
      const tiltX = -(mouseY / (rect.height / 2)) * maxTilt
      const tiltY = (mouseX / (rect.width / 2)) * maxTilt

      setRotateX(tiltX)
      setRotateY(tiltY)
    },
    [tilt]
  )

  const handleMouseLeave = useCallback(() => {
    setRotateX(0)
    setRotateY(0)
  }, [])

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt ? rotateX : 0,
        rotateY: tilt ? rotateY : 0,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      whileHover={
        hover
          ? {
              y: -4,
              borderColor: 'rgba(201, 168, 76, 0.5)',
              boxShadow: '0 0 30px rgba(201, 168, 76, 0.15)',
            }
          : undefined
      }
      style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
      className={`bg-dark-card border border-subtle/20 rounded-xl overflow-hidden transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}
