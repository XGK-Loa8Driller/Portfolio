import { Brackets, Led, Reveal, SectionHead } from './ui'

const STATIONS = [
  {
    tag: 'HARDWARE',
    items: ['Microcontrollers', 'Sensors'],
    accent: 'var(--color-cyan)',
  },
  { tag: 'INTERFACES', items: ['Communication Systems'], accent: 'var(--color-blue)' },
  { tag: 'SYSTEMS', items: ['Embedded / Real-Time'], accent: 'var(--color-violet)' },
  {
    tag: 'PROCESS',
    items: ['Testing', 'Troubleshooting', 'Integration'],
    accent: 'var(--color-teal)',
  },
]

const NOTES = [
  'Gained hands-on exposure to real-world defence and aerospace electronics development.',
  'Worked with embedded hardware, microcontrollers, sensors, and communication interfaces for hardware-software integration.',
  'Acquired practical experience in real-time embedded systems, system testing, troubleshooting, and electronic system design.',
  'Strengthened the ability to translate engineering concepts into reliable, real-world solutions.',
]

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
      <SectionHead index="03" kicker="ENGINEERING EXPERIENCE" title="Where Theory Met Hardware" />

      <Reveal>
        <div className="glass relative overflow-hidden rounded-3xl">
          <Brackets />
          {/* header bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-hairline bg-white/[0.015] px-6 py-5 md:px-8">
            <div>
              <div className="mono-label mb-1 flex items-center gap-2">
                <Led color="var(--color-teal)" /> ACTIVE LOG · WORKSTATION
              </div>
              <h3 className="font-display text-2xl text-ink md:text-3xl">
                Data Patterns <span className="text-muted">—</span>{' '}
                <span className="text-cyan">Embedded Systems Intern</span>
              </h3>
            </div>
            <span className="rounded-full border border-hairline px-4 py-2 font-mono text-[0.72rem] tracking-[0.15em] text-ink">
              JUNE 2025 — JULY 2025
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
            {/* workstation grid */}
            <div className="grid grid-cols-2 gap-px bg-hairline p-px lg:border-r lg:border-hairline">
              {STATIONS.map((s) => (
                <div
                  key={s.tag}
                  data-hover
                  className="group relative bg-graphite/80 p-6 transition-colors hover:bg-cyan/[0.03]"
                >
                  <div className="flex items-center justify-between">
                    <span className="mono-label" style={{ color: s.accent }}>
                      {s.tag}
                    </span>
                    <span
                      className="h-1.5 w-1.5 rounded-full transition-all group-hover:scale-150"
                      style={{ background: s.accent, boxShadow: `0 0 10px ${s.accent}` }}
                    />
                  </div>
                  <ul className="mt-4 space-y-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 font-display text-sm text-ink">
                        <span className="h-px w-3" style={{ background: s.accent }} />
                        {it}
                      </li>
                    ))}
                  </ul>
                  {/* faint index */}
                  <span className="pointer-events-none absolute bottom-2 right-3 font-display text-4xl text-white/[0.03]">
                    {s.tag[0]}
                  </span>
                </div>
              ))}
            </div>

            {/* notes readout */}
            <div className="p-6 md:p-8">
              <div className="mono-label mb-4">MISSION NOTES</div>
              <ul className="space-y-5">
                {NOTES.map((n, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-0.5 font-mono text-[0.7rem] text-cyan">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm leading-relaxed text-muted">{n}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
