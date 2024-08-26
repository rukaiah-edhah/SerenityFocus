import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import Logo from '@/components/Logo'
import Footer from '@/components/Footer'
import { Analytics } from "@vercel/analytics/react"

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Serenity Focus',
  description: 'Productivity Tracking app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={raleway.className}>
        <Logo />
        <main>
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
