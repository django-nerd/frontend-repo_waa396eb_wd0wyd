import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyChoose from './components/WhyChoose'
import Services from './components/Services'
import Carriers from './components/Carriers'
import Tracking from './components/Tracking'
import Industries from './components/Industries'
import Testimonials from './components/Testimonials'
import GetStarted from './components/GetStarted'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhyChoose />
        <section id="services"><Services /></section>
        <Carriers />
        <Tracking />
        <Industries />
        <Testimonials />
        <section id="get-started"><GetStarted /></section>
        <section id="faq"><FAQ /></section>
      </main>
      <Footer />
    </div>
  )
}

export default App
