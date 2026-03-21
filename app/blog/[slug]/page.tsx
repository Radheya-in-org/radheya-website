import type { Metadata } from 'next'
import BlogPostClient from './BlogPostClient'
import { BLOG_POSTS } from '@/lib/constants'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  return {
    title: post?.title || 'Blog Post',
    description: post?.excerpt || 'A blog post from Radheya.',
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  return <BlogPostClient slug={slug} />
}
