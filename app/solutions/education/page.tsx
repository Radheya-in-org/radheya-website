import type { Metadata } from 'next'
import EducationPageClient from './EducationPageClient'

export const metadata: Metadata = {
  title: 'Education Solutions',
  description:
    'Software for schools, colleges, and education institutions. Built by the team behind MyNextStep — Radheya’s AI career guidance platform.',
}

export default function EducationPage() {
  return <EducationPageClient />
}
