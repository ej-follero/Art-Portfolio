'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const commissionTypes = [
  {
    title: 'Digital Portrait',
    price: '$150',
    description: 'Custom digital portrait artwork',
    features: ['High resolution', 'Digital file', '2 revisions', '1-2 weeks delivery'],
  },
  {
    title: 'Oil/Acrylic Painting',
    price: '$400+',
    description: 'Traditional painting on canvas',
    features: ['Original artwork', 'Canvas included', '2 revisions', '3-6 weeks delivery'],
  },
  {
    title: 'Digital Illustration',
    price: '$300',
    description: 'Custom digital illustration',
    features: ['High resolution', 'Commercial license', '3 revisions', '2-3 weeks delivery'],
  },
  {
    title: 'Custom Artwork',
    price: 'Custom',
    description: 'Bespoke artwork in your preferred medium',
    features: ['Digital or traditional', 'Flexible pricing', 'Custom timeline', 'Personal consultation'],
  },
]

const Commissions = () => {
  const [selectedType, setSelectedType] = useState(null)

  return (
    <div id="commissions" className="min-h-screen flex flex-col items-center px-4 py-24 bg-[#fafafa]">
      <motion.div
        className="text-center mb-16 max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-light mb-6 text-gray-900 tracking-tight">Commissions</h2>
        <p className="text-lg text-gray-600 font-light">
          Interested in custom artwork? I'm available for commissions. Let's bring your vision to life 
          with a personalized piece created just for you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full mb-12">
        {commissionTypes.map((type, index) => (
          <motion.div
            key={type.title}
            className={`bg-white gallery-frame cursor-pointer transition-all ${
              selectedType === index ? 'ring-2 ring-gray-900' : ''
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedType(index)}
          >
            <h3 className="text-xl font-light mb-2 text-gray-900">{type.title}</h3>
            <p className="text-3xl font-light text-gray-900 mb-3">{type.price}</p>
            <p className="text-gray-600 mb-4 text-sm font-light">{type.description}</p>
            <ul className="space-y-2">
              {type.features.map((feature, i) => (
                <li key={i} className="text-sm text-gray-600 flex items-center font-light">
                  <span className="text-gray-900 mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="max-w-2xl w-full bg-white gallery-frame"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3 className="text-2xl font-light mb-6 text-gray-900">Get Started</h3>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-gray-900 text-gray-900 placeholder-gray-400 font-light"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-gray-900 text-gray-900 placeholder-gray-400 font-light"
            />
          </div>
          <div>
            <select className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-gray-900 text-gray-900 font-light">
              <option>Select Commission Type</option>
              {commissionTypes.map((type) => (
                <option key={type.title}>{type.title}</option>
              ))}
            </select>
          </div>
          <div>
            <textarea
              placeholder="Tell me about your project..."
              rows={4}
              className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-gray-900 text-gray-900 placeholder-gray-400 resize-none font-light"
            />
          </div>
          <motion.button
            type="submit"
            className="w-full px-8 py-4 bg-gray-900 text-white font-light tracking-wide uppercase text-sm hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            Request Commission
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}

export default Commissions

