import type { Metadata } from 'next'
import BlogPageClient from './BlogPageClient'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on engineering, product thinking, and building software that matters — from the Radheya team.',
}

export default function BlogPage() {
  return <BlogPageClient />
}
