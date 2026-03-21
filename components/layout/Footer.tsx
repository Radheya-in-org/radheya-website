'use client'

import Link from 'next/link'
import { Mail, Linkedin, Twitter, Github } from 'lucide-react'
import { COMPANY, SERVICES } from '@/lib/constants'
import ChariotWheel from '@/components/karna/ChariotWheel'
import RadheyaLogo from '@/components/ui/RadheyaLogo'

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
]

const productLinks = [
  { label: 'MyNextStep.in', href: 'https://mynextstep.in', external: true },
]

const serviceLinks = SERVICES.map((s) => ({
  label: s.title,
  href: `/services#${s.id}`,
}))

const socialLinks = [
  { icon: Mail, href: `mailto:${COMPANY.email}`, label: 'Email' },
  { icon: Linkedin, href: COMPANY.socials.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: COMPANY.socials.twitter, label: 'Twitter / X' },
  { icon: Github, href: COMPANY.socials.github, label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-accent/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Logo + Tagline */}
        <div className="mb-12">
          <RadheyaLogo size="md" />
          <p className="text-muted text-sm mt-2 font-body">{COMPANY.tagline}</p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h4 className="font-ui uppercase tracking-ui-wide text-warm-ivory text-sm font-medium mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-accent transition-colors duration-200 text-sm font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-ui uppercase tracking-ui-wide text-warm-ivory text-sm font-medium mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent transition-colors duration-200 text-sm font-body"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-muted hover:text-accent transition-colors duration-200 text-sm font-body"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-ui uppercase tracking-ui-wide text-warm-ivory text-sm font-medium mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-accent transition-colors duration-200 text-sm font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-ui uppercase tracking-ui-wide text-warm-ivory text-sm font-medium mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="text-muted hover:text-accent transition-colors duration-200 text-sm font-body inline-flex items-center gap-2"
                  >
                    <link.icon size={16} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-accent/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-muted text-xs font-body inline-flex items-center gap-2">
            <ChariotWheel size={20} opacity={0.3} />
            &copy; 2026 Radheya. Built with purpose.
          </span>
          <span className="text-accent text-sm font-heading">
            {COMPANY.nameTelugu}
          </span>
        </div>
      </div>
    </footer>
  )
}
