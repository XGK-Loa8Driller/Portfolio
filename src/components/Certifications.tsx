import { Brackets, Led, Reveal, SectionHead } from './ui'

const CERTS = [
  { issuer: 'NPTEL', title: 'Introduction to Programming in C', id: 'NPTEL·C-01' },
  { issuer: 'NPTEL', title: 'Programming in Java', id: 'NPTEL·JAVA' },
  { issuer: 'NPTEL', title: 'Problem Solving through Programming in C', id: 'NPTEL·PS-C' },
  {
    issuer: 'Oracle',
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    id: 'OCI·AI-2025',
    accent: true,
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
      <SectionHead index="06" kicker="VERIFIED CREDENTIALS" title="Certifications" accent="#9a7cff" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {CERTS.map((c, i) => (
          <Reveal key={c.title} delay={i * 90}>
            <div
              data-hover
              className="glass anim-float group relative overflow-hidden rounded-2xl p-6 transition-transform hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              <Brackets color={c.accent ? 'rgba(154,124,255,0.6)' : 'rgba(42,212,238,0.5)'} />
              {/* holo sheen */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: 'linear-gradient(120deg, transparent, rgba(154,124,255,0.12), transparent)' }}
              />
              <div className="flex items-start justify-between">
                <span
                  className="grid h-12 w-12 place-items-center rounded-xl border font-display text-xs font-bold"
                  style={{
                    borderColor: c.accent ? 'rgba(154,124,255,0.5)' : 'rgba(42,212,238,0.5)',
                    color: c.accent ? '#9a7cff' : '#2ad4ee',
                    background: c.accent ? 'rgba(154,124,255,0.08)' : 'rgba(42,212,238,0.08)',
                  }}
                >
                  {c.issuer === 'Oracle' ? 'ORA' : 'NPT'}
                </span>
                <Led color={c.accent ? '#9a7cff' : '#2ad4ee'} label="VERIFIED" />
              </div>
              <div className="mono-label mt-5">{c.issuer}</div>
              <h3 className="mt-1.5 font-display text-lg leading-snug text-ink">{c.title}</h3>
              <div className="mono-label mt-4 flex items-center justify-between border-t border-hairline pt-3 !text-[0.55rem]">
                <span>CRED · {c.id}</span>
                <span>2025</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
