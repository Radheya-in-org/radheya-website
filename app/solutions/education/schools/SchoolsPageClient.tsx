'use client'

import { motion } from 'framer-motion'
import {
  Users,
  Building2,
  BookOpen,
  Trophy,
  MessageCircle,
  Compass,
  Eye,
  Clock,
  TrendingUp,
  Moon,
  GraduationCap,
  Search,
} from 'lucide-react'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import PageTransition from '@/components/layout/PageTransition'
import VijayaBow from '@/components/karna/VijayaBow'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { COMPANY } from '@/lib/constants'

interface Theme {
  icon: typeof Users
  title: string
  question: string
  items: string[]
  why: string
  span?: boolean
}

const THEMES: Theme[] = [
  {
    icon: Users,
    title: 'The People',
    question: 'Who will teach my child?',
    items: [
      'Teachers — face, name, qualification, what they teach, one personal line',
      'Principal’s and founder’s message',
      'Alumni — where they are now, what they’re doing, where they studied',
    ],
    why: 'Parents trust schools by knowing the people, not the brochure.',
  },
  {
    icon: Building2,
    title: 'The Place',
    question: 'Where will my child spend 8 hours a day?',
    items: [
      'Real classroom photos (not stock)',
      'Library, science labs, computer labs',
      'Sports ground, indoor stadium, dining hall',
      'Cultural rooms, art studios, music spaces',
      'Video tour of the entire campus',
    ],
    why: 'Distance is no longer an excuse. Parents can experience your school from their phone.',
  },
  {
    icon: BookOpen,
    title: 'The Learning',
    question: 'How will my child be taught?',
    items: [
      'A day in school — the timeline of a typical day',
      'How we teach — your methodology and approach',
      'Vision, mission, and founding principles',
      'School history — year by year',
    ],
    why: 'Parents care about how their kid will spend their hours, not just what is taught.',
  },
  {
    icon: Trophy,
    title: 'The Proof',
    question: 'Why is this school different?',
    items: [
      'Toppers and academic results',
      'Sports achievements',
      'Events and cultural programs',
      'Public recognitions and awards',
      'News and announcements',
    ],
    why: 'Your strongest sales points should be front and center, not buried.',
  },
  {
    icon: MessageCircle,
    title: 'The Action',
    question: 'How do I enroll?',
    items: [
      'Admission inquiry form that routes to WhatsApp + email instantly',
      'Multi-campus support with maps and directions',
      'Notices and academic calendar for current parents',
      'Direct contact for principal, admissions, and transport',
    ],
    why: 'Every section funnels parents here. This is where decisions become enrollments.',
    span: true,
  },
]

interface Reason {
  icon: typeof Eye
  title: string
  body: string
}

const REASONS: Reason[] = [
  {
    icon: Search,
    title: 'The decision happens before the visit',
    body: 'Parents research 4 to 5 schools on Google before calling any. If your school is not represented well online, you are not in the consideration set.',
  },
  {
    icon: Eye,
    title: 'Distance is collapsed',
    body: 'A working parent does not have time to physically tour 6 schools. A virtual walkthrough lets them shortlist yours from their phone.',
  },
  {
    icon: Compass,
    title: 'Trust is built through transparency',
    body: 'Showing real teachers, real classrooms, and real alumni builds confidence that template websites cannot match.',
  },
  {
    icon: TrendingUp,
    title: 'Your competitors are catching up',
    body: 'Schools that did not invest in digital from 2020 to 2024 are losing 15 to 25 percent of inquiries to schools that did. The gap widens every year.',
  },
  {
    icon: Moon,
    title: 'It works while you sleep',
    body: 'Parents research at 11pm. Decide on a Sunday morning. Your office staff is not there — your website is.',
  },
  {
    icon: GraduationCap,
    title: 'Alumni become recruiters',
    body: 'When parents see your alumni at IIT, NEET colleges, the armed forces, or studying abroad — that is worth more than any brochure claim.',
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Discover',
    body: 'We listen to your principal, correspondent, and admissions team to understand your school’s story.',
  },
  {
    step: '02',
    title: 'Plan',
    body: 'We map your school’s identity, your audience, and your goals to a clear site structure.',
  },
  {
    step: '03',
    title: 'Design',
    body: 'A custom design that reflects your school — not a template every other school is using.',
  },
  {
    step: '04',
    title: 'Build',
    body: 'Development, content entry, CMS setup, professional email, SSL, and analytics — all wired up.',
  },
  {
    step: '05',
    title: 'Launch',
    body: 'Domain pointed, backups configured, Google Search Console submitted, your staff trained.',
  },
  {
    step: '06',
    title: 'Support',
    body: 'We host, monitor, back up, and answer your WhatsApp. The same team that built it is the team behind it.',
  },
]

