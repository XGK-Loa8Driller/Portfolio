import { Reveal, SectionHead } from './ui'

const FLOW = ['IDEA', 'DESIGN', 'BUILD', 'INTEGRATE', 'TEST', 'ITERATE']

export default function Mindset() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
      <SectionHead index="08" kicker="ENGINEERING MINDSET" title={<>From Concept → System → Real-World Solution</>} accent="#4d7cff" />

      <Reveal>
        <div className="glass relative overflow-hidden rounded-3xl p-6 md:p-10">
          <div className="hud-grid absolute inset-0 opacity-30" />
          <div className="relative flex flex-col items-stretch gap-3 md:flex-row md:items-center md:justify-between">
            {FLOW.map((step, i) => (
              <div key={step} className="flex flex-1 items-center gap-3 md:flex-col md:gap-4">
                <div className="relative flex items-center gap-3 md:flex-col">
                  <span
                    className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border font-mono text-[0.62rem]"
                    style={{
                      borderColor: 'rgba(77,124,255,0.4)',
                      background: 'rgba(77,124,255,0.06)',
                      boxShadow: '0 0 26px -12px #4d7cff',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-sm tracking-[0.14em] text-ink md:mt-1">{step}</span>
                </div>
                {i < FLOW.length - 1 && (
                  <span className="hidden flex-1 items-center md:flex">
                    <span className="h-px w-full bg-gradient-to-r from-blue/60 to-transparent" />
                    <span className="text-blue">→</span>
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="relative mt-8 max-w-2xl text-sm leading-relaxed text-muted">
            Every project follows the same disciplined loop — turning an idea into a designed system,
            building the hardware, integrating software and electronics, then testing and iterating
            until it becomes a reliable real-world solution.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
