import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import WhyLovely from './components/WhyLovely'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Location from './components/Location'
import SocialNewsletter from './components/SocialNewsletter'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="bg-cream font-inter overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        {/* Products includes BestSellers + PromoBanner + full catalog */}
        <Products />
        <About />
        <WhyLovely />
        <Gallery />
        <Testimonials />
        <Contact />
        <Location />
        <SocialNewsletter />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
