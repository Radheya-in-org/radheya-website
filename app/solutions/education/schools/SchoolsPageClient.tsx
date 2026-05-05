'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronDown, MessageCircle, Clock } from 'lucide-react'
import Button from '@/components/ui/Button'
import PageTransition from '@/components/layout/PageTransition'
import VijayaBow from '@/components/karna/VijayaBow'
import { fadeInUp } from '@/lib/animations'
import { COMPANY } from '@/lib/constants'

const HOURLY_RATE = 800
const PHOTOGRAPHY_FIXED = 5000

interface Item {
  id: string
  label: string
  hint?: string
  hours: number
  required?: boolean
}

interface Group {
  id: string
  title: string
  subtitle: string
  items: Item[]
}

interface SupportTier {
  id: string
  name: string
  monthly: number
  detail: string
}

const GROUPS: Group[] = [
  {
    id: 'pages',
    title: 'Pages',
    subtitle: 'Pick the pages your school needs.',
    items: [
      { id: 'home', label: 'Home', hint: 'Hero, achievements ticker, sections', hours: 8, required: true },
      { id: 'about', label: 'About + Vision/Mission', hours: 4 },
      { id: 'principal', label: 'Principal’s Message + Leadership', hours: 3 },
      { id: 'academics', label: 'Academics / Curriculum', hours: 4 },
      { id: 'admissions', label: 'Admissions + Inquiry Form', hours: 6 },
      { id: 'faculty', label: 'Faculty / Staff', hours: 4 },
      { id: 'gallery', label: 'Photo Gallery', hint: 'Categorized, lightbox, lazy load', hours: 6 },
      { id: 'achievements', label: 'Achievements / Toppers', hours: 4 },
      { id: 'news', label: 'News & Events', hours: 6 },
      { id: 'infrastructure', label: 'Infrastructure / Campus Tour', hours: 4 },
      { id: 'contact', label: 'Contact + Map', hours: 3 },
      { id: 'blog', label: 'Blog', hours: 6 },
    ],
  },
  {
    id: 'features',
    title: 'Features',
    subtitle: 'Pick capabilities to add on top.',
    items: [
      { id: 'cms-basic', label: 'CMS — News & Gallery', hint: 'Staff updates news + photos themselves', hours: 8 },
      { id: 'cms-full', label: 'CMS — Full', hint: 'Add faculty, achievements, events, pages', hours: 16 },
      { id: 'whatsapp-route', label: 'Inquiry → WhatsApp + Email Routing', hours: 4 },
      { id: 'seo', label: 'SEO Setup + Schema Markup', hours: 4 },
      { id: 'multi-campus', label: 'Multi-Campus Support', hours: 6 },
      { id: 'telugu', label: 'Telugu / English Toggle', hours: 8 },
      { id: 'virtual-tour', label: '360° Virtual Campus Tour', hours: 16 },
      { id: 'newsletter', label: 'Newsletter Setup', hours: 4 },
      { id: 'fee-payment', label: 'Online Fee Payment Integration', hours: 16 },
      { id: 'parent-portal', label: 'Parent Login Portal', hours: 30 },
    ],
  },
]

const SUPPORT_TIERS: SupportTier[] = [
  { id: 'basic', name: 'Basic', monthly: 999, detail: 'Hosting, SSL, backups + 1 hr/month updates' },
  { id: 'standard', name: 'Standard', monthly: 1999, detail: 'Above + 3 hr/month + WhatsApp support' },
  { id: 'premium', name: 'Premium', monthly: 2999, detail: 'Above + 5 hr/month + quarterly review' },
]

