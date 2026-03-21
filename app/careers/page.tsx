import type { Metadata } from 'next'
import CareersPageClient from './CareersPageClient'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Radheya — build software that matters, with people who care. Explore career opportunities.',
}

export default function CareersPage() {
  return <CareersPageClient />
}
