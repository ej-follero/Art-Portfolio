'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about" className="min-h-screen flex items-center px-4 py-24 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="gallery-frame"
        >
          <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
            <Image 
              src="/Artist Photo.jpg" 
              alt="Artist"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-gray-900 tracking-tight">About</h2>
          <p className="text-lg text-gray-700 leading-relaxed font-light">
            Welcome to my art portfolio. I'm a passionate artist working primarily in digital art, 
            with a love for traditional painting in oil and acrylic. My work bridges the gap between 
            modern digital techniques and classical painting methods, bringing creative visions to life 
            across both mediums.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-light">
            Whether working digitally or with traditional paints, I strive to create pieces that 
            resonate with viewers and tell compelling stories. Each artwork is crafted with attention 
            to detail and a commitment to artistic excellence, exploring the unique qualities of each 
            medium while maintaining a cohesive artistic voice.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-light border border-gray-200">Digital Art</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-light border border-gray-200">Oil Painting</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-light border border-gray-200">Acrylic Painting</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-light border border-gray-200">Mixed Media</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About

