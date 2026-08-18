/** Three bespoke, animated engineering visualizations — one per project. */

export function RadarViz() {
  const blips = [
    { a: 40, r: 60, id: 'UAV-01' },
    { a: 155, r: 120, id: 'UAV-02' },
    { a: 250, r: 90, id: 'UNK' },
  ]
  return (
    <div className="relative aspect-square w-full">
      <svg viewBox="0 0 300 300" className="h-full w-full">
        <defs>
          <radialGradient id="rk-sweep" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2ee6c4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2ee6c4" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[140, 100, 60, 24].map((r) => (
          <circle key={r} cx="150" cy="150" r={r} fill="none" stroke="rgba(46,230,196,0.18)" strokeWidth="1" />
        ))}
        <line x1="10" y1="150" x2="290" y2="150" stroke="rgba(46,230,196,0.12)" />
        <line x1="150" y1="10" x2="150" y2="290" stroke="rgba(46,230,196,0.12)" />
        <g style={{ transformOrigin: '150px 150px', animation: 'radar-sweep 4s linear infinite' }}>
          <path d="M150 150 L150 10 A140 140 0 0 1 249 51 Z" fill="url(#rk-sweep)" />
        </g>
        {blips.map((b, i) => {
          const rad = (b.a * Math.PI) / 180
          const x = 150 + Math.cos(rad) * b.r
          const y = 150 + Math.sin(rad) * b.r
          const threat = b.id === 'UNK'
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="4" fill={threat ? '#ff5c6c' : '#2ee6c4'} className="anim-led" />
              <circle cx={x} cy={y} r="10" fill="none" stroke={threat ? '#ff5c6c' : '#2ee6c4'} strokeWidth="1" opacity="0.5" />
              <text x={x + 12} y={y + 3} fill={threat ? '#ff5c6c' : '#2ee6c4'} fontSize="7" fontFamily="monospace">
                {b.id}
              </text>
            </g>
          )
        })}
        <circle cx="150" cy="150" r="3" fill="#e8eef7" />
      </svg>
      <div className="mono-label absolute left-3 top-3 !text-[0.55rem]">RADAR · 360°</div>
      <div className="mono-label absolute bottom-3 right-3 !text-[0.55rem] text-[#ff5c6c]">1 THREAT</div>
    </div>
  )
}

export function DroneViz() {
  const parts = [
    { t: 'RADIOLINK F722', c: 'left-[-4%] top-[8%]' },
    { t: 'BRUSHLESS MOTOR', c: 'right-[-6%] top-[24%]' },
    { t: 'ESC', c: 'left-[2%] top-[46%]' },
    { t: 'SERVOS', c: 'right-[0%] top-[58%]' },
    { t: 'Li-Po', c: 'left-[-2%] bottom-[16%]' },
    { t: 'FLIGHT CONTROL', c: 'right-[-8%] bottom-[8%]' },
  ]
  return (
    <div className="relative aspect-square w-full">
      <div className="absolute inset-10 rounded-full blur-2xl" style={{ background: 'radial-gradient(circle,rgba(77,124,255,0.28),transparent 65%)' }} />
      <svg viewBox="0 0 300 300" className="relative h-full w-full">
        <defs>
          <radialGradient id="sphere" cx="38%" cy="34%" r="70%">
            <stop offset="0%" stopColor="#4d7cff" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#1a2340" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#05070b" stopOpacity="0.1" />
          </radialGradient>
        </defs>
        <circle cx="150" cy="150" r="96" fill="url(#sphere)" stroke="rgba(77,124,255,0.5)" strokeWidth="1.4" />
        {/* rotating longitude/latitude cage */}
        <g style={{ transformOrigin: '150px 150px', animation: 'spin-slow 16s linear infinite' }}>
          {[0, 36, 72, 108, 144].map((deg) => (
            <ellipse key={deg} cx="150" cy="150" rx={96 * Math.abs(Math.cos((deg * Math.PI) / 180)) || 6} ry="96" fill="none" stroke="rgba(42,212,238,0.28)" strokeWidth="1" />
          ))}
        </g>
        {[96, 62, 28].map((r, i) => (
          <ellipse key={r} cx="150" cy="150" rx="96" ry={r} fill="none" stroke="rgba(120,170,235,0.18)" strokeWidth="1" transform={`rotate(${i * 4} 150 150)`} />
        ))}
        {/* 360° mobility axes: FORWARD / BACKWARD / LEFT / RIGHT */}
        {[
          { d: 0, t: 'FWD' },
          { d: 90, t: 'RIGHT' },
          { d: 180, t: 'BACK' },
          { d: 270, t: 'LEFT' },
        ].map(({ d, t }) => (
          <g key={d} style={{ transformOrigin: '150px 150px', transform: `rotate(${d}deg)` }}>
            <path d="M150 34 l-5 11 h10 z" fill="#2ad4ee" />
            <text x="150" y="26" fill="#2ad4ee" fontSize="7" fontFamily="monospace" textAnchor="middle" transform={`rotate(${-d} 150 26)`}>
              {t}
            </text>
          </g>
        ))}
        {/* rotation indicator */}
        <g style={{ transformOrigin: '150px 150px', animation: 'radar-sweep 6s linear infinite' }}>
          <path d="M150 118 A32 32 0 0 1 182 150" fill="none" stroke="#2ee6c4" strokeWidth="1.4" />
          <path d="M182 150 l-6 -3 l1 7 z" fill="#2ee6c4" />
        </g>
        <circle cx="150" cy="150" r="5" fill="#2ad4ee" className="anim-led" />
      </svg>
      {parts.map((p) => (
        <span key={p.t} className={`glass anim-float absolute rounded-full px-2.5 py-1 font-mono text-[0.55rem] tracking-[0.15em] text-cyan ${p.c}`} style={{ animationDelay: `${Math.random()}s` }}>
          {p.t}
        </span>
      ))}
    </div>
  )
}

