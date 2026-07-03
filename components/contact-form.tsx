'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Send, CheckCircle2 } from 'lucide-react'
import { site } from '@/lib/site'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [focusFields, setFocusFields] = useState<Record<string, boolean>>({})

  const isFloating = (fieldName: keyof typeof form) => {
    return focusFields[fieldName] || form[fieldName].length > 0
  }

  const handleFocus = (field: string) => {
    setFocusFields((prev) => ({ ...prev, [field]: true }))
  }

  const handleBlur = (field: string) => {
    setFocusFields((prev) => ({ ...prev, [field]: false }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(form),
      })
      if (response.ok) {
        setSent(true)
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSent(false), 5000)
      }
    } catch (err) {
      console.error('Submission error:', err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Name input */}
        <div className="relative pt-4">
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            onFocus={() => handleFocus('name')}
            onBlur={() => handleBlur('name')}
            className="w-full bg-transparent border-b border-border py-2 text-sm text-foreground outline-none transition-colors focus:border-accent-1"
          />
          <label
            htmlFor="name"
            className={`absolute left-0 transition-all duration-200 pointer-events-none text-sm ${
              isFloating('name')
                ? 'top-0 text-[10px] text-accent-1 font-bold uppercase tracking-wider'
                : 'top-5 text-muted-foreground'
            }`}
          >
            Name
          </label>
          <div
            className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent-1 via-accent-2 to-accent-1 bg-[length:200%_auto] transition-all duration-500 animate-shimmer ${
              focusFields['name'] ? 'w-full' : 'w-0'
            }`}
          />
        </div>

        {/* Email input */}
        <div className="relative pt-4">
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            onFocus={() => handleFocus('email')}
            onBlur={() => handleBlur('email')}
            className="w-full bg-transparent border-b border-border py-2 text-sm text-foreground outline-none transition-colors focus:border-accent-1"
          />
          <label
            htmlFor="email"
            className={`absolute left-0 transition-all duration-200 pointer-events-none text-sm ${
              isFloating('email')
                ? 'top-0 text-[10px] text-accent-1 font-bold uppercase tracking-wider'
                : 'top-5 text-muted-foreground'
            }`}
          >
            Email
          </label>
          <div
            className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent-1 via-accent-2 to-accent-1 bg-[length:200%_auto] transition-all duration-500 animate-shimmer ${
              focusFields['email'] ? 'w-full' : 'w-0'
            }`}
          />
        </div>
      </div>

      {/* Subject input */}
      <div className="relative pt-4">
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          onFocus={() => handleFocus('subject')}
          onBlur={() => handleBlur('subject')}
          className="w-full bg-transparent border-b border-border py-2 text-sm text-foreground outline-none transition-colors focus:border-accent-1"
        />
        <label
          htmlFor="subject"
          className={`absolute left-0 transition-all duration-200 pointer-events-none text-sm ${
            isFloating('subject')
              ? 'top-0 text-[10px] text-accent-1 font-bold uppercase tracking-wider'
              : 'top-5 text-muted-foreground'
          }`}
        >
          Subject
        </label>
        <div
          className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent-1 via-accent-2 to-accent-1 bg-[length:200%_auto] transition-all duration-500 animate-shimmer ${
            focusFields['subject'] ? 'w-full' : 'w-0'
          }`}
        />
      </div>

      {/* Message textarea */}
      <div className="relative pt-4">
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          onFocus={() => handleFocus('message')}
          onBlur={() => handleBlur('message')}
          className="w-full bg-transparent border-b border-border py-2 text-sm text-foreground outline-none transition-colors focus:border-accent-1 resize-none"
        />
        <label
          htmlFor="message"
          className={`absolute left-0 transition-all duration-200 pointer-events-none text-sm ${
            isFloating('message')
              ? 'top-0 text-[10px] text-accent-1 font-bold uppercase tracking-wider'
              : 'top-5 text-muted-foreground'
          }`}
        >
          Message
          </label>
        <div
          className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent-1 via-accent-2 to-accent-1 bg-[length:200%_auto] transition-all duration-500 animate-shimmer ${
            focusFields['message'] ? 'w-full' : 'w-0'
          }`}
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        className="inline-flex items-center gap-2 rounded-xl bg-accent-1 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-accent-1/25 transition-all hover:bg-accent-1/90 btn-glow cursor-pointer"
      >
        <Send className="size-4" />
        Send Message
      </motion.button>

      <AnimatePresence>
        {sent && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="flex items-center gap-2 text-sm text-accent-3 font-semibold mt-2"
          >
            <CheckCircle2 className="size-4" />
            Message sent successfully!
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  )
}
