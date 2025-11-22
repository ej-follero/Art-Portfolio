'use client'

import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-[#1a1a2e] to-[#0c0c1d]">
      <motion.div
        className="max-w-2xl w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-8">Get In Touch</h2>
        <p className="text-xl text-gray-400 mb-12">
          Let's create something amazing together
        </p>
        
        <motion.form
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.input
            type="text"
            placeholder="Your Name"
            className="w-full px-6 py-4 bg-[#1a1a2e] border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            className="w-full px-6 py-4 bg-[#1a1a2e] border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            placeholder="Your Message"
            rows={6}
            className="w-full px-6 py-4 bg-[#1a1a2e] border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold text-lg"
            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(168, 85, 247, 0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  )
}

export default Contact

