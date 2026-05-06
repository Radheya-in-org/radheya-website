'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { TEAM } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Team() {
  return (
    <div>
      <SectionHeading title="Meet the Team" subtitle="The people behind Radheya" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-4xl mx-auto mt-14">
        {TEAM.map((member, i) => (
          <TeamCard key={member.name} member={member} index={i} />
        ))}
      </div>
    </div>
  )
}

function TeamCard({
  member,
  index,
}: {
  member: (typeof TEAM)[number]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.05 + index * 0.07 }}
      className="group relative flex flex-col items-center text-center p-6 rounded-xl
                 border border-subtle/15 bg-dark-card/40
                 hover:border-accent/25 hover:bg-dark-card/70
                 transition-all duration-300"
    >
      {/* Avatar */}
      <div className="relative w-[72px] h-[72px] rounded-full bg-secondary/80 border-2 border-subtle/20
                      group-hover:border-accent/30 mb-4 flex items-center justify-center overflow-hidden
                      transition-all duration-300">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            width={72}
            height={72}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="font-heading text-base font-bold text-accent/50 group-hover:text-accent/70 transition-colors">
            {member.name.split(' ').map((n) => n[0]).join('')}
          </span>
        )}
      </div>

      {/* Name */}
      <h4 className="font-heading text-sm font-semibold text-warm-ivory leading-tight">
        {member.name}
      </h4>

      {/* Role */}
      <p className="font-ui text-[11px] uppercase tracking-[2px] text-accent mt-1.5">
        {member.role}
      </p>

      {/* Tagline */}
      <p className="font-body text-xs text-muted mt-2 leading-relaxed italic">
        {member.tagline}
      </p>
    </motion.div>
  )
}
