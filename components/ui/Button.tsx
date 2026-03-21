'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

type ButtonVariant = 'primary' | 'secondary' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  children: React.ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-primary hover:shadow-[0_0_25px_rgba(201,168,76,0.4)] border border-accent',
  secondary:
    'bg-secondary text-warm-ivory border border-transparent hover:border-accent',
  outline:
    'border border-accent text-warm-ivory bg-transparent hover:bg-accent/10',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  onClick,
  type,
  disabled,
}: ButtonProps) {
  const baseClasses =
    'font-heading font-semibold rounded-lg transition-colors duration-300 inline-flex items-center gap-2 relative overflow-hidden group cursor-pointer'

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  const content = (
    <>
      <span className="inline-block transition-transform duration-300 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current"
        >
          <path
            d="M1 7h10M8 3l4 4-4 4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        {children}
      </span>
    </>
  )

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block"
      >
        <Link href={href} className={classes}>
          {content}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {content}
    </motion.button>
  )
}
