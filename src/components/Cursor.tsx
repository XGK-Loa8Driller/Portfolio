import { useEffect, useRef, useState } from 'react'

/**
 * Sophisticated HUD cursor: a fine ring that lags slightly behind a precise
 * dot, snapping tighter and glowing over interactive elements. Desktop only.
 */
export default function Cursor() {
  const ring = useRef<HTMLDivElement | null>(null)
  const dot = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches === false) return
    document.documentElement.classList.add('cursor-none-root')

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ringPos = { ...pos }
    let raf = 0

    const move = (e: MouseEvent) => {
      pos.x = e.clientX
      pos.y = e.clientY
      setVisible(true)
      const el = e.target as HTMLElement
      setActive(!!el.closest('a, button, [data-hover]'))
    }

    const loop = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.18
      ringPos.y += (pos.y - ringPos.y) * 0.18
      if (ring.current)
        ring.current.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%, -50%)`
      if (dot.current)
        dot.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    window.addEventListener('mousemove', move)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', move)
      document.documentElement.classList.remove('cursor-none-root')
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block" aria-hidden>
      <div
        ref={ring}
        className="fixed left-0 top-0 rounded-full border transition-[width,height,border-color,background-color,opacity] duration-200"
        style={{
          width: active ? 44 : 30,
          height: active ? 44 : 30,
          borderColor: active ? 'rgba(42,212,238,0.9)' : 'rgba(120,170,235,0.5)',
          background: active ? 'rgba(42,212,238,0.08)' : 'transparent',
          boxShadow: active ? '0 0 22px rgba(42,212,238,0.35)' : 'none',
          opacity: visible ? 1 : 0,
        }}
      />
      <div
        ref={dot}
        className="fixed left-0 top-0 h-[5px] w-[5px] rounded-full bg-cyan"
        style={{ opacity: visible ? 1 : 0, boxShadow: '0 0 8px rgba(42,212,238,0.8)' }}
      />
    </div>
  )
}
