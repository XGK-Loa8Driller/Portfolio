import { Reveal, SectionHead } from './ui'

const ITEMS = [
  {
    when: '2024 — PRESENT',
    title: 'B.E. Electronics & Communication Engineering',
    org: "St. Joseph's College of Engineering",
    metric: 'CGPA 7.97',
    active: true,
  },
  { when: '2024', title: 'Class 12 — CBSE', org: 'Higher Secondary', metric: '81.8%' },
  { when: '2022', title: 'Class 10 — CBSE', org: 'Secondary', metric: '89.8%' },
]

export default function Education() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-24 md:py-28">
      <SectionHead index="02" kicker="ACADEMIC TRAJECTORY" title="Education" accent="var(--color-violet)" />

      <div className="relative ml-2 md:ml-4">
        {/* spine */}
        <span className="absolute left-0 top-1 h-full w-px bg-gradient-to-b from-violet via-hairline to-transparent" />

        <div className="space-y-10">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={i * 120} className="relative pl-10 md:pl-14">
              {/* node */}
              <span className="absolute left-0 top-1.5 -translate-x-1/2">
                <span
                  className={`block h-3.5 w-3.5 rounded-full border ${
                    it.active ? 'border-violet bg-violet anim-led' : 'border-hairline bg-graphite'
                  }`}
                  style={it.active ? { boxShadow: '0 0 16px var(--color-violet)' } : undefined}
                />
              </span>

              <div className="glass group rounded-2xl p-6 transition-colors hover:border-violet/40" data-hover>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="mono-label text-violet">{it.when}</span>
                  <span className="rounded-full border border-hairline px-3 py-1 font-mono text-[0.7rem] text-ink">
                    {it.metric}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl text-ink md:text-2xl">{it.title}</h3>
                <p className="mt-1 text-sm text-muted">{it.org}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
