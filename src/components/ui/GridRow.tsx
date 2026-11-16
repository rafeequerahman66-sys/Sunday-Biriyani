import type { ReactNode } from 'react'
export default function GridRow({ min, children }: { min: number; children: ReactNode }) {
  return (
    <div className="grid gap-px bg-line border-t border-line" style={{ gridTemplateColumns: `repeat(auto-fit,minmax(min(${min}px,100%),1fr))` }}>
      {children}
    </div>
  )
}
