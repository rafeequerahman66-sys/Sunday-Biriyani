import { useEffect, useRef, useState } from 'react'
import { HERO_POSTER, HERO_VIDEO, WHATSAPP_URL } from '../config'
import { usePreBook } from '../context/PreBookContext'
import PixelButton from './ui/PixelButton'
export default function Hero() {
  const ref = useRef<HTMLVideoElement>(null)
  const [ready, setReady] = useState(false)
  const { openModal } = usePreBook()
  useEffect(() => { if (ref.current) ref.current.muted = true }, [])
  return (
    <section id="top" className="relative min-h-[88vh] bg-paper-dim flex items-center justify-center overflow-hidden border-b border-line">
      <img src={HERO_POSTER} alt="" width={1920} height={1080} decoding="async" className="absolute inset-0 w-full h-full object-cover bg-paper-dim" />
      <video ref={ref} autoPlay muted loop playsInline preload="auto" poster={HERO_POSTER} aria-hidden="true"
        onLoadedData={() => setReady(true)} onError={() => setReady(false)}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[600ms]" style={{ opacity: ready ? 1 : 0 }}>
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{ background: 'rgba(40,8,4,.42)' }} />
      <div className="relative flex flex-col items-center text-center gap-7 max-w-[1000px] py-24 px-5">
        <h1 className="font-pixel text-paper leading-[1.05] tracking-[.02em]" style={{ fontSize: 'clamp(44px, 8vw, 116px)' }}>Made With Love. Served With Happiness.</h1>
        <p className="text-paper text-base m-0 leading-[1.6]">
          <strong>Authentic Homemade Kerala Chicken Biriyani.</strong><br />Freshly prepared every Sunday with a mother's love.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <PixelButton href={WHATSAPP_URL} external className="bg-paper text-ink border-paper hover:!bg-wa hover:!border-wa hover:!text-wa-ink">Join our WhatsApp group ↗</PixelButton>
          <PixelButton onClick={openModal} className="bg-transparent text-paper border-paper hover:!bg-paper hover:!text-ink">Pre-book now ↘</PixelButton>
        </div>
      </div>
    </section>
  )
}
