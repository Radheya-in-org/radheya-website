'use client'

import { motion } from 'framer-motion'
import BlogCard from '@/components/blog/BlogCard'
import { BLOG_POSTS } from '@/lib/constants'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import PageTransition from '@/components/layout/PageTransition'

export default function BlogPageClient() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            className="font-ui text-accent text-xs uppercase tracking-[4px] mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Blog
          </motion.p>
          <motion.h1
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-warm-ivory mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            Thoughts & <span className="text-accent">Insights</span>
          </motion.h1>
          <motion.p
            className="font-body text-muted text-lg max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Engineering deep dives, product thinking, and lessons from
            building software that matters.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-6">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {BLOG_POSTS.map((post) => (
            <motion.div key={post.slug} variants={staggerItem}>
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </PageTransition>
  )
}
