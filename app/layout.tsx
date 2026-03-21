import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans, Outfit } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/layout/ScrollProgress'
import CustomCursor from '@/components/ui/CustomCursor'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500'],
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Radheya — Solving Tomorrow, Today',
    template: '%s — Radheya',
  },
  description:
    'Radheya is a product-first software company that builds solutions for real-world problems and crafts custom software for businesses that demand excellence.',
  keywords: [
    'Radheya',
    'software company',
    'product studio',
    'custom software development',
    'web development',
    'mobile development',
    'SaaS',
  ],
  openGraph: {
    title: 'Radheya — Solving Tomorrow, Today',
    description:
      'We build products that solve real-world problems and craft custom software for businesses that demand excellence.',
    url: 'https://radheya.dev',
    siteName: 'Radheya',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radheya — Solving Tomorrow, Today',
    description:
      'We build products that solve real-world problems and craft custom software for businesses that demand excellence.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${outfit.variable}`}
    >
      <body className="bg-primary text-warm-ivory font-body antialiased">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
