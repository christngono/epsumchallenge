'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const COLS = 15
const ROWS = 10
const BOOKS = Array.from({ length: COLS * ROWS }, (_, i) => i)

function getDelay(i: number): number {
  const col = i % COLS
  const row = Math.floor(i / COLS)
  return (col + row) * 32
}

function getSize(i: number): number {
  return 52 + ((i * 41 + 17) % 34)
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
            <img
              src="/images/booksvg.svg"
              alt=""
              width={getSize(i)}
              height={getSize(i)}
            />
          </div>
        ))}
      </div>
    </>
  )
}
