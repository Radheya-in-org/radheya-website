import type { Metadata } from 'next'
import BlogPostClient from './BlogPostClient'
import { BLOG_POSTS } from '@/lib/constants'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)
  return {
    title: post?.title || 'Blog Post',
    description: post?.excerpt || 'A blog post from Radheya.',
  }
}

export default function BlogPostPage({ params }: Props) {
  return <BlogPostClient slug={params.slug} />
}
