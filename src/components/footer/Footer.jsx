'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-light mb-4 text-gray-900">Art by EJ Yu</h3>
            <p className="text-gray-600 text-sm font-light">
              Digital artist creating stunning visual experiences through art and design.
            </p>
          </div>
          
          <div>
            <h4 className="font-light mb-4 text-gray-900">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-600 font-light">
              <li><a href="#home" className="hover:text-gray-900 transition-colors">Home</a></li>
              <li><a href="#gallery" className="hover:text-gray-900 transition-colors">Gallery</a></li>
              <li><a href="#about" className="hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="#commissions" className="hover:text-gray-900 transition-colors">Commissions</a></li>
              <li><a href="#shop" className="hover:text-gray-900 transition-colors">Shop</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-light mb-4 text-gray-900">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600 font-light">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Imprint</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-light mb-4 text-gray-900">Information</h4>
            <ul className="space-y-2 text-sm text-gray-600 font-light">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Shipment Information</a></li>
              <li><a href="mailto:contact@artportfolio.com" className="hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-light">
          <p>© {new Date().getFullYear()} Art by EJ Yu. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
              Instagram
            </a>
            <a href="mailto:contact@artbyejyu.com" className="hover:text-gray-900 transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

