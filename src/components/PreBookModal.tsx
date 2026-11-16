import { useEffect, useRef } from 'react'
import { PHONES } from '../config'
import { usePreBook } from '../context/PreBookContext'
export default function PreBookModal() {
  const { open, closeModal } = usePreBook()
  const panel = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!open) return
    const prev = document.activeElement as HTMLElement | null
    const focusables = () => Array.from(panel.current!.querySelectorAll<HTMLElement>('a[href],button'))
    focusables()[0]?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return closeModal()
      if (e.key !== 'Tab') return
      const f = focusables(); const first = f[0], last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    const o = document.body.style.overflow; document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = o; prev?.focus() }
  }, [open, closeModal])
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-5" style={{ background: 'rgba(40,8,4,.55)' }} onClick={closeModal}>
      <div ref={panel} role="dialog" aria-modal="true" aria-labelledby="pb-title" className="bg-paper border border-line max-w-[440px] w-full" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-line pl-6 font-pixel text-[22px]">
          <span id="pb-title">Pre-book now</span>
          <button type="button" onClick={closeModal} aria-label="Close" className="w-11 h-11 bg-transparent border-0 cursor-pointer font-pixel text-[26px] text-ink hover:text-line">×</button>
        </div>
        {PHONES.map((p) => (
          <a key={p.num} href={p.tel} className="flex items-center justify-between border-b border-line p-6 no-underline font-pixel text-[26px] hover:bg-paper-dim">
            <span>{p.label}</span><span className="font-mono text-base">Call ↗</span>
          </a>
        ))}
        <p className="m-0 p-6 text-[13px]">Sunday only · Free home delivery</p>
      </div>
    </div>
  )
}
