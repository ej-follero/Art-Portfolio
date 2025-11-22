'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  const scrollToGallery = () => {
    const element = document.getElementById('gallery')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div id="home" className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#fafafa]">
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          className="text-6xl md:text-8xl font-light mb-4 text-gray-900 tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Art by EJ Yu
        </motion.h1>
        
        <motion.p 
          className="text-2xl md:text-3xl text-gray-600 mb-12 font-light tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Digital Art & Traditional Painting
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            onClick={scrollToGallery}
            className="px-8 py-3 bg-gray-900 text-white rounded-sm font-light text-sm tracking-wider uppercase hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Gallery
          </motion.button>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  )
}

export default Hero

