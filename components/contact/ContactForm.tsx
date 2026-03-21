'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/ui/Button'
import { fadeInUp } from '@/lib/animations'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const subjects = [
  'Project Inquiry',
  'General',
  'Careers',
  'Partnership',
] as const

const shakeAnimation = {
  x: [0, -8, 8, -6, 6, -3, 3, 0],
  transition: { duration: 0.4 },
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [focused, setFocused] = useState<Record<string, boolean>>({})
  const [submitted, setSubmitted] = useState(false)
  const [shakeField, setShakeField] = useState<string | null>(null)

  const handleFocus = (field: string) => {
    setFocused((prev) => ({ ...prev, [field]: true }))
  }

  const handleBlur = (field: string) => {
    if (!formData[field as keyof FormData]) {
      setFocused((prev) => ({ ...prev, [field]: false }))
    }
  }

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)

    // Trigger shake on first error field
    const firstError = Object.keys(newErrors)[0]
    if (firstError) {
      setShakeField(firstError)
      setTimeout(() => setShakeField(null), 500)
    }

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
    }
  }

  const isLabelRaised = (field: string) =>
    focused[field] || formData[field as keyof FormData]

  const inputClasses = (field: keyof FormErrors) =>
    `w-full bg-dark-card border rounded-lg p-3 pt-5 text-warm-ivory font-body transition-all duration-300 outline-none ${
      errors[field]
        ? 'border-red-500/70 focus:border-red-500 focus:shadow-[0_0_12px_rgba(239,68,68,0.15)]'
        : 'border-subtle focus:border-accent focus:shadow-[0_0_12px_rgba(201,168,76,0.15)]'
    }`

  const labelClasses = (field: string) =>
    `absolute left-3 transition-all duration-200 pointer-events-none font-body ${
      isLabelRaised(field)
        ? 'top-1.5 text-xs text-accent'
        : 'top-3.5 text-sm text-muted'
    }`

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        {/* Animated checkmark */}
        <div className="mb-6">
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            className="text-accent"
          >
            {/* Circle */}
            <motion.circle
              cx="36"
              cy="36"
              r="32"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
            {/* Checkmark */}
            <motion.path
              d="M22 36l9 9 19-19"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5, ease: 'easeOut' }}
            />
          </svg>
        </div>

        <h3 className="font-heading text-2xl font-bold text-warm-ivory mb-2">
          Message Sent
        </h3>
        <p className="font-body text-muted max-w-sm">
          Thank you for reaching out. We&apos;ll get back to you soon.
        </p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => {
            setSubmitted(false)
            setFormData({ name: '', email: '', subject: '', message: '' })
            setFocused({})
          }}
          className="mt-6 font-body text-sm text-accent hover:text-accent/80 transition-colors underline underline-offset-4"
        >
          Send another message
        </motion.button>
      </motion.div>
    )
  }

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="space-y-6"
      noValidate
    >
      {/* Name */}
      <div>
        <motion.div
          className="relative"
          animate={shakeField === 'name' ? shakeAnimation : {}}
        >
          <label className={labelClasses('name')}>Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            onFocus={() => handleFocus('name')}
            onBlur={() => handleBlur('name')}
            className={inputClasses('name')}
          />
        </motion.div>
        <AnimatePresence>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="text-red-400 text-xs font-body mt-1.5 ml-1"
            >
              {errors.name}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Email */}
      <div>
        <motion.div
          className="relative"
          animate={shakeField === 'email' ? shakeAnimation : {}}
        >
          <label className={labelClasses('email')}>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onFocus={() => handleFocus('email')}
            onBlur={() => handleBlur('email')}
            className={inputClasses('email')}
          />
        </motion.div>
        <AnimatePresence>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="text-red-400 text-xs font-body mt-1.5 ml-1"
            >
              {errors.email}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Subject dropdown */}
      <div>
        <motion.div
          className="relative"
          animate={shakeField === 'subject' ? shakeAnimation : {}}
        >
          <label className={labelClasses('subject')}>Subject</label>
          <select
            value={formData.subject}
            onChange={(e) => {
              handleChange('subject', e.target.value)
              if (e.target.value) {
                setFocused((prev) => ({ ...prev, subject: true }))
              }
            }}
            onFocus={() => handleFocus('subject')}
            onBlur={() => handleBlur('subject')}
            className={`${inputClasses('subject')} appearance-none cursor-pointer`}
          >
            <option value="" className="bg-dark-card text-muted" />
            {subjects.map((s) => (
              <option key={s} value={s} className="bg-dark-card text-warm-ivory">
                {s}
              </option>
            ))}
          </select>
          {/* Custom dropdown arrow */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
          >
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
        <AnimatePresence>
          {errors.subject && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="text-red-400 text-xs font-body mt-1.5 ml-1"
            >
              {errors.subject}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Message textarea */}
      <div>
        <motion.div
          className="relative"
          animate={shakeField === 'message' ? shakeAnimation : {}}
        >
          <label className={labelClasses('message')}>Message</label>
          <textarea
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            onFocus={() => handleFocus('message')}
            onBlur={() => handleBlur('message')}
            rows={5}
            className={`${inputClasses('message')} resize-none`}
          />
        </motion.div>
        <AnimatePresence>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="text-red-400 text-xs font-body mt-1.5 ml-1"
            >
              {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Submit button */}
      <Button
        type="submit"
        variant="primary"
        className="w-full justify-center"
      >
        Send Message
      </Button>
    </motion.form>
  )
}
