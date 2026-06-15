'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const COLS = 8
const ROWS = 5
const BOOKS = Array.from({ length: COLS * ROWS }, (_, i) => i)

function getDelay(i: number): number {
  const col = i % COLS
  const row = Math.floor(i / COLS)
  return (col + row) * 55
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [active, setActive] = useState(false)
  const isFirst = useRef(true)

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      return
    }
    setActive(true)
    const t = setTimeout(() => setActive(false), 1750)
    return () => clearTimeout(t)
  }, [pathname])

  return (
    <>
      {children}
      <div
        className={`page-transition-overlay${active ? ' active' : ''}`}
        aria-hidden="true"
      >
        {active && BOOKS.map((i) => (
          <div
            key={i}
            className="book-icon"
            style={{ animationDelay: `${getDelay(i)}ms` }}
          >
            <img src="/images/booksvg.svg" alt="" />
          </div>
        ))}
      </div>
    </>
  )
}