const FAQ: { q: string; a: string }[] = [
  {
    q: 'How is hourly pricing better than a fixed package?',
    a: 'You only pay for what you use. A small school doesn’t need a parent portal — why pay for one? You pick what your school actually needs, and the price reflects exactly that.',
  },
  {
    q: 'What is your hourly rate?',
    a: `₹${HOURLY_RATE}/hour for design + development. This is the team rate — covers UI design, frontend, CMS setup, content entry, and QA. There are no hidden charges; what you see in the calculator is what you pay.`,
  },
  {
    q: 'Why is photography a fixed cost?',
    a: `It’s an out-of-pocket cost we pay our photographer + travel — not our team time. Flat ₹${PHOTOGRAPHY_FIXED.toLocaleString('en-IN')} covers a half-day shoot at your campus.`,
  },
  {
    q: 'What if we want changes after launch?',
    a: 'Your monthly support tier includes maintenance hours. Bigger changes (new sections, new features) are billed at the same hourly rate — no surprises.',
  },
  {
    q: 'Do we own the website?',
    a: 'Yes. Content, photos, design, and codebase are yours from day one. If you ever leave, we hand over everything.',
  },
]

export default function SchoolsPageClient() {
  const [selected, setSelected] = useState<Set<string>>(
    () => new Set(GROUPS.flatMap((g) => g.items.filter((i) => i.required).map((i) => i.id)))
  )
  const [photography, setPhotography] = useState(false)
  const [supportTier, setSupportTier] = useState<string>('standard')

  const toggle = (id: string, required?: boolean) => {
    if (required) return
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const totals = useMemo(() => {
    const hours = GROUPS.flatMap((g) => g.items)
      .filter((i) => selected.has(i.id))
      .reduce((sum, i) => sum + i.hours, 0)
    const teamCost = hours * HOURLY_RATE
    const photoCost = photography ? PHOTOGRAPHY_FIXED : 0
    const setup = teamCost + photoCost
    const monthly = SUPPORT_TIERS.find((t) => t.id === supportTier)?.monthly ?? 0
    return { hours, teamCost, photoCost, setup, monthly }
  }, [selected, photography, supportTier])

  return (
    <PageTransition>
      <Hero />
      <Configurator
        selected={selected}
        toggle={toggle}
        photography={photography}
        setPhotography={setPhotography}
        supportTier={supportTier}
        setSupportTier={setSupportTier}
        totals={totals}
      />
      <FAQSection />
      <FinalCTA />
    </PageTransition>
  )
}

function Hero() {
  return (
    <section className="relative pt-32 pb-12 px-6 overflow-hidden">
      <div className="absolute top-20 right-8 hidden lg:block">
        <VijayaBow size={200} opacity={0.04} />
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          className="font-ui text-accent text-xs uppercase tracking-[4px] mb-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          Solutions / Education / Schools
        </motion.p>
        <motion.h1
          className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-warm-ivory mb-5"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          Build a website your <span className="text-accent">school actually needs</span>
        </motion.h1>
        <motion.p
          className="font-body text-muted text-lg max-w-xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Pick your pages and features. See the price live. No fixed packages,
          no inflated quotes.
        </motion.p>
      </div>
    </section>
  )
}

interface ConfiguratorProps {
  selected: Set<string>
  toggle: (id: string, required?: boolean) => void
  photography: boolean
  setPhotography: (b: boolean) => void
  supportTier: string
  setSupportTier: (id: string) => void
  totals: { hours: number; teamCost: number; photoCost: number; setup: number; monthly: number }
}

function Configurator({
  selected,
  toggle,
  photography,
  setPhotography,
  supportTier,
  setSupportTier,
  totals,
}: ConfiguratorProps) {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
        <div className="space-y-10">
          {GROUPS.map((group) => (
            <GroupBlock
              key={group.id}
              group={group}
              selected={selected}
              toggle={toggle}
            />
          ))}

          <div>
            <h3 className="font-heading text-xl font-bold text-warm-ivory mb-1">
              Photography
            </h3>
            <p className="font-body text-muted text-sm mb-4">
              Half-day shoot at your campus. Skip if you have your own photos.
            </p>
            <Toggle
              label="Photography day"
              hint={`Flat ₹${PHOTOGRAPHY_FIXED.toLocaleString('en-IN')} (out-of-pocket cost)`}
              checked={photography}
              onClick={() => setPhotography(!photography)}
              meta={`₹${PHOTOGRAPHY_FIXED.toLocaleString('en-IN')}`}
            />
          </div>

          <div>
            <h3 className="font-heading text-xl font-bold text-warm-ivory mb-1">
              Monthly Support
            </h3>
            <p className="font-body text-muted text-sm mb-4">
              Hosting + ongoing updates. Pick one.
            </p>
            <div className="space-y-3">
              {SUPPORT_TIERS.map((tier) => (
                <SupportRow
                  key={tier.id}
                  tier={tier}
                  active={supportTier === tier.id}
                  onClick={() => setSupportTier(tier.id)}
                />
              ))}
            </div>
          </div>
        </div>

        <SummaryCard totals={totals} />
      </div>
    </section>
  )
}

