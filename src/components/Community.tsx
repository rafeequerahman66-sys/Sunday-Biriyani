import { WHATSAPP_URL } from '../config'
export default function Community() {
  return (
    <section className="border-b border-line">
      <div className="flex flex-col items-center text-center gap-6 py-24 px-5">
        <span className="font-mono text-[20px]">Community</span>
        <h2 className="font-pixel leading-[1.1]" style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}>Be Part of Our Sunday Biriyani Family!</h2>
        <p className="max-w-[520px] m-0 text-base leading-[1.7]">Join our WhatsApp community to receive Sunday menus, pre-order announcements and important updates.</p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block font-pixel text-[22px] no-underline bg-wa text-wa-ink border border-wa-border px-8 py-5 hover:!bg-wa-hover hover:!text-wa-ink hover:-translate-y-0.5">Join our WhatsApp group ↗</a>
      </div>
    </section>
  )
}
