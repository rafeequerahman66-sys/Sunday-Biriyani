import { PreBookProvider } from './context/PreBookContext'
import Header from './components/Header'
import Ticker from './components/Ticker'
import Hero from './components/Hero'
import Promise from './components/Promise'
import Speciality from './components/Speciality'
import Delivery from './components/Delivery'
import Community from './components/Community'
import PreBook from './components/PreBook'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'
import MobileActionBar from './components/MobileActionBar'
import PreBookModal from './components/PreBookModal'
export default function App() {
  return (
    <PreBookProvider>
      <div className="max-w-[1600px] mx-auto border-x border-line">
        <Header />
        <main>
          <Ticker />
          <Hero />
          <Promise />
          <Speciality />
          <Delivery />
          <Community />
          <PreBook />
          <FinalCta />
        </main>
        <Footer />
      </div>
      <WhatsAppFab />
      <MobileActionBar />
      <PreBookModal />
    </PreBookProvider>
  )
}
