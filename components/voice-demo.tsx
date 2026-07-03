'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Phone, PhoneOff, RotateCcw } from 'lucide-react'
import { useTheme } from 'next-themes'

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
  const { theme, resolvedTheme } = useTheme()

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const sourceRef = useRef<OscillatorNode | null>(null)
  const animationFrameRef = useRef<number | null>(null)

  const currentTheme = theme === 'system' ? resolvedTheme : theme

  // Cache step in ref to prevent rebuilding the AudioContext loop on every step change (eliminates lag/stutter)
  const stepRef = useRef(step)
  useEffect(() => {
    stepRef.current = step
  }, [step])

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

  useEffect(() => {
    if (running) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext
      if (!AudioContextClass) return

      const ctx = new AudioContextClass()
      const analyser = ctx.createAnalyser()
      analyser.fftSize = 256
      
      const gain = ctx.createGain()
      gain.gain.value = 0.0001 // silent oscillator provides real frequency hum data without speaker noise

      const osc = ctx.createOscillator()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(300, ctx.currentTime)
      
      osc.connect(analyser)
      analyser.connect(gain)
      gain.connect(ctx.destination)
      
      osc.start()

      audioContextRef.current = ctx
      analyserRef.current = analyser
      sourceRef.current = osc

      const canvas = canvasRef.current
      if (canvas) {
        const drawContext = canvas.getContext('2d')
        const bufferLength = analyser.frequencyBinCount
        const dataArray = new Uint8Array(bufferLength)

        const draw = () => {
          if (!analyserRef.current) return
          animationFrameRef.current = requestAnimationFrame(draw)

          analyserRef.current.getByteTimeDomainData(dataArray)

          if (drawContext) {
            drawContext.fillStyle = 'rgba(0, 0, 0, 0)'
            drawContext.clearRect(0, 0, canvas.width, canvas.height)

            drawContext.lineWidth = 2
            drawContext.strokeStyle = currentTheme === 'beige' ? '#c97b5a' : '#3B82F6'
            drawContext.beginPath()

            const sliceWidth = canvas.width / bufferLength
            let x = 0

            for (let i = 0; i < bufferLength; i++) {
              let v = dataArray[i] / 128.0
              // Read stepRef.current instead of the step state to prevent AudioContext rebuilds
              if (stepRef.current % 2 === 0) {
                v += Math.sin(i * 0.15 + Date.now() * 0.01) * 0.25
              } else {
                v += Math.sin(i * 0.25 + Date.now() * 0.02) * 0.15
              }
              const y = (v * canvas.height) / 2

              if (i === 0) {
                drawContext.moveTo(x, y)
              } else {
                drawContext.lineTo(x, y)
              }

              x += sliceWidth
            }

            drawContext.lineTo(canvas.width, canvas.height / 2)
            drawContext.stroke()
          }
        }
        draw()
      }
    } else {
      if (sourceRef.current) {
        try { sourceRef.current.stop() } catch(_) {}
      }
      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      audioContextRef.current = null
      analyserRef.current = null
      sourceRef.current = null
    }

    return () => {
      if (sourceRef.current) {
        try { sourceRef.current.stop() } catch(_) {}
      }
      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [running, currentTheme]) // Removed step state dependency to avoid CPU/Lag spikes

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
          <span className="relative grid size-11 place-items-center rounded-xl border border-border bg-secondary text-accent-1">
            <Phone className="size-5" />
            {running && (
              <span className="absolute -right-0.5 -top-0.5 size-2.5 animate-pulse rounded-full bg-accent-1" />
            )}
          </span>
          <div>
            <p className="text-sm font-semibold">Skyline Properties · AI Voice Agent</p>
            <p className="text-xs text-muted-foreground">
              {running ? 'Live call in progress…' : 'Simulated conversation demo'}
            </p>
          </div>
        </div>

        {running && (
          <div className="flex items-center gap-2">
            <canvas ref={canvasRef} width="120" height="32" className="h-8 w-28 opacity-80" />
          </div>
        )}
      </div>

      <div
        ref={scrollRef}
        className="mt-6 h-72 space-y-3 overflow-y-auto rounded-2xl border border-border bg-background/40 p-4"
      >
        {turns.length === 0 && !running && (
          <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-4">
            <div className="relative flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-accent-1/20 opacity-75" />
              <div className="relative rounded-full p-4 bg-accent-1/10 text-accent-1 border border-accent-1/25">
                <Phone className="size-6 animate-pulse" />
              </div>
            </div>
            <div className="max-w-xs space-y-1.5">
              <p className="text-sm font-semibold text-foreground">Voice Line Ready</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Press &ldquo;Start Demo Call&rdquo; to listen to a simulated real-estate qualification agent.
              </p>
            </div>
          </div>
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
                    : 'max-w-[80%] rounded-2xl rounded-tr-sm bg-accent-1/15 px-3.5 py-2.5 text-sm text-foreground border border-accent-1/10'
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
            className="inline-flex items-center gap-2 rounded-lg bg-accent-1 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-1/90 shadow-lg shadow-accent-1/25 btn-glow cursor-pointer"
          >
            <Phone className="size-4" />
            {turns.length > 0 ? 'Replay Demo Call' : 'Start Demo Call'}
          </button>
        ) : (
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-card cursor-pointer"
          >
            <PhoneOff className="size-4" />
            End Call
          </button>
        )}
        {turns.length > 0 && !running && (
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
          >
            <RotateCcw className="size-4" />
            Reset
          </button>
        )}
      </div>
    </div>
  )
}
