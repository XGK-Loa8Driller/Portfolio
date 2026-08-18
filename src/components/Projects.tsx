import { useEffect, useState, type ReactElement, type ReactNode } from 'react'
import { Brackets, Led, Reveal, SectionHead } from './ui'
import { DroneViz, RadarViz, RailwayViz } from './projectViz'

type Project = {
  no: string
  title: string
  sub: string
  accent: string
  desc: string
  viz: () => ReactElement
  status: { k: string; v: string }[]
  problem: string
  solution: string
  stack: string[]
  contribution: string[]
  architecture: string[]
  capabilities: string[]
}

const PROJECTS: Project[] = [
  {
    no: '01',
    title: 'Raksha Tejas',
    sub: 'Anti-Drone Sentinel Rover System',
    accent: '#2ee6c4',
    viz: RadarViz,
    desc: 'A cutting-edge anti-drone defense concept designed to detect, track, and respond to unauthorized UAV activity in real time using a fusion of advanced sensors and embedded systems.',
    status: [
      { k: 'RADAR', v: '360° SWEEP' },
      { k: 'DETECTION', v: 'REAL-TIME' },
      { k: 'RESPONSE', v: 'AUTOMATED' },
    ],
    problem:
      'Unauthorized UAV activity poses a growing threat to secure zones, demanding rapid detection, tracking, and situational awareness without human latency.',
    solution:
      'Engineered a sentinel rover fusing advanced sensors with embedded systems to detect, track, and respond to aerial threats in real time — exploring RF signal detection, secure communication protocols, and intelligent automated response mechanisms.',
    stack: ['Embedded Systems', 'Sensor Fusion', 'RF Signal Detection', 'Secure Comms', 'Real-Time Control'],
    contribution: [
      'Designed the detection-and-response system concept end to end.',
      'Focused on seamless hardware-software integration for rapid threat identification.',
      'Explored RF signal detection and secure communication protocols.',
      'Defined intelligent automated response mechanisms for robust aerial security.',
    ],
    architecture: ['Sensor array', 'Signal / RF acquisition', 'Embedded processing core', 'Threat analysis', 'Automated response'],
    capabilities: ['Real-time UAV tracking', 'Situational awareness', 'RF threat identification', 'Automated countermeasures'],
  },
  {
    no: '02',
    title: 'Ball Drone MkII',
    sub: 'Omni-Directional Lightweight Drone',
    accent: '#4d7cff',
    viz: DroneViz,
    desc: 'A spherical UAV engineered for extreme agility and true omnidirectional movement. Its enclosed spherical architecture enables seamless 360° motion, allowing it to maneuver through complex environments with fluid precision.',
    status: [
      { k: 'ARCH', v: 'SPHERICAL' },
      { k: 'MOBILITY', v: '360°' },
      { k: 'FLIGHT', v: 'STABILIZED' },
    ],
    problem:
      'Conventional drones are directionally constrained and collision-prone in tight, complex environments, limiting true agility.',
    solution:
      'Developed a spherical UAV whose enclosed architecture enables true omnidirectional movement — forward, backward, lateral, and rotational — delivering highly responsive, collision-resistant flight and unmatched maneuverability in all directions.',
    stack: ['Radiolink F722', 'Brushless Motor', 'ESC', 'Servos', 'Li-Po Battery', 'Flight Controller'],
    contribution: [
      'Designed and developed a spherical UAV focused on omnidirectional mobility and agile flight control.',
      'Integrated Radiolink F722 flight controller, brushless motor, ESC, servos, and Li-Po battery.',
      'Contributed to flight controller configuration and overall hardware integration.',
      'Gained understanding of aerodynamics, servo-based actuation, motor control, and real-time flight stabilization.',
    ],
    architecture: ['Spherical frame', 'Radiolink F722 FC', 'ESC + brushless motor', 'Servo actuation', 'Li-Po power'],
    capabilities: ['360° omnidirectional motion', 'Collision-resistant flight', 'Agile control response', 'Real-time stabilization'],
  },
  {
    no: '03',
    title: 'A.R.T.E.M.I.S.',
    sub: 'AI Railway Track Evaluation & Monitoring Intelligent System',
    accent: '#9a7cff',
    viz: RailwayViz,
    desc: 'A high-impact AI railway inspection system that fuses computer vision and vibration analytics to instantly detect critical track failures like cracks, missing fasteners, fishplate defects, and geometric distortions.',
    status: [
      { k: 'VISION SYSTEM', v: 'ACTIVE' },
      { k: 'IMU', v: 'MONITORING' },
      { k: 'EDGE AI', v: 'JETSON ORIN NANO' },
      { k: 'TRACK STATUS', v: 'ANALYZING' },
    ],
    problem:
      'Manual railway track inspection is slow, subjective, and cannot scale to high-speed, continuous surveillance — critical faults can go undetected until failure.',
    solution:
      'Fused YOLO-based real-time object detection with a camera system and an IMU sensor for motion/vibration sensing, all processed on the NVIDIA Jetson Orin Nano for edge-level intelligence — enabling autonomous, high-speed track surveillance with early fault prediction.',
    stack: ['YOLO', 'Computer Vision', 'IMU Sensing', 'NVIDIA Jetson Orin Nano', 'Vibration Analytics', 'Edge AI'],
    contribution: [
      'Built an AI inspection system fusing computer vision and vibration analytics.',
      'Deployed YOLO-based real-time detection for cracks, missing fasteners, and fishplate defects.',
      'Integrated an IMU sensor for motion and vibration sensing.',
      'Ran the full pipeline on Jetson Orin Nano for edge-level intelligence and early fault prediction.',
    ],
    architecture: ['Camera capture', 'YOLO inference', 'IMU vibration stream', 'Jetson Orin Nano edge core', 'Anomaly + fault report'],
    capabilities: ['Crack & defect detection', 'Fastener / fishplate check', 'Geometric distortion sensing', 'Autonomous high-speed surveillance'],
  },
]

