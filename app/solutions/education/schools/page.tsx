import type { Metadata } from 'next'
import SchoolsPageClient from './SchoolsPageClient'

export const metadata: Metadata = {
  title: 'School Websites — Pricing & Plans',
  description:
    'Premium school websites built by Radheya — three transparent pricing tiers, on-campus photography, full CMS, hosting and support included. Built for mid-tier private schools in Telangana and across India.',
}

export default function SchoolsPage() {
  return <SchoolsPageClient />
}
