'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import ProductCard from '@/components/products/ProductCard'
import { PRODUCTS } from '@/lib/constants'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import PageTransition from '@/components/layout/PageTransition'
import KavachShield from '@/components/karna/KavachShield'

export default function ProductsPageClient() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute top-10 right-0 opacity-50">
          <KavachShield size={300} opacity={0.04} />
        </div>
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            className="font-ui text-accent text-xs uppercase tracking-[4px] mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Our Products
          </motion.p>
          <motion.h1
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-warm-ivory mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            We don&apos;t just write code —{' '}
            <span className="text-accent">we solve problems.</span>
          </motion.h1>
          <motion.p
            className="font-body text-muted text-lg max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Every product we build starts with a question: what problem is worth
            solving? We find the answer, then we build it.
          </motion.p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 px-6">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {PRODUCTS.map((product, i) => (
            <motion.div key={i} variants={staggerItem}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            title="Why We Build Products"
            subtitle="Before trends emerge, there are problems waiting to be solved. We find those problems and build solutions that last."
          />
          <motion.p
            className="font-body text-warm-ivory/70 text-lg leading-relaxed mt-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Most software companies wait for markets to form, then build
            copycat solutions. At Radheya, we go upstream — we identify the
            friction points in real workflows, talk to the people who face
            them, and build focused tools that remove that friction. Our
            products are not features wrapped in a subscription — they are
            purpose-built solutions for problems that matter.
          </motion.p>
        </div>
      </section>
    </PageTransition>
  )
}