const INCLUDED = [
  'Domain registration',
  'Hosting (India region)',
  'SSL certificate',
  'Daily backups',
  'Uptime monitoring',
  'Professional email',
  'Self-service CMS',
  'Staff training',
  'SEO + Google Search Console',
  'Analytics',
  'Ongoing support',
  'Annual renewals managed',
]

export default function SchoolsPageClient() {
  return (
    <PageTransition>
      <Hero />
      <BigIdea />
      <Themes />
      <Included />
      <WhyNow />
      <HowWeWork />
      <SchoolsPlaceholder />
      <FinalCTA />
    </PageTransition>
  )
}

function Hero() {
  return (
    <section className="relative pt-32 pb-16 px-6 overflow-hidden">
      <div className="absolute top-20 right-8 hidden lg:block">
        <VijayaBow size={220} opacity={0.04} />
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
          className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-warm-ivory mb-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          The website your <span className="text-accent">school deserves</span>
        </motion.h1>
        <motion.p
          className="font-body text-muted text-lg max-w-xl mx-auto mb-10"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Take your physical school fully online — every teacher, classroom,
          achievement, and alumni story, where parents can actually find them.
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <Button variant="primary" href="/contact" size="lg">
            Talk to Us
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
        </motion.div>
      </div>
    </section>
  )
}

function BigIdea() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="font-heading text-2xl md:text-3xl font-bold text-warm-ivory mb-6 leading-tight"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          Your school is rich in stories,{' '}
          <span className="text-accent">people, and proof</span>.
          <br />
          Your website probably isn&apos;t.
        </motion.h2>
        <motion.p
          className="font-body text-warm-ivory/70 text-lg leading-relaxed"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.1 }}
        >
          Every classroom, every teacher, every topper, every alumni who made
          it — they are reasons a parent should choose your school. They should
          all live on your website. We build sites that make the physical
          school fully visible online, the way today&apos;s parents expect.
        </motion.p>
      </div>
    </section>
  )
}

