import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays, Clock, GraduationCap, MapPin, Mic, Users } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section'
import { speakingEngagements, type SpeakingClip, type SpeakingEngagement } from '@/lib/content'

function Fact({ icon: Icon, children }: { icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
      <Icon className="mt-0.5 size-4 shrink-0 text-accent-1" />
      <span>{children}</span>
    </li>
  )
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <span key={t} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground">
          {t}
        </span>
      ))}
    </div>
  )
}

/** Compact card for the home page. */
export function SpeakingHighlight() {
  const e = speakingEngagements[0]
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
      <SectionHeading
        label="Speaking & Knowledge Sharing"
        title="Teaching what I build"
        description="Beyond shipping projects, I share practical AI knowledge with the next generation of data scientists."
      />
      <Reveal className="mt-10">
        <div className="grid overflow-hidden rounded-3xl glass-panel antigravity-hover md:grid-cols-[0.8fr_1.2fr]">
          <div className="relative min-h-[260px] md:min-h-full">
            <Image
              src={e.photos[0].src}
              alt={e.photos[0].alt}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="flex flex-col gap-4 p-7 sm:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-4">
              {e.kind} · {e.dateLabel}
            </p>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">{e.title}</h3>
            <p className="text-sm text-accent-1">{e.institution} · Department of Data Science</p>
            <p className="leading-relaxed text-muted-foreground">{e.summary}</p>
            <Tags tags={e.tags} />
            <Link
              href="/experience#speaking"
              className="group mt-2 inline-flex items-center gap-2 text-sm font-medium text-accent-1"
            >
              See session details, photos &amp; clips
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function ClipFigure({ c }: { c: SpeakingClip }) {
  return (
    <figure className="flex flex-col gap-2">
      <video
        controls
        preload="none"
        playsInline
        poster={c.poster}
        aria-label={c.label}
        className={`w-full rounded-xl border border-border bg-black object-cover ${c.portrait ? 'aspect-[9/16]' : 'aspect-video'}`}
      >
        <source src={c.src} type="video/mp4" />
      </video>
      <figcaption className="text-xs text-muted-foreground">{c.label}</figcaption>
    </figure>
  )
}

function Engagement({ e }: { e: SpeakingEngagement }) {
  const landscape = e.clips.filter((c) => !c.portrait)
  const portrait = e.clips.filter((c) => c.portrait)
  return (
    <article className="overflow-hidden rounded-3xl glass-panel">
      <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative min-h-[320px] lg:min-h-full">
          <Image
            src={e.photos[0].src}
            alt={e.photos[0].alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-top"
          />
        </div>

        <div className="flex flex-col gap-5 p-7 sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-4">
            {e.kind} · {e.dateLabel}
          </p>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{e.title}</h3>
            <p className="mt-2 text-accent-1">{e.institution}</p>
            <p className="text-sm text-muted-foreground">{e.department}</p>
          </div>

          <ul className="grid gap-2.5 sm:grid-cols-2">
            <Fact icon={CalendarDays}>{e.date}</Fact>
            <Fact icon={Clock}>{e.time}</Fact>
            <Fact icon={Users}>{e.audience}</Fact>
            <Fact icon={MapPin}>{e.venue}</Fact>
            <Fact icon={Mic}>{e.role}</Fact>
            <Fact icon={GraduationCap}>Duration: 1 hour</Fact>
          </ul>

          <p className="leading-relaxed text-muted-foreground">{e.summary}</p>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Topics Covered</h4>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
              {e.topics.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-accent-1/20 bg-accent-1/5 p-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-1">Key Takeaway</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.takeaway}</p>
          </div>

          <Tags tags={e.tags} />
        </div>
      </div>

      {/* Evidence: photo + clips */}
      <div className="border-t border-border p-6 sm:p-8">
        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">From the Session</h4>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {landscape.map((c) => (
            <ClipFigure key={c.src} c={c} />
          ))}
        </div>

        <div className="mt-6 grid items-start gap-5 sm:grid-cols-3">
          <figure className="flex flex-col gap-2">
            <Image
              src={e.photos[1].src}
              alt={e.photos[1].alt}
              width={600}
              height={800}
              loading="lazy"
              className="aspect-[9/16] w-full rounded-xl border border-border object-cover"
            />
            <figcaption className="text-xs text-muted-foreground">{e.photos[1].caption}</figcaption>
          </figure>
          {portrait.map((c) => (
            <ClipFigure key={c.src} c={c} />
          ))}
        </div>
      </div>
    </article>
  )
}

/** Full section for the Experience page. */
export function SpeakingSection() {
  return (
    <section id="speaking" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-24 lg:px-8">
      <SectionHeading
        label="Speaking & Knowledge Sharing"
        title="Invited back to teach Applied AI"
        description="Sharing practical, responsible AI skills with junior Data Science students."
      />
      <div className="mt-10 flex flex-col gap-8">
        {speakingEngagements.map((e) => (
          <Reveal key={e.title}>
            <Engagement e={e} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
