import { Reveal, SectionHead } from './ui'

const SKILLS = [
  { name: 'TEAMWORK & COLLABORATION', note: 'Building together', accent: '#2ad4ee' },
  { name: 'LEADERSHIP', note: 'Driving direction', accent: '#4d7cff' },
  { name: 'PROBLEM SOLVING', note: 'Root-cause thinking', accent: '#9a7cff' },
  { name: 'COMMUNICATION', note: 'Clear signal', accent: '#2ee6c4' },
  { name: 'ADAPTABILITY', note: 'Rapid iteration', accent: '#2ad4ee' },
]

/** Animated capability node — a rotating technical ring, no numeric rating. */
function Node({ accent, i }: { accent: string; i: number }) {
  return (
    <div className="relative mx-auto h-24 w-24">
      <div className="absolute inset-2 rounded-full blur-md" style={{ background: `${accent}22` }} />
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(120,170,235,0.15)" strokeWidth="2" />
        <g style={{ transformOrigin: '50px 50px', animation: `spin-slow ${10 + i * 2}s linear infinite` }}>
          <circle cx="50" cy="50" r="40" fill="none" stroke={accent} strokeWidth="2" strokeDasharray="70 250" strokeLinecap="round" />
        </g>
        <g style={{ transformOrigin: '50px 50px', animation: `spin-slow ${8 + i}s linear infinite reverse` }}>
          <circle cx="50" cy="50" r="28" fill="none" stroke={`${accent}66`} strokeWidth="1" strokeDasharray="4 8" />
        </g>
        <circle cx="50" cy="50" r="6" fill={accent} className="anim-led" />
      </svg>
    </div>
  )
}

export default function SoftSkills() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-24 md:py-28">
      <SectionHead index="07" kicker="OPERATING PARAMETERS" title="How I Work" accent="#2ee6c4" />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {SKILLS.map((s, i) => (
          <Reveal key={s.name} delay={i * 90}>
            <div data-hover className="glass group h-full rounded-2xl p-5 text-center transition-transform hover:-translate-y-1">
              <Node accent={s.accent} i={i} />
              <h3 className="mt-4 font-display text-xs leading-snug tracking-wide text-ink">{s.name}</h3>
              <p className="mono-label mt-2 !text-[0.55rem]" style={{ color: s.accent }}>
                {s.note}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
