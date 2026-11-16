import GridRow from './ui/GridRow'
import Eyebrow from './ui/Eyebrow'
const ITEMS = [
  { l: 'Delivery Area', e: '📍', v: 'Potheri & SRM University surroundings.' },
  { l: 'Delivery Charges', e: '🛵', v: 'FREE HOME DELIVERY.' },
  { l: 'Availability', e: '📅', v: 'SUNDAY ONLY.' },
]
export default function Delivery() {
  return (
    <section className="border-b border-line">
      <h2 className="font-pixel text-center leading-[1.1] pt-[72px] pb-24 px-5" style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}>Your Sunday Biriyani, Delivered With Love!</h2>
      <GridRow min={240}>
        {ITEMS.map((i) => (
          <div key={i.l} className="bg-paper pt-10 px-12 pb-12 flex flex-col gap-10">
            <Eyebrow left={i.l} right={i.e} />
            <p className="font-pixel m-0 leading-[1.2]" style={{ fontSize: 'clamp(24px, 2.6vw, 34px)' }}>{i.v}</p>
          </div>
        ))}
      </GridRow>
    </section>
  )
}