function Themes() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="What we put online"
          subtitle="Five sections, one complete picture of your school. Each answers a question every parent silently asks."
        />
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {THEMES.map((theme) => (
            <motion.div
              key={theme.title}
              variants={staggerItem}
              className={theme.span ? 'md:col-span-2' : ''}
            >
              <ThemeCard theme={theme} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ThemeCard({ theme }: { theme: Theme }) {
  const Icon = theme.icon
  return (
    <div className="h-full p-8 rounded-2xl border border-subtle/30 bg-dark-card/40 hover:border-accent/30 transition-colors duration-300">
      <div className="flex items-start gap-4 mb-6">
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-accent/10 blur-lg scale-150 opacity-60" />
          <div className="relative w-14 h-14 rounded-full border border-accent/30 flex items-center justify-center bg-secondary/40">
            <Icon className="w-6 h-6 text-accent" strokeWidth={1.4} />
          </div>
        </div>
        <div className="flex-1 pt-1">
          <h3 className="font-heading text-xl md:text-2xl font-bold text-warm-ivory">
            {theme.title}
          </h3>
          <p className="font-body text-accent text-sm italic mt-1">
            &ldquo;{theme.question}&rdquo;
          </p>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {theme.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent/70 ring-2 ring-accent/20" />
            <span className="font-body text-warm-ivory/80 text-sm leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>

      <p className="font-body text-warm-ivory/60 text-sm italic border-t border-subtle/20 pt-4">
        {theme.why}
      </p>
    </div>
  )
}

function Included() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            className="font-heading text-3xl md:text-4xl font-bold text-warm-ivory mb-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            It&apos;s not just a website.{' '}
            <span className="text-accent">It&apos;s everything around it.</span>
          </motion.h2>
          <motion.p
            className="font-body text-muted leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1 }}
          >
            Most schools don&apos;t realize how much sits beneath a working
            website. We handle all of it, so you never have to think about it.
          </motion.p>
        </div>

        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {INCLUDED.map((item) => (
            <motion.div
              key={item}
              variants={staggerItem}
              className="px-4 py-3 rounded-lg border border-subtle/30 bg-dark-card/30 text-center"
            >
              <span className="font-body text-warm-ivory/80 text-sm">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function WhyNow() {
  return (
    <section className="py-24 px-6 bg-dark-card/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Why your school needs this in 2026"
          subtitle="Six reasons that explain why a real website is no longer optional."
        />
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {REASONS.map((reason) => (
            <motion.div key={reason.title} variants={staggerItem}>
              <ReasonCard reason={reason} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ReasonCard({ reason }: { reason: Reason }) {
  const Icon = reason.icon
  return (
    <div className="h-full p-6 rounded-xl border border-subtle/30 bg-dark-card/60">
      <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center bg-secondary/40 mb-4">
        <Icon className="w-5 h-5 text-accent" strokeWidth={1.4} />
      </div>
      <h3 className="font-heading text-lg font-bold text-warm-ivory mb-2">
        {reason.title}
      </h3>
      <p className="font-body text-warm-ivory/70 text-sm leading-relaxed">
        {reason.body}
      </p>
    </div>
  )
}

function HowWeWork() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="How we work"
          subtitle="A clear six-step path from first conversation to a website you can be proud of."
        />
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {PROCESS.map((step) => (
            <motion.div
              key={step.step}
              variants={staggerItem}
              className="p-6 rounded-xl border border-subtle/30 bg-dark-card/40"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading text-3xl font-bold text-accent/30">
                  {step.step}
                </span>
                <Clock className="w-4 h-4 text-accent/40" strokeWidth={1.4} />
              </div>
              <h4 className="font-heading text-lg font-bold text-warm-ivory mb-2">
                {step.title}
              </h4>
              <p className="font-body text-warm-ivory/70 text-sm leading-relaxed">
                {step.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function SchoolsPlaceholder() {
  return (
    <section className="py-24 px-6 bg-dark-card/40">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          className="font-ui text-accent text-xs uppercase tracking-[4px] mb-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Schools we work with
        </motion.p>
        <motion.h2
          className="font-heading text-2xl md:text-3xl font-bold text-warm-ivory mb-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Coming soon — our first cohort of schools.
        </motion.h2>
        <motion.p
          className="font-body text-muted max-w-xl mx-auto mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          We&apos;re currently in conversations with schools across Telangana to
          launch the first cohort. Your school could be one of them.
        </motion.p>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="aspect-square rounded-2xl border border-dashed border-subtle/40 bg-dark-card/30 flex items-center justify-center relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent/5 to-transparent"
                animate={{ translateX: ['100%', '-100%'] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                  repeatDelay: 1.5 + i * 0.3,
                }}
              />
              <span className="font-ui text-xs uppercase tracking-wider text-muted/60">
                Soon
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-warm-ivory mb-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Let&apos;s talk about <span className="text-accent">your school</span>
        </motion.h2>
        <motion.p
          className="font-body text-muted text-lg mb-10 max-w-xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          A 30-minute conversation. We&apos;ll understand your school, what makes
          it different, and what your website needs to do for you.
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
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
        </motion.div>
      </div>
    </section>
  )
}
