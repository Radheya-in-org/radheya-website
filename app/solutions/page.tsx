import type { Metadata } from 'next'
import SolutionsPageClient from './SolutionsPageClient'

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Industry-specific solutions by Radheya — purpose-built software for education, with more verticals coming soon.',
}

export default function SolutionsPage() {
  return <SolutionsPageClient />
}
