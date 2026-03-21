'use client'

import React, { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const cursorX = useSpring(0, { stiffness: 300, damping: 28 })
  const cursorY = useSpring(0, { stiffness: 300, damping: 28 })

  useEffect(() => {
    // Detect touch device
    const hasTouch =
      'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (hasTouch) {
      setIsTouchDevice(true)
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnterInteractive = () => setIsHovering(true)
    const handleMouseLeaveInteractive = () => setIsHovering(false)

    window.addEventListener('mousemove', handleMouseMove)

    // Observe DOM for interactive elements
    const addListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, [data-cursor-hover]'
      )
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnterInteractive)
        el.addEventListener('mouseleave', handleMouseLeaveInteractive)
      })
      return interactiveElements
    }

    let elements = addListeners()

    // Use MutationObserver to handle dynamically added elements
    const observer = new MutationObserver(() => {
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive)
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive)
      })
      elements = addListeners()
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive)
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive)
      })
      observer.disconnect()
    }
  }, [cursorX, cursorY, isVisible])

  if (isTouchDevice || !isVisible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        animate={{
          width: isHovering ? 24 : 8,
          height: isHovering ? 24 : 8,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="rounded-full bg-accent"
      />
    </motion.div>
  )
}
