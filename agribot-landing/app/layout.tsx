// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://semma-ai.vercel.app'),
  title: 'SEMMA-AI - Smarter Advice. Bigger Harvests.',
  description: 'AI-powered agricultural platform revolutionizing farming in Ghana with smart insights, digital marketplace, and community features.',
  keywords: 'agriculture, AI, farming, Ghana, marketplace, agritech, SEMMA-AI',
  icons: {
    icon: [
      { url: '/semma-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/semma-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/semma-logo.png',
    shortcut: '/semma-logo.png',
  },
  openGraph: {
    title: 'SEMMA-AI - Smarter Advice. Bigger Harvests.',
    description: 'AI-powered agricultural platform revolutionizing farming in Ghana with smart insights and digital marketplace.',
    images: ['/semma-logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50`}>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        {children}
      </body>
    </html>
  )
}