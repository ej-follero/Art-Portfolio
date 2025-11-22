'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const portfolioItems = [
  {
    id: 1,
    title: 'Cosmic Dreams',
    category: 'Digital Art',
    image: '/planets.png',
  },
  {
    id: 2,
    title: 'Human Connection',
    category: 'Illustration',
    image: '/people.webp',
  },
  {
    id: 3,
    title: 'Mountain Serenity',
    category: 'Landscape',
    image: '/mountains.png',
  },
  {
    id: 4,
    title: 'Starry Night',
    category: 'Digital Art',
    image: '/stars.png',
  },
  {
    id: 5,
    title: 'Heroic Vision',
    category: 'Concept Art',
    image: '/hero.png',
  },
  {
    id: 6,
    title: 'Solar Flare',
    category: 'Digital Art',
    image: '/sun.png',
  },
]

const Portfolio = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 py-20 bg-[#0c0c1d]">
      <motion.h2 
        className="text-5xl md:text-6xl font-bold mb-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Portfolio
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative group cursor-pointer overflow-hidden rounded-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-full h-64">
              <Image 
                src={item.image} 
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.category}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio

