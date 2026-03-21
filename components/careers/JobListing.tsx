'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { COMPANY } from '@/lib/constants'

export default function JobListing() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {/* No open positions state */}
      <div className="rounded-xl border border-subtle/20 bg-dark-card/50 p-10 text-center">
        <div className="max-w-md mx-auto">
          {/* Empty state icon */}
          <div className="w-14 h-14 rounded-full bg-secondary/50 border border-subtle/20 mx-auto mb-6 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-muted/50"
            >
              <rect
                x="3"
                y="7"
                width="18"
                height="13"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M12 12v4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M10 14h4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p className="font-body text-lg text-warm-ivory/70 mb-2">
            No open positions right now.
          </p>
          <p className="font-body text-muted mb-6">
            We&apos;re always looking for exceptional people. Send us your
            story.
          </p>

          <a
            href={`mailto:${COMPANY.email}`}
            className="inline-flex items-center gap-2 font-heading text-accent hover:text-accent/80 transition-colors font-semibold"
          >
            {COMPANY.email}
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
          </a>
        </div>
      </div>

      {/* Placeholder structure for future job cards */}
      {/* Uncomment when positions are available:
      <div className="space-y-4 mt-6">
        <div className="rounded-xl border border-subtle/20 bg-dark-card/50 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-heading text-lg font-semibold text-warm-ivory">Title</h3>
            <div className="flex items-center gap-3 text-sm text-muted mt-1">
              <span>Department</span>
              <span className="w-1 h-1 rounded-full bg-muted/50" />
              <span>Location</span>
              <span className="w-1 h-1 rounded-full bg-muted/50" />
              <span>Type</span>
            </div>
          </div>
          <Button href="/careers/apply" variant="outline" size="sm">Apply</Button>
        </div>
      </div>
      */}
    </motion.div>
  )
}
