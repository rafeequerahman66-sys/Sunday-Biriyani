import GridRow from './ui/GridRow'
import Eyebrow from './ui/Eyebrow'
export default function Speciality() {
  return (
    <section className="border-b border-line">
      <GridRow min={320}>
        <div className="bg-paper-dim min-h-[520px]">
          <img src="/images/speciality-pot.jpg" alt="Kerala Chicken Biriyani in a traditional clay pot" width={1000} height={1040} loading="lazy" decoding="async" className="w-full h-full min-h-[520px] object-cover bg-paper-dim" />
        </div>
        <div className="bg-paper pt-14 px-12 pb-10 flex flex-col justify-between gap-10">
          <Eyebrow left="Sunday Special" right="#01" />
          <h2 className="font-pixel leading-[1.1]" style={{ fontSize: 'clamp(36px,5vw,68px)' }}>Sunday Special – Chicken Biriyani</h2>
          <p className="max-w-[520px] m-0 text-base leading-[1.7]">Fragrant rice, delicious chicken, aromatic spices and authentic homely flavours come together to create a memorable Sunday meal.</p>
          <span className="text-[30px] self-end" aria-hidden="true">↘</span>
        </div>
      </GridRow>
    </section>
  )
}
