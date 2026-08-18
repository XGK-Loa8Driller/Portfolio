import portrait from '../imports/portrait'
import { Brackets, Led, Reveal, SectionHead } from './ui'

const PROFILE = [
  { k: 'FOCUS', v: 'Embedded Systems' },
  { k: 'INTERESTS', v: 'Programming · Digital Electronics · Intelligent Hardware' },
  { k: 'CURRENT ROLE', v: 'ECE Student' },
  { k: 'ENGINEERING STYLE', v: 'Build · Integrate · Test · Iterate' },
]

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
      <SectionHead index="01" kicker="PROFILE" title="About Me" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* portrait panel */}
        <Reveal className="relative">
          <div className="relative mx-auto max-w-sm">
            {/* vertical HUD line */}
            <div className="absolute -left-6 top-4 hidden h-full flex-col items-center gap-2 lg:flex">
              <span className="mono-label rotate-180 [writing-mode:vertical-rl] tracking-[0.4em]">
                SUBJECT · AK-01
              </span>
              <span className="w-px flex-1 bg-gradient-to-b from-cyan/60 via-hairline to-transparent" />
            </div>

            <div className="glass relative overflow-hidden rounded-2xl p-3">
              <Brackets color="rgba(42,212,238,0.6)" />
              <div className="relative overflow-hidden rounded-xl bg-graphite">
                <img
                  src={portrait}
                  alt="Portrait of Aditya K"
                  className="aspect-[4/5] w-full object-cover object-top"
                  style={{ filter: 'contrast(1.05) saturate(0.92) brightness(0.98)' }}
                />
                {/* tonal + edge scrims to seat the photo into the interface */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(5,7,11,0.35) 0%, transparent 22%, transparent 62%, rgba(5,7,11,0.85) 100%),' +
                      'linear-gradient(90deg, rgba(5,7,11,0.5), transparent 18%, transparent 82%, rgba(5,7,11,0.5)),' +
                      'radial-gradient(120% 90% at 50% 30%, transparent 55%, rgba(5,7,11,0.6) 100%)',
                  }}
                />
                {/* cyan wash */}
                <div className="pointer-events-none absolute inset-0 mix-blend-overlay" style={{ background: 'linear-gradient(160deg, rgba(42,212,238,0.18), transparent 60%)' }} />
                {/* animated scan line */}
                <div
                  className="pointer-events-none absolute inset-x-0 h-16"
                  style={{ animation: 'scanline 5s ease-in-out infinite', background: 'linear-gradient(180deg, transparent, rgba(42,212,238,0.16), transparent)' }}
                />
                {/* metadata */}
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-4">
                  <div className="flex items-center justify-between">
                    <span className="mono-label !text-[0.58rem]">REC · 4:5</span>
                    <Led color="var(--color-teal)" />
                  </div>
                  <div className="mono-label !text-[0.58rem] flex justify-between">
                    <span>ISO 400</span>
                    <span className="text-cyan">IDENTITY CONFIRMED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* floating technical labels */}
            {[
              { t: 'ECE', c: 'left-[-8%] top-[16%]' },
              { t: 'EMBEDDED SYSTEMS', c: 'right-[-14%] top-[36%]' },
              { t: 'UAV', c: 'left-[-6%] bottom-[24%]' },
              { t: 'HARDWARE + SOFTWARE', c: 'right-[-10%] bottom-[8%]' },
            ].map((l) => (
              <span
                key={l.t}
                className={`glass anim-float absolute rounded-full px-3 py-1 font-mono text-[0.6rem] tracking-[0.18em] text-cyan ${l.c}`}
              >
                {l.t}
              </span>
            ))}
          </div>
        </Reveal>

        {/* text + profile */}
        <div className="flex flex-col justify-center">
          <Reveal delay={80}>
            <p className="text-lg leading-relaxed text-ink/90 md:text-xl">
              ECE student with an interest in embedded systems, programming, and digital
              electronics. Skilled in <span className="text-cyan">C, C++, Verilog</span>, and
              hardware-software integration, with hands-on experience through projects and an
              Embedded Systems internship at{' '}
              <span className="text-cyan">Data Patterns</span>. Passionate about learning new
              technologies and building practical engineering solutions.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="glass mt-10 rounded-2xl p-1">
              <div className="flex items-center justify-between px-5 pt-4">
                <span className="mono-label text-cyan">ENGINEERING PROFILE</span>
                <span className="mono-label">v.2026</span>
              </div>
              <div className="mt-3 grid grid-cols-1 divide-y divide-hairline sm:grid-cols-2 sm:divide-y-0">
                {PROFILE.map((p, i) => (
                  <div
                    key={p.k}
                    data-hover
                    className={`group px-5 py-4 transition-colors hover:bg-cyan/[0.04] ${
                      i < 2 ? 'sm:border-b sm:border-hairline' : ''
                    } ${i % 2 === 0 ? 'sm:border-r sm:border-hairline' : ''}`}
                  >
                    <div className="mono-label mb-1.5 flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-cyan transition-all group-hover:w-3" />
                      {p.k}
                    </div>
                    <div className="font-display text-sm text-ink">{p.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
