'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Phone, PhoneOff, RotateCcw } from 'lucide-react'

type Turn = { role: 'agent' | 'caller'; text: string }

const script: Turn[] = [
  { role: 'agent', text: "Hello! Thanks for calling Skyline Properties. How can I help you today?" },
  { role: 'caller', text: "Hi, I'm looking for a 2-bedroom apartment to rent in the marina area." },
  { role: 'agent', text: "Great choice. We have a few 2-bedroom units in the marina. What's your monthly budget?" },
  { role: 'caller', text: "Around 8,000 to 10,000 a month." },
  { role: 'agent', text: "Perfect, that fits two of our listings. Are you looking to move in this month or next?" },
  { role: 'caller', text: "Ideally next month." },
  { role: 'agent', text: "Got it. I'll have an agent send you the two matching units and book a viewing. What's the best number to reach you?" },
  { role: 'caller', text: "You can reach me on this number." },
  { role: 'agent', text: "Done — you're qualified and scheduled. An agent will confirm your viewing shortly. Thank you!" },
]

export function VoiceDemo() {
  const [running, setRunning] = useState(false)
  const [turns, setTurns] = useState<Turn[]>([])
  const [step, setStep] = useState(0)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!running) return
    if (step >= script.length) {
      setRunning(false)
      return
    }
    timer.current = setTimeout(() => {
      setTurns((t) => [...t, script[step]])
      setStep((s) => s + 1)
    }, step === 0 ? 400 : 1400)
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [running, step])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [turns])

  const start = () => {
    setTurns([])
    setStep(0)
    setRunning(true)
  }

  const reset = () => {
    if (timer.current) clearTimeout(timer.current)
    setRunning(false)
    setTurns([])
    setStep(0)
  }

  return (
    <div className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="relative grid size-11 place-items-center rounded-xl border border-border bg-secondary text-primary">
            <Phone className="size-5" />
            {running && (
              <span className="absolute -right-0.5 -top-0.5 size-2.5 animate-pulse rounded-full bg-primary" />
            )}
          </span>
          <div>
            <p className="text-sm font-semibold">Skyline Properties · AI Voice Agent</p>
            <p className="text-xs text-muted-foreground">
              {running ? 'Live call in progress…' : 'Simulated conversation demo'}
            </p>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="mt-6 h-72 space-y-3 overflow-y-auto rounded-2xl border border-border bg-background/40 p-4"
      >
        {turns.length === 0 && !running && (
          <p className="grid h-full place-items-center text-center text-sm text-muted-foreground">
            Press &ldquo;Start Demo Call&rdquo; to play a sample real-estate conversation.
          </p>
        )}
        <AnimatePresence initial={false}>
          {turns.map((turn, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={turn.role === 'agent' ? 'flex justify-start' : 'flex justify-end'}
            >
              <span
                className={
                  turn.role === 'agent'
                    ? 'max-w-[80%] rounded-2xl rounded-tl-sm border border-border bg-card px-3.5 py-2.5 text-sm text-foreground'
                    : 'max-w-[80%] rounded-2xl rounded-tr-sm bg-primary/15 px-3.5 py-2.5 text-sm text-foreground'
                }
              >
                <span className="mb-0.5 block text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                  {turn.role === 'agent' ? 'AI Agent' : 'Caller'}
                </span>
                {turn.text}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
        {running && step < script.length && (
          <div className="flex gap-1 px-1 pt-1">
            {[0, 1, 2].map((d) => (
              <motion.span
                key={d}
                className="size-1.5 rounded-full bg-muted-foreground"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {!running ? (
          <button
            type="button"
            onClick={start}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Phone className="size-4" />
            {turns.length > 0 ? 'Replay Demo Call' : 'Start Demo Call'}
          </button>
        ) : (
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-card"
          >
            <PhoneOff className="size-4" />
            End Call
          </button>
        )}
        {turns.length > 0 && !running && (
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <RotateCcw className="size-4" />
            Reset
          </button>
        )}
      </div>
    </div>
  )
}
