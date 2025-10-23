// app/components/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Smartphone, Users, TrendingUp } from 'lucide-react'
import ThreeScene from './ThreeScene'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{background: 'linear-gradient(135deg, rgb(247 254 231), rgb(255 255 255), rgb(254 252 232))'}}>
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Revolutionizing</span>
            <br />
            Agriculture with AI
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Smarter advice. Bigger harvests. Empowering Ghana&apos;s farmers with AI-driven insights, 
            digital marketplace, and community-powered agricultural solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-primary group">
              Download App
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary group">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </button>
          </div>
          
          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { icon: Smartphone, text: "Mobile App" },
              { icon: Users, text: "Community" },
              { icon: TrendingUp, text: "AI Analytics" }
            ].map((item, index) => (
              <div key={index} className="glass-effect rounded-full px-6 py-3 flex items-center space-x-2">
                <item.icon className="w-5 h-5 text-lime-600" />
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-lime-200 rounded-full opacity-50 animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-yellow-200 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '2s' }}></div>
    </section>
  )
}