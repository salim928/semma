// app/components/Features.tsx
'use client'

import { motion } from 'framer-motion'
import { Bot, ShoppingCart, Users, BarChart3, Smartphone, Shield } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: "AI-Powered Advisory",
    description: "Get personalized farming advice from our advanced AI chatbot trained on agricultural best practices.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: ShoppingCart,
    title: "Digital Marketplace",
    description: "Buy and sell agricultural products directly with farmers, featuring secure payments and order tracking.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Farmer Community",
    description: "Connect with fellow farmers, share experiences, and learn from agricultural experts in your region.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: BarChart3,
    title: "Market Analytics",
    description: "Access real-time market prices, demand forecasts, and agricultural trends to maximize profits.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Intuitive mobile app designed for farmers, accessible even in areas with limited internet connectivity.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "Safe and secure payment processing with multiple payment options including mobile money.",
    color: "from-teal-500 to-green-500"
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1920&h=1080&fit=crop&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-lime-50/85 to-white/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to modernize your agricultural operations and connect with the farming community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const bgColors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-indigo-500', 'bg-pink-500'];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-lime-200"
              >
                <div className={`w-16 h-16 ${bgColors[index]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}