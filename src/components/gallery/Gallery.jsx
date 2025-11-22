'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const portfolioItems = [
  {
    id: 1,
    title: 'Frieren',
    category: 'Digital Art',
    image: '/Frieren.JPG',
  },
  {
    id: 2,
    title: 'Reverie',
    category: 'Digital Art',
    image: '/Reverie.png',
  },
  {
    id: 3,
    title: 'Red',
    category: 'Digital Art',
    image: '/Red.png',
  },
  {
    id: 4,
    title: 'Lucrezia',
    category: 'Digital Art',
    image: '/Lucrezia.PNG',
  },
  {
    id: 5,
    title: 'Snow White',
    category: 'Digital Art',
    image: '/Snow White.PNG',
  },
  {
    id: 6,
    title: 'Spring',
    category: 'Digital Art',
    image: '/Spring.png',
  },
]

const categories = ['All', 'Digital Art', 'Oil & Acrylic', 'Illustration', 'Landscape']

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <div id="gallery" className="min-h-screen flex flex-col items-center px-4 py-24 bg-[#fafafa]">
      <motion.h2 
        className="text-5xl md:text-6xl font-light mb-4 text-center text-gray-900 tracking-tight"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Gallery
      </motion.h2>
      
      <motion.p
        className="text-gray-600 mb-12 text-center max-w-2xl font-light"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        A collection of digital artworks and traditional oil & acrylic paintings
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 text-sm font-light tracking-wide transition-all border ${
              selectedCategory === category
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-600 border-gray-300 hover:border-gray-900 hover:text-gray-900'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative group cursor-pointer gallery-frame"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
              <Image 
                src={item.image} 
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-light text-gray-900 mb-1 tracking-wide">{item.title}</h3>
              <p className="text-sm text-gray-500 font-light">{item.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Gallery

