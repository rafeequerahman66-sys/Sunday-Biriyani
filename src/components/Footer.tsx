import { PHONES, WHATSAPP_URL } from '../config'
import GridRow from './ui/GridRow'
export default function Footer() {
  return (
    <footer className="max-[759px]:pb-16">
      <GridRow min={260}>
        <div className="bg-paper p-12 flex flex-col gap-3">
          <span className="font-pixel text-[32px]">SUNDAY BIRIYANI</span>
          <span className="text-sm">A Taste of Homemade Happiness ❤️</span>
        </div>
        <div className="bg-paper p-12 text-sm leading-[1.7]">
          <p className="m-0">Homemade Kerala-Style Chicken Biriyani.</p>
          <p className="m-0">Serving Potheri and SRM University surroundings.</p>
          <p className="m-0">Sunday Only | Free Home Delivery.</p>
        </div>
        <nav className="bg-paper p-12 text-sm leading-[1.7] flex flex-col" aria-label="Contact">
          <span className="font-bold">Contact</span>
          {PHONES.map((p) => <a key={p.num} href={p.tel}>{p.label}</a>)}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp Community ↗</a>
        </nav>
        <div className="bg-paper p-6 text-center font-mono text-xs" style={{ gridColumn: '1 / -1' }}>Copyright © 2026 Sunday Biriyani. All rights reserved.</div>
      </GridRow>
    </footer>
  )
}
