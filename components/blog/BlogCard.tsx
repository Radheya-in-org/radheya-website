'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import { staggerItem } from '@/lib/animations'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
}

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <motion.div variants={staggerItem}>
      <Link href={`/blog/${post.slug}`} className="block group">
        <Card className="h-full">
          {/* Image placeholder area */}
          <div className="h-48 bg-secondary/20 flex items-center justify-center border-b border-subtle/10">
            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="text-accent/50"
              >
                <rect
                  x="2"
                  y="2"
                  width="14"
                  height="14"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <circle cx="7" cy="7" r="1.5" stroke="currentColor" strokeWidth="1" />
                <path
                  d="M2 13l4-4 3 3 2-2 5 5"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="p-6">
            {/* Category tag */}
            <span className="inline-block px-3 py-1 text-xs font-ui font-medium rounded-full bg-accent/10 text-accent border border-accent/20 mb-3">
              {post.category}
            </span>

            {/* Title */}
            <h3 className="font-heading text-xl font-semibold text-warm-ivory group-hover:text-accent transition-colors duration-300 mb-2">
              {post.title}
            </h3>

            {/* Date + read time */}
            <div className="flex items-center gap-3 text-sm text-muted mb-3">
              <span className="font-body">{formattedDate}</span>
              <span className="w-1 h-1 rounded-full bg-muted/50" />
              <span className="font-body">{post.readTime}</span>
            </div>

            {/* Excerpt */}
            <p className="font-body text-sm text-warm-ivory/60 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}
