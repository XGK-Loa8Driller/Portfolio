/** Fixed cinematic backdrop: deep gradient, drifting circuit grid, ambient glows. */
export default function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 700px at 78% -8%, rgba(46,60,120,0.35), transparent 60%),' +
            'radial-gradient(900px 600px at 6% 12%, rgba(20,90,110,0.28), transparent 55%),' +
            'radial-gradient(1000px 900px at 50% 120%, rgba(70,50,140,0.22), transparent 60%),' +
            'linear-gradient(180deg, #05070b, #05070b)',
        }}
      />
      {/* drifting technical grid */}
      <div className="hud-grid anim-drift absolute -inset-24 opacity-70" />
      {/* faint horizon lines */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.25) 4px)',
        }}
      />
      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(120% 120% at 50% 40%, transparent 55%, #05070b 100%)' }}
      />
    </div>
  )
}
