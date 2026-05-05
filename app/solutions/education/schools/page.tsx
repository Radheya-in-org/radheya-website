import type { Metadata } from 'next'
import SchoolsPageClient from './SchoolsPageClient'

export const metadata: Metadata = {
  title: 'School Websites — The Website Your School Deserves',
  description:
    'Take your physical school fully online — every teacher, classroom, achievement, and alumni story. Built by Radheya for schools in Telangana and across India.',
}

export default function SchoolsPage() {
  return <SchoolsPageClient />
}
