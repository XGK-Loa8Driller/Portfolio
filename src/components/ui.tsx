import type { ReactNode } from 'react'
import { useReveal } from '../lib/hooks'

/** Fade/rise-in wrapper driven by IntersectionObserver. */
export function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'section' | 'span'
}) {
  const ref = useReveal<HTMLDivElement>()
  return (
    // @ts-expect-error dynamic tag with ref is fine at runtime
    <Tag ref={ref} className={`reveal ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>
      {children}
    </Tag>
  )
}

/** Numbered section eyebrow used across the page for a consistent HUD rhythm. */
export function SectionHead({
  index,
  kicker,
  title,
  accent = 'var(--color-cyan)',
}: {
  index: string
  kicker: string
  title: ReactNode
  accent?: string
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-3">
        <span className="mono-label" style={{ color: accent }}>
          {index}
        </span>
        <span className="h-px w-10" style={{ background: accent }} />
        <span className="mono-label">{kicker}</span>
      </div>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </Reveal>
  )
}

/** Corner-bracket frame decoration. */
export function Brackets({ color = 'rgba(120,170,235,0.5)' }: { color?: string }) {
  const c = { borderColor: color }
  return (
    <>
      <span className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l border-t" style={c} />
      <span className="pointer-events-none absolute right-0 top-0 h-4 w-4 border-r border-t" style={c} />
      <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b border-l" style={c} />
      <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r" style={c} />
    </>
  )
}

/** Small status LED with pulsing halo. */
export function Led({ color = 'var(--color-teal)', label }: { color?: string; label?: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="anim-led inline-block h-2 w-2 rounded-full" style={{ background: color }} />
      {label && <span className="mono-label">{label}</span>}
    </span>
  )
}