function ProjectCard({ p, onOpen, i }: { p: Project; onOpen: () => void; i: number }) {
  const Viz = p.viz
  return (
    <Reveal delay={i * 100}>
      <button
        onClick={onOpen}
        data-hover
        className="glass group relative w-full overflow-hidden rounded-3xl p-6 text-left transition-all hover:-translate-y-1 md:p-8"
        style={{ transitionDuration: '400ms' }}
      >
        <Brackets color={`${p.accent}99`} />
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-display text-5xl font-bold" style={{ color: `${p.accent}33` }}>
                {p.no}
              </span>
              <span className="h-px flex-1" style={{ background: `${p.accent}44` }} />
              <Led color={p.accent} />
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold text-ink md:text-3xl">{p.title}</h3>
            <p className="mono-label mt-1" style={{ color: p.accent }}>
              {p.sub}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{p.desc}</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {p.status.slice(0, 3).map((s) => (
                <div key={s.k}>
                  <div className="mono-label !text-[0.55rem]">{s.k}</div>
                  <div className="font-mono text-xs text-ink">{s.v}</div>
                </div>
              ))}
            </div>
            <span
              className="mt-6 inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.18em] transition-colors"
              style={{ color: p.accent }}
            >
              OPEN CASE STUDY{' '}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </div>
          <div className="relative">
            <div
              className="rounded-2xl border p-3"
              style={{ borderColor: `${p.accent}33`, background: `${p.accent}08` }}
            >
              <Viz />
            </div>
          </div>
        </div>
      </button>
    </Reveal>
  )
}

