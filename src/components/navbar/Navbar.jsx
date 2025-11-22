'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Commissions', href: '#commissions' },
    { name: 'Shop', href: '#shop' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.nav 
      className="h-20 fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <motion.a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="text-xl font-bold text-gray-900 cursor-pointer tracking-tight"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Art by EJ Yu
        </motion.a>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`text-sm font-medium transition-colors tracking-wide ${
                activeSection === item.href.substring(1)
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              whileHover={{ y: -2 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.a 
            href="hhttps://www.instagram.com/shigatsuuuui/" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Image src="/instagram.png" alt="Instagram" width={20} height={20} className="w-5 h-5 opacity-70 hover:opacity-100" />
          </motion.a>
          <motion.a 
            href="https://www.facebook.com/shigatsu.customs/" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Image src="/facebook.png" alt="Facebook" width={20} height={20} className="w-5 h-5 opacity-70 hover:opacity-100" />
          </motion.a>
          <motion.a 
            href="https://www.tiktok.com/@shigatsuuuui" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Image src="/tiktok.png" alt="Tiktok" width={20} height={20} className="w-5 h-5 opacity-70 hover:opacity-100" />
          </motion.a>
          <motion.a 
            href="https://x.com/shigatsuuuui" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Image src="/x.png" alt="X" width={20} height={20} className="w-5 h-5 opacity-70 hover:opacity-100" />
          </motion.a>
          <motion.a 
            href="https://cara.app/shigatsuuuui" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Image src="/cara.png" alt="Cara" width={20} height={20} className="w-5 h-5 opacity-70 hover:opacity-100" />
          </motion.a>
          <motion.a 
            href="https://shigatsuuuui.artstation.com/" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Image src="/artstation.png" alt="Artstation" width={20} height={20} className="w-5 h-5 opacity-70 hover:opacity-100" />
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
