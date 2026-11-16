import { PHONES } from '../config'
import GridRow from './ui/GridRow'
import Eyebrow from './ui/Eyebrow'
export default function PreBook() {
  return (
    <section id="prebook" className="border-b border-line">
      <div className="flex flex-col items-center text-center gap-6 pt-[72px] pb-24 px-5">
        <h2 className="font-pixel leading-[1.1]" style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}>Don't Miss Your Sunday Biriyani!</h2>
        <p className="max-w-[520px] m-0 text-base leading-[1.7]">Plan your Sunday meal in advance. Call us and reserve your homemade Chicken Biriyani.</p>
      </div>
      <GridRow min={280}>
        {PHONES.map((p) => (
          <div key={p.num} className="bg-paper p-12 flex flex-col gap-10">
            <Eyebrow left="Contact" right={p.num} />
            <p className="font-pixel m-0" style={{ fontSize: 'clamp(28px, 3.4vw, 44px)' }}>{p.label}</p>
            <div><a href={p.tel} className="inline-block font-pixel text-lg no-underline bg-ink text-paper px-[22px] py-3.5 hover:!bg-line hover:!text-paper">Call now ↗</a></div>
          </div>
        ))}
      </GridRow>
    </section>
  )
}