function GroupBlock({
  group,
  selected,
  toggle,
}: {
  group: Group
  selected: Set<string>
  toggle: (id: string, required?: boolean) => void
}) {
  return (
    <div>
      <h3 className="font-heading text-xl font-bold text-warm-ivory mb-1">
        {group.title}
      </h3>
      <p className="font-body text-muted text-sm mb-4">{group.subtitle}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {group.items.map((item) => (
          <Toggle
            key={item.id}
            label={item.label}
            hint={item.hint}
            checked={selected.has(item.id)}
            onClick={() => toggle(item.id, item.required)}
            meta={`${item.hours}h`}
            disabled={item.required}
          />
        ))}
      </div>
    </div>
  )
}

function Toggle({
  label,
  hint,
  checked,
  onClick,
  meta,
  disabled,
}: {
  label: string
  hint?: string
  checked: boolean
  onClick: () => void
  meta: string
  disabled?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`group flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200 ${
        checked
          ? 'bg-accent/10 border-accent/50'
          : 'bg-dark-card/40 border-subtle/30 hover:border-accent/30'
      } ${disabled ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'}`}
      aria-pressed={checked}
    >
      <span
        className={`flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-colors ${
          checked
            ? 'bg-accent border-accent'
            : 'bg-transparent border-subtle/50 group-hover:border-accent/50'
        }`}
      >
        {checked && <Check size={12} strokeWidth={3} className="text-primary" />}
      </span>
      <span className="flex-1 min-w-0">
        <span className="font-heading text-sm font-semibold text-warm-ivory block truncate">
          {label}
          {disabled && (
            <span className="ml-2 font-ui text-[10px] uppercase tracking-wider text-accent/80">
              required
            </span>
          )}
        </span>
        {hint && (
          <span className="font-body text-xs text-muted block mt-0.5 truncate">
            {hint}
          </span>
        )}
      </span>
      <span className="font-ui text-xs text-accent font-semibold flex-shrink-0">
        {meta}
      </span>
    </button>
  )
}

