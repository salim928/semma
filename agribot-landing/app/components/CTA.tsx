// app/components/CTA.tsx
'use client'

import { motion } from 'framer-motion'
import { Download, ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&h=1080&fit=crop&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-lime-700/90 via-lime-600/90 to-yellow-600/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
            Join thousands of farmers across Ghana who are already using AgriBOT to increase their yields and profits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-700 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 flex items-center group shadow-lg"
            >
              <Download className="mr-2 w-5 h-5" />
              Download for Android
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-primary-700 transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </div>
          
          <div className="mt-8 text-primary-200">
            <p>Available on Google Play Store • Coming soon to iOS</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}