'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    title: 'Digital Art',
    description: 'Creating stunning digital artworks with modern tools and techniques',
    icon: '/planets.png',
  },
  {
    title: 'Illustration',
    description: 'Beautiful illustrations that tell stories and capture emotions',
    icon: '/people.webp',
  },
  {
    title: 'Concept Art',
    description: 'Bringing ideas to life through creative concept designs',
    icon: '/mountains.png',
  },
]

const Services = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-[#0c0c1d] to-[#1a1a2e]">
      <motion.h2 
        className="text-5xl md:text-6xl font-bold mb-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Services
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#1a1a2e] rounded-2xl p-8 hover:bg-[#16213e] transition-colors duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
              <Image 
                src={service.icon} 
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Services