function DetailModal({ p, onClose }: { p: Project; onClose: () => void }) {
  const Viz = p.viz
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', esc)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', esc)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto bg-void/85 p-3 backdrop-blur-md sm:p-6" style={{ animation: 'glow-breathe 0.01s' }}>
      <div
        className="glass relative my-6 w-full max-w-5xl overflow-hidden rounded-3xl"
        style={{ animation: 'float-y 0.5s ease-out' }}
      >
        <div className="hud-grid absolute inset-0 opacity-40" />
        <div className="relative">
          {/* header */}
          <div className="flex items-start justify-between gap-4 border-b border-hairline p-6 md:p-8">
            <div>
              <div className="mono-label mb-2 flex items-center gap-2" style={{ color: p.accent }}>
                CASE STUDY · {p.no} <Led color={p.accent} />
              </div>
              <h3 className="font-display text-3xl font-bold text-ink md:text-4xl">{p.title}</h3>
              <p className="mono-label mt-1">{p.sub}</p>
            </div>
            <button
              onClick={onClose}
              data-hover
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-hairline text-ink transition-colors hover:border-cyan/60 hover:text-cyan"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* body */}
          <div className="grid grid-cols-1 gap-8 p-6 md:p-8 lg:grid-cols-[1fr_0.85fr]">
            <div className="space-y-8">
              <Block label="PROBLEM" accent={p.accent}>
                <p className="text-sm leading-relaxed text-muted">{p.problem}</p>
              </Block>
              <Block label="SOLUTION" accent={p.accent}>
                <p className="text-sm leading-relaxed text-ink/90">{p.solution}</p>
              </Block>
              <Block label="ENGINEERING CONTRIBUTION" accent={p.accent}>
                <ul className="space-y-3">
                  {p.contribution.map((c, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-0.5 font-mono text-[0.7rem]" style={{ color: p.accent }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
              </Block>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl border p-3" style={{ borderColor: `${p.accent}33`, background: `${p.accent}08` }}>
                <Viz />
              </div>

              <Block label="SYSTEM STATUS" accent={p.accent}>
                <div className="grid grid-cols-2 gap-3">
                  {p.status.map((s) => (
                    <div key={s.k} className="rounded-lg border border-hairline bg-void/40 p-3">
                      <div className="mono-label !text-[0.55rem]">{s.k}</div>
                      <div className="mt-1 font-mono text-xs" style={{ color: p.accent }}>
                        {s.v}
                      </div>
                    </div>
                  ))}
                </div>
              </Block>

              <Block label="TECHNOLOGY STACK" accent={p.accent}>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-full border border-hairline px-3 py-1 font-mono text-[0.65rem] text-ink">
                      {t}
                    </span>
                  ))}
                </div>
              </Block>
            </div>
          </div>

          {/* architecture + capabilities */}
          <div className="grid grid-cols-1 gap-8 border-t border-hairline p-6 md:grid-cols-2 md:p-8">
            <Block label="SYSTEM ARCHITECTURE" accent={p.accent}>
              <div className="flex flex-wrap items-center gap-2">
                {p.architecture.map((a, i) => (
                  <span key={a} className="flex items-center gap-2">
                    <span className="rounded-md border border-hairline bg-void/40 px-3 py-1.5 font-mono text-[0.65rem] text-ink">
                      {a}
                    </span>
                    {i < p.architecture.length - 1 && <span style={{ color: p.accent }}>→</span>}
                  </span>
                ))}
              </div>
            </Block>
            <Block label="KEY CAPABILITIES" accent={p.accent}>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {p.capabilities.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-sm text-muted">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.accent }} />
                    {c}
                  </li>
                ))}
              </ul>
            </Block>
          </div>
        </div>
      </div>
    </div>
  )
}

function Block({ label, accent, children }: { label: string; accent: string; children: ReactNode }) {
  return (
    <div>
      <div className="mono-label mb-3 flex items-center gap-2">
        <span className="h-px w-6" style={{ background: accent }} />
        {label}
      </div>
      {children}
    </div>
  )
}

export default function Projects() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
      <SectionHead index="04" kicker="FEATURED WORK" title="Engineering Case Studies" />
      <div className="space-y-6 md:space-y-8">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.no} p={p} i={i} onOpen={() => setOpen(i)} />
        ))}
      </div>
      {open !== null && <DetailModal p={PROJECTS[open]} onClose={() => setOpen(null)} />}
    </section>
  )
}
