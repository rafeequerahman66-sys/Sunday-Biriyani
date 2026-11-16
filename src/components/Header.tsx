import { usePreBook } from '../context/PreBookContext'
export default function Header() {
  const { openModal } = usePreBook()
  return (
    <header className="sticky top-0 z-30 bg-paper border-b border-line px-5 py-2.5 font-pixel text-lg flex justify-between items-center gap-4">
      <a href="#top" className="underline">Sunday Biriyani :)</a>
      <span className="hidden min-[760px]:block">This Sunday: Chicken Biriyani • Free Home Delivery</span>
      <button type="button" onClick={openModal} className="font-pixel text-lg bg-transparent border-0 p-0 cursor-pointer text-ink hover:text-line hover:underline">Pre-book</button>
    </header>
  )
}
