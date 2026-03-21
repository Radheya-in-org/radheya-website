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

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-14">
        {TEAM.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            className="flex flex-col items-center text-center p-5 rounded-xl border border-subtle/10 bg-dark-card/30 hover:border-accent/20 transition-colors"
          >
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-secondary border-2 border-subtle/30 mb-4 flex items-center justify-center overflow-hidden">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="font-heading text-lg font-bold text-accent/60">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </span>
              )}
            </div>

            <h4 className="font-heading text-sm font-semibold text-warm-ivory leading-tight">
              {member.name}
            </h4>
            <p className="font-body text-accent text-xs mt-1">
              {member.role}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
