import { WHATSAPP_URL } from '../config'
import WhatsAppIcon from './ui/WhatsAppIcon'
export default function WhatsAppFab() {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Join our WhatsApp group"
      className="fixed right-5 bottom-[84px] min-[760px]:bottom-6 z-40 w-[60px] h-[60px] bg-wa grid place-items-center shadow-[0_4px_16px_rgba(99,41,13,.28)] hover:scale-[1.08]"
      style={{ borderRadius: '9999px' }}>
      <WhatsAppIcon />
    </a>
  )
}
