'use client'

import Navbar from '@/components/navbar/Navbar'
import Hero from '@/components/hero/Hero'
import Gallery from '@/components/gallery/Gallery'
import About from '@/components/about/About'
import Commissions from '@/components/commissions/Commissions'
import Shop from '@/components/shop/Shop'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <main className="relative z-10">
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Commissions />
      <Shop />
      <Footer />
    </main>
  )
}

