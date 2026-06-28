

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Send, CheckCircle2 } from 'lucide-react'
import { site } from '@/lib/site'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    // We are no longer using mailto client.
    // The form will be handled natively via action="https://formsubmit.co/..."
  }

  const field =
    'w-full rounded-lg border border-border bg-card/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-ring'

  return (
    <form action={`https://formsubmit.co/${site.email}`} method="POST" className="space-y-4">
      {/* Disable captcha for a smoother experience */}
      <input type="hidden" name="_captcha" value="false" />
      {/* Optional: you can redirect back to your site after submission by uncommenting the line below and adding your production URL */}
      {/* <input type="hidden" name="_next" value="https://hamsidhi.me/contact" /> */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your Name"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Your Email"
            className={field}
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          placeholder="How can we work together?"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell me about your project or opportunity..."
          className={`${field} resize-none`}
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
      >
        <Send className="size-4" />
        Send Message
      </motion.button>

      <AnimatePresence>
        {sent && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-primary"
          >
            <CheckCircle2 className="size-4" />
            Message sent successfully!
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  )
}
