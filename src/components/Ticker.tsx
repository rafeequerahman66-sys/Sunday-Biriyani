const ITEMS = ['Sunday Only', 'Free Home Delivery', 'Potheri & SRM University', 'Homemade Kerala Chicken Biriyani']
export default function Ticker() {
  return (
    <div className="border-b border-line overflow-hidden whitespace-nowrap font-pixel text-lg py-3" aria-label="Sunday Only. Free Home Delivery. Potheri and SRM University. Homemade Kerala Chicken Biriyani.">
      <div className="inline-flex animate-marquee" aria-hidden="true">
        {[0, 1, 2, 3].map((k) => (
          <span key={k} className="inline-flex items-center gap-12 pr-12">
            {ITEMS.map((t) => (<span key={t} className="inline-flex items-center gap-12">{t}<span className="text-[22px]">☼</span></span>))}
          </span>
        ))}
      </div>
    </div>
  )
}
