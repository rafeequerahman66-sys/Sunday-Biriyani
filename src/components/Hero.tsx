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
      <div className="relative flex flex-col lg:flex-row items-center gap-10 max-w-[1400px] w-full py-24 px-5">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-7 lg:flex-1">
        <h1 className="font-pixel text-paper leading-[1.05] tracking-[.02em]" style={{ fontSize: 'clamp(40px, 5.4vw, 92px)' }}>Made With Love. Served With Happiness.</h1>
        <p className="text-paper text-base m-0 leading-[1.6]">
          <strong>Authentic Homemade Kerala Chicken Biriyani.</strong><br />Freshly prepared every Sunday with a mother's love.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
          <PixelButton href={WHATSAPP_URL} external className="bg-paper text-ink border-paper hover:!bg-wa hover:!border-wa hover:!text-wa-ink">Join our WhatsApp group ↗</PixelButton>
          <PixelButton onClick={openModal} className="bg-transparent text-paper border-paper hover:!bg-paper hover:!text-ink">Pre-book now ↘</PixelButton>
        </div>
        </div>
        <img src="/images/hero-pot.webp" alt="Kerala chicken biriyani served in a clay pot" width={1100} height={715} decoding="async" className="w-full max-w-[560px] lg:max-w-none lg:flex-1 lg:w-1/2 h-auto" />
      </div>
    </section>
  )
}