function SupportRow({
  tier,
  active,
  onClick,
}: {
  tier: SupportTier
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
        active
          ? 'bg-accent/10 border-accent/50'
          : 'bg-dark-card/40 border-subtle/30 hover:border-accent/30'
      }`}
      aria-pressed={active}
    >
      <span
        className={`flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
          active ? 'border-accent' : 'border-subtle/50'
        }`}
      >
        {active && <span className="w-2.5 h-2.5 rounded-full bg-accent" />}
      </span>
      <span className="flex-1 min-w-0">
        <span className="font-heading text-sm font-semibold text-warm-ivory block">
          {tier.name}
        </span>
        <span className="font-body text-xs text-muted block mt-0.5">
          {tier.detail}
        </span>
      </span>
      <span className="font-ui text-sm text-accent font-semibold flex-shrink-0">
        ₹{tier.monthly.toLocaleString('en-IN')}/mo
      </span>
    </button>
  )
}

function SummaryCard({
  totals,
}: {
  totals: { hours: number; teamCost: number; photoCost: number; setup: number; monthly: number }
}) {
  return (
    <div className="lg:sticky lg:top-24">
      <div className="bg-dark-card border border-accent/30 rounded-2xl p-6 shadow-[0_0_40px_rgba(201,168,76,0.08)]">
        <p className="font-ui text-accent text-[10px] uppercase tracking-[3px] mb-4">
          Your Quote
        </p>

        <div className="flex items-center gap-2 mb-1 text-warm-ivory/70 font-body text-sm">
          <Clock size={14} className="text-accent" />
          {totals.hours} hours × ₹{HOURLY_RATE}/hr
        </div>
        <p className="font-heading text-3xl font-bold text-warm-ivory mb-2">
          ₹{totals.setup.toLocaleString('en-IN')}
        </p>
        <p className="font-body text-xs text-muted mb-6">one-time setup</p>

        <div className="border-t border-subtle/30 pt-4 mb-6 space-y-2 text-sm">
          <Row label="Design + dev" value={`₹${totals.teamCost.toLocaleString('en-IN')}`} />
          {totals.photoCost > 0 && (
            <Row label="Photography" value={`₹${totals.photoCost.toLocaleString('en-IN')}`} />
          )}
          <Row
            label="Monthly support"
            value={`₹${totals.monthly.toLocaleString('en-IN')}/mo`}
            accent
          />
        </div>

        <Button variant="primary" href="/contact" size="md" className="w-full justify-center">
          Get This Quote
        </Button>
        <a
          href={COMPANY.socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 w-full inline-flex items-center justify-center gap-2 px-4 py-3 border border-subtle/40 hover:border-accent/40 text-warm-ivory bg-transparent font-heading font-semibold text-sm rounded-lg transition-colors duration-300"
        >
          <MessageCircle size={14} strokeWidth={2} />
          WhatsApp Us
        </a>

        <p className="mt-4 font-body text-[11px] text-muted/80 leading-relaxed">
          Estimate only. We&apos;ll confirm scope and timeline on a call.
        </p>
      </div>
    </div>
  )
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-body text-warm-ivory/65">{label}</span>
      <span className={`font-ui font-semibold ${accent ? 'text-accent' : 'text-warm-ivory'}`}>
        {value}
      </span>
    </div>
  )
}

function FAQSection() {
  return (
    <section className="py-20 px-6 bg-dark-card/40">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-warm-ivory text-center mb-2">
          Quick questions
        </h2>
        <p className="font-body text-muted text-center mb-12">
          Anything else? <a href={COMPANY.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80">WhatsApp us</a>.
        </p>
        <div className="space-y-3">
          {FAQ.map((item, i) => (
            <FAQItem key={i} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-subtle/20 rounded-xl bg-dark-card/60 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left hover:bg-dark-card/80 transition-colors"
        aria-expanded={open}
      >
        <span className="font-heading text-base font-semibold text-warm-ivory">
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-accent"
        >
          <ChevronDown size={18} strokeWidth={2} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 font-body text-warm-ivory/75 text-sm leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FinalCTA() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-warm-ivory mb-4">
        Like the quote? <span className="text-accent">Let&apos;s build it.</span>
      </h2>
      <p className="font-body text-muted mb-8 max-w-md mx-auto">
        30-min call to confirm scope, timeline, and answer your questions.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button variant="primary" href="/contact" size="lg">
          Book a Free Call
        </Button>
        <a
          href={COMPANY.socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 text-lg border border-accent text-warm-ivory bg-transparent hover:bg-accent/10 font-heading font-semibold rounded-lg transition-colors duration-300"
        >
          <MessageCircle size={18} strokeWidth={2} />
          WhatsApp Us
        </a>
      </div>
    </section>
  )
}
