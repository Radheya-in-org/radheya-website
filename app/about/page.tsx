import type { Metadata } from 'next'
import AboutPageClient from './AboutPageClient'

export const metadata: Metadata = {
  title: 'About',
  description:
    'The story of Radheya — a product-first software company inspired by Karna, built on purpose, craft, and unwavering conviction.',
}

export default function AboutPage() {
  return <AboutPageClient />
}
