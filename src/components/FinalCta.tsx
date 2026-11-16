import { WHATSAPP_URL } from '../config'
import { usePreBook } from '../context/PreBookContext'
import PixelButton from './ui/PixelButton'
export default function FinalCta() {
  const { openModal } = usePreBook()
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-line bg-paper-dim">
      <img src="/images/final-bg.jpg" alt="" width={1920} height={1080} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: 'rgba(40,8,4,.45)' }} />
      <div className="relative flex flex-col items-center text-center gap-7 max-w-[1000px] py-24 px-5">
        <h2 className="font-pixel text-paper leading-[1.1]" style={{ fontSize: 'clamp(38px, 6vw, 88px)' }}>Make Your Sunday More Delicious!</h2>
        <p className="text-paper text-base m-0">Homely Taste. Mother's Love. Sunday Happiness.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <PixelButton href={WHATSAPP_URL} external className="bg-paper text-ink border-paper hover:!bg-wa hover:!border-wa hover:!text-wa-ink">Join our WhatsApp group ↗</PixelButton>
          <PixelButton onClick={openModal} className="bg-transparent text-paper border-paper hover:!bg-paper hover:!text-ink">Pre-book now ↘</PixelButton>
        </div>
      </div>
    </section>
  )
}
