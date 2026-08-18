import type { ReactNode } from 'react'
import { useClock } from '../lib/hooks'
import { Brackets, Led, Reveal } from './ui'

function CTA({
  href,
  primary,
  children,
}: {
  href: string
  primary?: boolean
  children: ReactNode
}) {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 font-mono text-[0.72rem] tracking-[0.18em] transition-all ${
        primary
          ? 'bg-cyan text-void shadow-[0_0_30px_-6px_var(--color-cyan)] hover:shadow-[0_0_44px_-4px_var(--color-cyan)]'
          : 'border border-hairline text-ink hover:border-cyan/60 hover:text-cyan'
      }`}
    >
      {children}
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </a>
  )
}

/** Right-side aerospace/robotics interface visualization. */
function OrbitalHUD() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* ambient glow */}
      <div
        className="absolute inset-8 rounded-full blur-2xl"
        style={{ background: 'radial-gradient(circle, rgba(42,212,238,0.22), transparent 65%)' }}
      />

      <svg viewBox="0 0 400 400" className="relative h-full w-full">
        <defs>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2ad4ee" />
            <stop offset="100%" stopColor="#9a7cff" />
          </linearGradient>
          <radialGradient id="core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2ad4ee" />
            <stop offset="100%" stopColor="#4d7cff" />
          </radialGradient>
        </defs>

        {/* concentric technical rings */}
        {[190, 150, 108].map((r, i) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke="rgba(120,170,235,0.18)"
            strokeWidth="1"
            strokeDasharray={i === 1 ? '2 6' : undefined}
          />
        ))}

        {/* rotating orbit ring with node */}
        <g style={{ transformOrigin: '200px 200px', animation: 'spin-slow 22s linear infinite' }}>
          <circle cx="200" cy="200" r="150" fill="none" stroke="url(#ring)" strokeWidth="1.4" strokeDasharray="120 900" strokeLinecap="round" opacity="0.8" />
          <circle cx="200" cy="50" r="4" fill="#2ad4ee" />
          <circle cx="200" cy="50" r="9" fill="none" stroke="#2ad4ee" strokeWidth="1" opacity="0.5" />
        </g>
        <g style={{ transformOrigin: '200px 200px', animation: 'spin-slow 32s linear infinite reverse' }}>
          <circle cx="200" cy="200" r="190" fill="none" stroke="rgba(154,124,255,0.35)" strokeWidth="1" strokeDasharray="60 1140" strokeLinecap="round" />
          <circle cx="390" cy="200" r="3.5" fill="#9a7cff" />
        </g>

        {/* radar sweep */}
        <g style={{ transformOrigin: '200px 200px', animation: 'radar-sweep 4.5s linear infinite' }}>
          <path d="M200 200 L200 50 A150 150 0 0 1 305 95 Z" fill="url(#core)" opacity="0.12" />
          <line x1="200" y1="200" x2="200" y2="52" stroke="#2ad4ee" strokeWidth="1.4" opacity="0.7" />
        </g>

        {/* crosshair */}
        <line x1="200" y1="10" x2="200" y2="390" stroke="rgba(120,170,235,0.12)" strokeWidth="1" />
        <line x1="10" y1="200" x2="390" y2="200" stroke="rgba(120,170,235,0.12)" strokeWidth="1" />

        {/* central drone/core */}
        <g style={{ transformOrigin: '200px 200px', animation: 'float-y 6s ease-in-out infinite' }}>
          <circle cx="200" cy="200" r="30" fill="url(#core)" opacity="0.2" />
          <circle cx="200" cy="200" r="30" fill="none" stroke="#2ad4ee" strokeWidth="1.4" />
          {/* quad arms */}
          {[45, 135, 225, 315].map((a) => {
            const rad = (a * Math.PI) / 180
            const x = 200 + Math.cos(rad) * 44
            const y = 200 + Math.sin(rad) * 44
            return (
              <g key={a}>
                <line x1="200" y1="200" x2={x} y2={y} stroke="#4d7cff" strokeWidth="1.4" />
                <circle cx={x} cy={y} r="7" fill="none" stroke="#2ad4ee" strokeWidth="1.4" />
                <circle cx={x} cy={y} r="7" fill="#2ad4ee" opacity="0.15" />
              </g>
            )
          })}
          <circle cx="200" cy="200" r="4" fill="#e8eef7" />
        </g>
      </svg>

      {/* floating data chips */}
      <FloatChip className="left-[2%] top-[18%]" label="ALT" value="128.4 m" />
      <FloatChip className="right-[0%] top-[40%]" label="SIG" value="98%" accent />
      <FloatChip className="bottom-[16%] left-[6%]" label="PWR" value="4S · 16.8V" />
      <FloatChip className="bottom-[6%] right-[8%]" label="GPS" value="12 SAT" />
    </div>
  )
}

function FloatChip({
  className,
  label,
  value,
  accent,
}: {
  className: string
  label: string
  value: string
  accent?: boolean
}) {
  return (
    <div className={`glass anim-float absolute rounded-lg px-3 py-2 ${className}`} style={{ animationDelay: `${Math.random() * 2}s` }}>
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent ? 'var(--color-teal)' : 'var(--color-cyan)' }} />
        <span className="mono-label !text-[0.58rem] !tracking-[0.2em]">{label}</span>
      </div>
      <div className={`font-mono text-sm ${accent ? 'text-teal' : 'text-ink'}`}>{value}</div>
    </div>
  )
}

export default function Hero() {
  const clock = useClock()
  const time = clock.toLocaleTimeString('en-GB')

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 pb-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT */}
        <div>
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-hairline px-4 py-1.5">
              <Led label="System Status: Online" />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mono-label mb-4 flex flex-wrap gap-x-3 gap-y-1">
              <span className="text-cyan">ECE ENGINEER</span>
              <span className="text-muted">/</span>
              <span>EMBEDDED SYSTEMS</span>
              <span className="text-muted">/</span>
              <span>UAVs</span>
              <span className="text-muted">/</span>
              <span>INTELLIGENT HARDWARE</span>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <h1 className="font-display text-6xl font-bold leading-[0.92] tracking-tight text-ink sm:text-7xl md:text-8xl">
              ADITYA
              <span className="block text-glow text-cyan">K</span>
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Building intelligent systems where{' '}
              <span className="text-ink">hardware, software</span> and{' '}
              <span className="text-ink">real-world engineering</span> meet.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap gap-3">
              <CTA href="#projects" primary>
                EXPLORE MY WORK
              </CTA>
              <CTA href="#contact">VIEW RESUME</CTA>
            </div>
          </Reveal>

          <Reveal delay={380}>
            <div className="mono-label mt-12 flex flex-wrap gap-x-8 gap-y-2 border-t border-hairline pt-5">
              <span>LAT 13.0827° N</span>
              <span>LON 80.2707° E</span>
              <span className="text-cyan">T · {time}</span>
              <span>REF · AK-2026</span>
            </div>
          </Reveal>
        </div>

        {/* RIGHT */}
        <Reveal delay={200} className="relative">
          <div className="glass relative rounded-3xl p-6">
            <Brackets />
            <div className="mb-4 flex items-center justify-between">
              <span className="mono-label">NAV · SYS_INTERFACE</span>
              <Led color="var(--color-cyan)" label="TRACKING" />
            </div>
            <OrbitalHUD />
            <div className="mono-label mt-4 flex justify-between border-t border-hairline pt-3">
              <span>MODE · AUTONOMOUS</span>
              <span className="text-teal">LINK · STABLE</span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="mono-label flex flex-col items-center gap-2">
          <span>SCROLL</span>
          <span className="h-8 w-px bg-gradient-to-b from-cyan to-transparent" />
        </div>
      </div>
    </section>
  )
}
