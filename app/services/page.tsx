import type { Metadata } from 'next'
import ServicesPageClient from './ServicesPageClient'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Custom software development services by Radheya — web applications, mobile apps, SaaS products, and technical consulting.',
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
