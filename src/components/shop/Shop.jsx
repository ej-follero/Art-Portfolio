'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const shopItems = [
  {
    id: 1,
    title: 'Print 1',
    price: '$29.99',
    image: '',
    category: 'Print',
  },
  {
    id: 2,
    title: 'Print 2',
    price: '$29.99',
    image: '',
    category: 'Print',
  },
  {
    id: 3,
    title: 'Print 3',
    price: '$29.99',
    image: '',
    category: 'Print',
  },
  {
    id: 4,
    title: 'Print 4',
    price: '$29.99',
    image: '',
    category: 'Print',
  },
  {
    id: 5,
    title: 'Print 5',
    price: '$34.99',
    image: '',
    category: 'Print',
  },
  {
    id: 6,
    title: 'Print 6',
    price: '$29.99',
    image: '',
    category: 'Print',
  },
]

const Shop = () => {
  return (
    <div id="shop" className="min-h-screen flex flex-col items-center px-4 py-24 bg-white">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-light mb-6 text-gray-900 tracking-tight">Shop</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
          Purchase high-quality prints of my artwork. Each print is carefully produced to ensure 
          the highest quality and vibrant colors.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {shopItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white gallery-frame group"
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
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2 font-light">{item.category}</p>
              <h3 className="text-lg font-light mb-3 text-gray-900">{item.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-xl font-light text-gray-900">{item.price}</span>
                <motion.button
                  className="px-6 py-2 bg-gray-900 text-white font-light tracking-wide uppercase text-xs hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-gray-500 text-sm mt-12 text-center font-light"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        All prints are shipped worldwide. Digital downloads available upon request.
      </motion.p>
    </div>
  )
}

export default Shop

