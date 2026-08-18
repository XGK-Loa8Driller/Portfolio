import { useState } from 'react'
import { useActiveSection, useScrolled } from '../lib/hooks'
import { Led } from './ui'

const LINKS = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'certifications', label: 'CERTIFICATIONS' },
  { id: 'contact', label: 'CONTACT' },
]

export default function Nav() {
  const scrolled = useScrolled(60)
  const active = useActiveSection(LINKS.map((l) => l.id))
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4">
      <nav
        className={`mt-3 flex w-full max-w-6xl items-center justify-between rounded-full px-4 transition-all duration-500 sm:px-6 ${
          scrolled
            ? 'glass mt-2 py-2 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.9)]'
            : 'border border-transparent py-3'
        }`}
      >
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="relative grid h-8 w-8 place-items-center rounded-md border border-cyan/50 bg-cyan/5 font-display text-sm font-bold text-cyan">
            AK
            <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-teal anim-led" />
          </span>
          <span className="hidden font-display text-sm tracking-[0.2em] text-ink sm:inline">
            ADITYA<span className="text-cyan">.K</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`relative rounded-full px-3 py-1.5 font-mono text-[0.66rem] tracking-[0.18em] transition-colors ${
                  active === l.id ? 'text-cyan' : 'text-muted hover:text-ink'
                }`}
              >
                {l.label}
                {active === l.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-cyan shadow-[0_0_8px_var(--color-cyan)]" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex lg:pl-2">
          <Led label="ONLINE" />
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="grid h-9 w-9 place-items-center rounded-md border border-hairline text-ink lg:hidden"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-px w-5 bg-current transition ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`block h-px w-5 bg-current transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-5 bg-current transition ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </div>
        </button>
      </nav>

      {/* mobile drawer */}
      {open && (
        <div className="glass fixed inset-x-4 top-20 z-50 rounded-2xl p-4 lg:hidden">
          <ul className="grid grid-cols-2 gap-2">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg border border-hairline px-3 py-3 font-mono text-[0.7rem] tracking-[0.15em] ${
                    active === l.id ? 'bg-cyan/10 text-cyan' : 'text-muted'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
