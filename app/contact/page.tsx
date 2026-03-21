import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Radheya — whether you have a project, an idea, or just want to connect.',
}

export default function ContactPage() {
  return <ContactPageClient />
}
