import type { Metadata } from 'next'
import SchoolsPageClient from './SchoolsPageClient'

export const metadata: Metadata = {
  title: 'School Websites — Build Your Quote',
  description:
    'Pick the pages and features your school needs. See the price live. Hourly-based, transparent, no fixed packages. Built by Radheya for schools in Telangana and across India.',
}

export default function SchoolsPage() {
  return <SchoolsPageClient />
}
