// app/components/CTA.tsx
'use client'

import { motion } from 'framer-motion'
import { Download, ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20" style={{background: 'linear-gradient(135deg, rgb(101 163 13), rgb(77 124 15), rgb(234 179 8))'}}>
      <div className="max-w-4xl mx-auto px-6 text-center">
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