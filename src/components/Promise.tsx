import GridRow from './ui/GridRow'
import Eyebrow from './ui/Eyebrow'
const CARDS = [
  { n: '#01', img: '/images/promise-1.jpg', t: 'Homemade With Love', b: 'Prepared with care and the warmth of homemade cooking.' },
  { n: '#02', img: '/images/promise-2.jpg', t: 'Authentic Kerala Flavours', b: 'Enjoy delicious Kerala-style Chicken Biriyani with aromatic spices.' },
  { n: '#03', img: '/images/promise-3.jpg', t: 'Freshly Prepared', b: 'Our biriyani is prepared for Sunday service.' },
]
export default function Promise() {
  return (
    <section className="border-b border-line">
      <h2 className="font-pixel text-center leading-[1.1] pt-[72px] pb-24 px-5" style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}>Not Just Biriyani. A Little Taste of Home.</h2>
      <GridRow min={260}>
        {CARDS.map((c) => (
          <div key={c.n} className="bg-paper pt-14 px-12 pb-10 min-h-[460px] flex flex-col items-center gap-9">
            <Eyebrow left="Promise" right={c.n} />
            <img src={c.img} alt="" width={180} height={180} loading="lazy" decoding="async" className="w-[180px] h-[180px] rounded-full object-cover bg-paper-dim" style={{ borderRadius: '9999px' }} />
            <h3 className="font-mono font-normal text-[22px] text-center m-0">{c.t}</h3>
            <p className="text-sm text-center max-w-[280px] m-0 leading-[1.6]">{c.b}</p>
            <span className="text-[30px] self-end mt-auto" aria-hidden="true">↘</span>
          </div>
        ))}
      </GridRow>
    </section>
  )
}
