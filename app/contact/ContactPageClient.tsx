'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Linkedin, Twitter, Github, Instagram, MessageCircle } from 'lucide-react'
import ContactForm from '@/components/contact/ContactForm'
import { COMPANY } from '@/lib/constants'
import { fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations'
import PageTransition from '@/components/layout/PageTransition'
import KarnaArrow from '@/components/karna/KarnaArrow'
import KavachShield from '@/components/karna/KavachShield'

export default function ContactPageClient() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        {/* Arrow flying across on load */}
        <motion.div
          className="absolute top-1/2 left-0 -translate-y-1/2"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '200vw', opacity: [0, 0.3, 0.3, 0] }}
          transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
        >
          <KarnaArrow size={150} opacity={0.3} />
        </motion.div>

        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            className="font-ui text-accent text-xs uppercase tracking-[4px] mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Contact
          </motion.p>
          <motion.h1
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-warm-ivory mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            Let&apos;s <span className="text-accent">Talk</span>
          </motion.h1>
          <motion.p
            className="font-body text-muted text-lg max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Whether you have a project, an idea, or just want to connect.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Form */}
          <motion.div
            className="relative"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="absolute -top-8 -left-8 hidden lg:block">
              <KavachShield size={150} opacity={0.03} />
            </div>
            <ContactForm />
          </motion.div>

          {/* Right: Info */}
          <motion.div
            className="space-y-8"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <h3 className="font-heading font-semibold text-xl text-warm-ivory mb-2">
                Get in Touch
              </h3>
              <p className="font-body text-muted">
                We typically respond within 24 hours. For urgent inquiries,
                reach out directly via email.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 text-warm-ivory/80 hover:text-accent transition-colors group"
              >
                <Mail
                  size={20}
                  className="text-accent group-hover:scale-110 transition-transform"
                />
                <span className="font-body">{COMPANY.email}</span>
              </a>

              <div className="flex items-center gap-3 text-warm-ivory/80">
                <MapPin size={20} className="text-accent" />
                <span className="font-body">{COMPANY.location}</span>
              </div>
            </div>

            <div>
              <h4 className="font-ui text-sm uppercase tracking-ui-wide text-warm-ivory mb-4">
                Connect
              </h4>
              <div className="flex gap-4">
                <a
                  href={COMPANY.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-subtle/30 flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={COMPANY.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-subtle/30 flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href={COMPANY.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-subtle/30 flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all"
                >
                  <Github size={18} />
                </a>
                <a
                  href={COMPANY.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-subtle/30 flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={COMPANY.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-subtle/30 flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Decorative */}
            <div className="mt-12 p-6 rounded-xl border border-subtle/20 bg-dark-card/50">
              <p className="font-heading font-semibold text-warm-ivory mb-2">
                Prefer a conversation?
              </p>
              <p className="font-body text-muted text-sm">
                Schedule a 30-minute call with our team. No pressure, no
                pitch — just a genuine conversation about your needs.
              </p>
              <a
                href={`mailto:${COMPANY.email}?subject=Schedule a Call`}
                className="inline-block mt-4 text-accent font-heading font-semibold text-sm hover:text-accent/80 transition-colors"
              >
                Book a Call →
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
