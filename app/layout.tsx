import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Logo from '@/components/Logo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Serenity Focus',
  description: 'Producitivty Tracking app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Logo />
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
