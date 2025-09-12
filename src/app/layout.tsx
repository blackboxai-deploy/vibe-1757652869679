import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InstaClone - Share Your Moments',
  description: 'A modern Instagram-like social media app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          {/* Main Content */}
          <main className="pb-16 md:pb-0 md:pl-64">
            {children}
          </main>
          
          {/* Navigation */}
          <NavBar />
        </div>
      </body>
    </html>
  )
}