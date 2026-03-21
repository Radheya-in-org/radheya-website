'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { BLOG_POSTS } from '@/lib/constants'
import { fadeInUp } from '@/lib/animations'
import PageTransition from '@/components/layout/PageTransition'

const BLOG_CONTENT: Record<string, string[]> = {
  'why-we-build-products-first': [
    'At Radheya, we made a deliberate choice to be a product-first company. While we love working with clients and building custom software, our core identity is rooted in building our own products that solve real-world problems.',
    'This approach makes us better at everything we do. When you build your own products, you experience the full lifecycle — from ideation and user research through architecture decisions, development, launch, and iteration. You feel the weight of every technical decision because you live with the consequences.',
    'That depth of experience translates directly into how we approach client work. We do not just write code to spec — we think about the product holistically. We ask the uncomfortable questions early. We push back when something does not feel right, not because we are difficult, but because we care about outcomes.',
    'The product-first approach also keeps us sharp. We are constantly exploring new technologies, patterns, and architectures for our own products, which means our client work benefits from battle-tested knowledge rather than theoretical expertise.',
  ],
  'architecture-lessons-from-scaling-mynextstep': [
    'When we launched MyNextStep.in, we designed it for hundreds of users. Within months, we were serving thousands. Here are the real-world lessons we learned about system design under pressure.',
    'The first lesson was about database design. We initially used a single PostgreSQL instance with a straightforward schema. As query patterns became more complex — especially around career path recommendations — we needed to rethink our data model. We introduced materialized views for common aggregations and moved to a read-replica architecture.',
    'The second major lesson was about AI integration architecture. Our career recommendation engine uses large language models, and the latency of those calls was killing our user experience. We implemented a queue-based architecture with server-sent events, allowing users to see partial results as they streamed in.',
    'Perhaps the most important lesson was about monitoring. In the early days, we relied on basic health checks. After a silent failure in our recommendation pipeline went undetected for hours, we invested heavily in observability — structured logging, distributed tracing, and anomaly detection on key metrics.',
  ],
  'the-karna-mindset-in-software': [
    'Karna, the warrior of the Mahabharata, is our namesake and our guiding philosophy. But what does an ancient warrior have to do with modern software engineering?',
    'Karna was born into humble circumstances but rose to become the greatest warrior of his age through sheer determination and skill. He did not have the advantages of royal birth or divine training. What he had was purpose, discipline, and an unwavering commitment to his craft.',
    'In software engineering, we see the same pattern. The best engineers are not always the ones with Stanford degrees or FAANG pedigrees. They are the ones who care deeply about their craft, who study fundamentals, who practice deliberately, and who never stop learning.',
    'The Karna mindset means choosing substance over status. It means building software that matters rather than chasing trends. It means being generous with your knowledge and skills, even when the world does not always recognize your contributions.',
  ],
  'choosing-the-right-tech-stack-2026': [
    'Every few months, a new framework arrives promising to revolutionize how we build software. The temptation to jump on every new tool is strong — but at Radheya, we follow a different path.',
    'Our philosophy is roots over trends. Before adopting any new technology, we ask three questions: Does it solve a real problem we face? Is the community and ecosystem mature enough for production use? Will it still be relevant in three years?',
    'For most projects in 2026, a combination of Next.js, TypeScript, and PostgreSQL handles the vast majority of use cases. These are not exciting choices — they are reliable ones. And reliability is far more valuable than novelty when you are building products that real people depend on.',
    'That said, we are not luddites. We adopt new tools when they genuinely serve the mission. We use AI models for specific, well-defined tasks. We use edge computing for latency-sensitive features. But every adoption is deliberate, not reactive.',
  ],
  'from-services-to-products-our-journey': [
    'Radheya did not start as a product company. Like many software studios, we began by building solutions for clients. But somewhere along the way, a question kept nagging us: why are we only solving other people\'s problems?',
    'The transition from services to products was not a leap — it was a gradual shift. We started by dedicating one day a week to internal product work. That one day became the highlight of our week, and we knew we were onto something.',
    'Our first product, MyNextStep.in, was born from a problem we saw in our own hiring process. Candidates were talented but lost — they did not know what career path suited them, what skills to develop, or how to navigate the overwhelming landscape of opportunities.',
    'Today, we operate a hybrid model: products first, services second. Our products are our primary focus and identity. Client work is something we do selectively, bringing the same product-thinking mindset to every engagement. It is the best of both worlds.',
  ],
}

export default function BlogPostClient({ slug }: { slug: string }) {
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  const content = BLOG_CONTENT[slug] || []

  if (!post) {
    return (
      <PageTransition>
        <div className="pt-32 pb-16 px-6 text-center">
          <h1 className="font-heading text-3xl text-warm-ivory">
            Post not found
          </h1>
          <Link href="/blog" className="text-accent mt-4 inline-block">
            ← Back to Blog
          </Link>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <article className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors font-ui text-sm uppercase tracking-ui-wide mb-8"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-ui uppercase tracking-ui-wide rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-warm-ivory mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-muted text-sm mb-12">
              <span className="flex items-center gap-2">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            {content.map((paragraph, i) => (
              <p
                key={i}
                className="font-body text-warm-ivory/80 text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Back link bottom */}
          <motion.div
            className="mt-16 pt-8 border-t border-subtle/30"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-heading font-semibold"
            >
              <ArrowLeft size={16} />
              All Posts
            </Link>
          </motion.div>
        </div>
      </article>
    </PageTransition>
  )
}
