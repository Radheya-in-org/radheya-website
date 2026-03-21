'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import { staggerItem, glowHover } from '@/lib/animations'

interface Product {
  name: string
  tagline: string
  description: string
  features: readonly string[]
  techStack: readonly string[]
  url: string
  status: 'live' | 'upcoming'
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  if (product.status === 'upcoming') {
    return (
      <motion.div variants={staggerItem}>
        <Card className="relative p-8 overflow-hidden">
          {/* Shimmer overlay */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent/5 to-transparent"
              animate={{ translateX: ['100%', '-100%'] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
                repeatDelay: 1,
              }}
            />
          </div>

          {/* Coming Soon badge */}
          <motion.span
            className="inline-block px-3 py-1 mb-6 text-xs font-heading font-semibold tracking-wider uppercase rounded-full bg-accent/10 text-accent border border-accent/20"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            Coming Soon
          </motion.span>

          {/* Mockup placeholder */}
          <div className="w-full h-48 rounded-lg bg-secondary/30 mb-6 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border border-accent/20 flex items-center justify-center">
              <motion.div
                className="w-3 h-3 rounded-full bg-accent/40"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>

          <h3 className="font-heading text-2xl font-bold text-warm-ivory mb-2">
            {product.name}
          </h3>
          <p className="font-body text-muted mb-6">{product.description}</p>

          {/* Email signup placeholder */}
          <p className="font-body text-sm text-muted/60 italic">
            Sign up for updates when we launch.
          </p>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div variants={staggerItem}>
      <Card className="p-8">
        {/* Mockup placeholder */}
        <div className="w-full h-56 rounded-lg bg-secondary/20 mb-6 flex items-center justify-center border border-subtle/10">
          <div className="text-center">
            <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 mx-auto mb-3 flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-accent"
              >
                <rect
                  x="2"
                  y="3"
                  width="16"
                  height="12"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M6 18h8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M10 15v3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="text-xs text-muted/40 font-ui">
              Product Preview
            </span>
          </div>
        </div>

        <h3 className="font-heading text-2xl font-bold text-warm-ivory mb-1">
          {product.name}
        </h3>
        <p className="font-body text-accent text-sm font-medium mb-4">
          {product.tagline}
        </p>
        <p className="font-body text-muted leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Feature list with kundala-style bullets */}
        {product.features.length > 0 && (
          <ul className="space-y-3 mb-6">
            {product.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-accent/70 ring-2 ring-accent/20" />
                <span className="font-body text-warm-ivory/80 text-sm">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack tags */}
        {product.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {product.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-ui rounded-full bg-secondary/60 text-muted border border-subtle/20"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Visit Product link */}
        <motion.div whileHover={glowHover} className="inline-block">
          <Link
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
          >
            Visit Product
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="stroke-current"
            >
              <path
                d="M3 8h8M8 4l4 4-4 4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>
      </Card>
    </motion.div>
  )
}
