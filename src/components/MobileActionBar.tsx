import { WHATSAPP_URL } from '../config'
import { usePreBook } from '../context/PreBookContext'
export default function MobileActionBar() {
  const { openModal } = usePreBook()
  return (
    <div className="min-[760px]:hidden fixed inset-x-0 bottom-0 z-35 grid grid-cols-2 gap-px bg-line border-t border-line font-pixel text-[17px]">
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-wa text-wa-ink py-[18px] text-center no-underline hover:!text-wa-ink">WhatsApp Group</a>
      <button type="button" onClick={openModal} className="bg-ink text-paper py-[18px] font-pixel text-[17px] border-0 cursor-pointer">Call to Pre-book</button>
    </div>
  )
}