export function RailwayViz() {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-xl">
      <svg viewBox="0 0 300 300" className="h-full w-full">
        {/* perspective track */}
        <polygon points="110,300 190,300 168,90 132,90" fill="none" stroke="rgba(120,170,235,0.35)" strokeWidth="1.5" />
        <line x1="132" y1="90" x2="168" y2="90" stroke="rgba(120,170,235,0.35)" />
        {[110, 150, 200, 260].map((y, i) => {
          const t = (y - 90) / 210
          const x1 = 132 - t * 22
          const x2 = 168 + t * 22
          return <line key={i} x1={x1} y1={y} x2={x2} y2={y} stroke="rgba(120,170,235,0.25)" strokeWidth={1 + t * 2} />
        })}
        {/* scanning beam */}
        <g style={{ animation: 'float-y 3s ease-in-out infinite' }}>
          <rect x="118" y="150" width="64" height="2" fill="#2ad4ee" opacity="0.8" />
          <rect x="118" y="146" width="64" height="10" fill="#2ad4ee" opacity="0.12" />
        </g>
        {/* AI detection boxes */}
        <g>
          <rect x="128" y="176" width="20" height="16" fill="none" stroke="#2ee6c4" strokeWidth="1.2" />
          <text x="128" y="172" fill="#2ee6c4" fontSize="6" fontFamily="monospace">FASTENER 0.94</text>
          <rect x="158" y="120" width="14" height="10" fill="none" stroke="#ff5c6c" strokeWidth="1.2" className="anim-led" />
          <text x="150" y="116" fill="#ff5c6c" fontSize="6" fontFamily="monospace">CRACK 0.88</text>
        </g>
      </svg>
      {/* IMU waveform strip */}
      <div className="absolute inset-x-3 bottom-3 overflow-hidden rounded-md border border-hairline bg-void/60 p-2">
        <div className="mono-label mb-1 !text-[0.5rem]">IMU · VIBRATION</div>
        <svg viewBox="0 0 200 24" className="h-6 w-full" preserveAspectRatio="none">
          <g style={{ animation: 'ecg 3s linear infinite' }}>
            <polyline
              points="0,12 20,12 26,4 32,20 38,12 60,12 66,6 72,18 78,12 100,12 106,4 112,20 118,12 140,12 146,6 152,18 158,12 200,12"
              fill="none"
              stroke="#2ad4ee"
              strokeWidth="1.4"
            />
            <polyline
              points="200,12 220,12 226,4 232,20 238,12 260,12 266,6 272,18 278,12 300,12 306,4 312,20 318,12 340,12 346,6 352,18 358,12 400,12"
              fill="none"
              stroke="#2ad4ee"
              strokeWidth="1.4"
              transform="translate(-200,0)"
            />
          </g>
        </svg>
      </div>
      <div className="mono-label absolute right-3 top-3 !text-[0.55rem] text-teal">YOLO · LIVE</div>
    </div>
  )
}
