import { Brackets, Led, Reveal } from './ui'
import { useClock } from '../lib/hooks'

export default function Contact() {
  const clock = useClock()
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-14">
          <Brackets color="rgba(42,212,238,0.6)" />
          {/* animated circuitry */}
          <div className="hud-grid anim-drift pointer-events-none absolute -inset-24 opacity-40" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: 'radial-gradient(600px 300px at 80% 20%, rgba(42,212,238,0.12), transparent 60%)' }}
          />

          <div className="relative">
            <div className="mono-label mb-6 flex items-center gap-2">
              <Led /> CHANNEL OPEN · AWAITING TRANSMISSION
            </div>
            <h2 className="max-w-2xl font-display text-4xl font-bold leading-[1.02] tracking-tight text-ink md:text-6xl">
              LET'S BUILD SOMETHING <span className="text-glow text-cyan">INTELLIGENT.</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <a
                href="mailto:aditya.k31206@gmail.com"
                data-hover
                className="glass group rounded-2xl p-5 transition-colors hover:border-cyan/50"
              >
                <div className="mono-label mb-2">EMAIL</div>
                <div className="font-mono text-sm text-ink transition-colors group-hover:text-cyan">
                  aditya.k31206@gmail.com
                </div>
              </a>
              <a href="tel:+919566083914" data-hover className="glass group rounded-2xl p-5 transition-colors hover:border-cyan/50">
                <div className="mono-label mb-2">PHONE</div>
                <div className="font-mono text-sm text-ink transition-colors group-hover:text-cyan">
                  +91 9566083914
                </div>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:aditya.k31206@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-cyan px-7 py-3.5 font-mono text-[0.72rem] tracking-[0.18em] text-void shadow-[0_0_30px_-6px_var(--color-cyan)] transition-shadow hover:shadow-[0_0_46px_-4px_var(--color-cyan)]"
              >
                CONTACT ME →
              </a>
              <a
                href="mailto:aditya.k31206@gmail.com?subject=Resume%20Request"
                className="inline-flex items-center gap-2 rounded-full border border-hairline px-7 py-3.5 font-mono text-[0.72rem] tracking-[0.18em] text-ink transition-colors hover:border-cyan/60 hover:text-cyan"
              >
                DOWNLOAD RESUME
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      {/* footer */}
      <footer className="mono-label mt-14 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-8 sm:flex-row">
        <span>© 2026 ADITYA K · ECE ENGINEER</span>
        <span className="flex items-center gap-2">
          <Led color="var(--color-teal)" /> SYSTEM ONLINE · {clock.toLocaleTimeString('en-GB')}
        </span>
        <span>BUILT · HARDWARE + SOFTWARE</span>
      </footer>
    </section>
  )
}
