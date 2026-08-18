import { useState } from 'react'
import { Reveal, SectionHead } from './ui'

const CATS = [
  { key: 'PROGRAMMING', accent: '#2ad4ee', items: ['C', 'C++', 'Verilog', 'Java'] },
  {
    key: 'EMBEDDED SYSTEMS',
    accent: '#4d7cff',
    items: ['Microcontrollers', 'Sensors', 'Communication Interfaces', 'Hardware-Software Integration'],
  },
  {
    key: 'TOOLS & PLATFORMS',
    accent: '#9a7cff',
    items: ['NVIDIA Jetson', 'YOLO', 'Radiolink F722', 'ESC', 'Servos', 'Flight Controllers'],
  },
  {
    key: 'DOMAINS',
    accent: '#2ee6c4',
    items: ['Digital Electronics', 'Computer Vision', 'RF Detection', 'Real-Time Systems', 'UAV Design'],
  },
]

const SATELLITES = ['CODE', 'HARDWARE', 'AI', 'CONTROL', 'VISION', 'UAV', 'EMBEDDED']

export default function Skills() {
  const [active, setActive] = useState(0)
  const cat = CATS[active]

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
      <SectionHead index="05" kicker="ENGINEERING STACK" title="A Connected Ecosystem" accent="#4d7cff" />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
        {/* radial hub */}
        <Reveal className="glass relative flex items-center justify-center overflow-hidden rounded-3xl p-6">
          <div className="relative aspect-square w-full max-w-md">
            <svg viewBox="0 0 400 400" className="h-full w-full">
              {SATELLITES.map((s, i) => {
                const ang = (i / SATELLITES.length) * Math.PI * 2 - Math.PI / 2
                const x = 200 + Math.cos(ang) * 150
                const y = 200 + Math.sin(ang) * 150
                const lit = i % CATS.length === active
                return (
                  <line
                    key={s}
                    x1="200"
                    y1="200"
                    x2={x}
                    y2={y}
                    stroke={lit ? cat.accent : 'rgba(120,170,235,0.18)'}
                    strokeWidth={lit ? 1.6 : 1}
                    strokeDasharray="4 6"
                    style={{ animation: lit ? 'dash-flow 20s linear infinite' : undefined }}
                  />
                )
              })}
              <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(120,170,235,0.1)" />
            </svg>

            {/* center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="glass grid h-28 w-28 place-items-center rounded-full p-2" style={{ boxShadow: `0 0 40px -8px ${cat.accent}` }}>
                <span className="font-display text-[0.62rem] leading-tight tracking-[0.14em] text-ink">
                  ADITYA
                  <br />
                  ENGINEERING
                  <br />
                  STACK
                </span>
              </div>
            </div>

            {/* satellites */}
            {SATELLITES.map((s, i) => {
              const ang = (i / SATELLITES.length) * 360 - 90
              const lit = i % CATS.length === active
              return (
                <span
                  key={s}
                  data-hover
                  className="absolute left-1/2 top-1/2 font-mono text-[0.6rem] tracking-[0.12em] transition-all"
                  style={{
                    transform: `rotate(${ang}deg) translate(150px) rotate(${-ang}deg) translate(-50%,-50%)`,
                  }}
                >
                  <span
                    className="block rounded-full border px-2.5 py-1"
                    style={{
                      borderColor: lit ? cat.accent : 'var(--color-hairline)',
                      color: lit ? cat.accent : 'var(--color-muted)',
                      background: lit ? `${cat.accent}12` : 'transparent',
                      boxShadow: lit ? `0 0 14px -2px ${cat.accent}` : 'none',
                    }}
                  >
                    {s}
                  </span>
                </span>
              )
            })}
          </div>
        </Reveal>

        {/* categories + tech */}
        <div className="flex flex-col justify-center gap-3">
          {CATS.map((c, i) => (
            <Reveal key={c.key} delay={i * 80}>
              <button
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                data-hover
                className="glass w-full rounded-2xl p-5 text-left transition-all"
                style={{
                  borderColor: active === i ? c.accent : undefined,
                  boxShadow: active === i ? `0 0 30px -14px ${c.accent}` : undefined,
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="mono-label" style={{ color: active === i ? c.accent : undefined }}>
                    {c.key}
                  </span>
                  <span className="h-2 w-2 rounded-full" style={{ background: c.accent, opacity: active === i ? 1 : 0.3 }} />
                </div>
                <div
                  className="grid transition-all duration-500"
                  style={{ gridTemplateRows: active === i ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-wrap gap-2 pt-4">
                      {c.items.map((it) => (
                        <span
                          key={it}
                          className="rounded-lg border px-3 py-1.5 font-mono text-[0.68rem] text-ink"
                          style={{ borderColor: `${c.accent}44`, background: `${c.accent}0f` }}
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
