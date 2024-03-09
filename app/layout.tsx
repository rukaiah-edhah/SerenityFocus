import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Logo from '@/components/Logo'
import Footer from '@/components/Footer'
import UserAuth from '@/components/UserAuth'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <Logo />
        <Navbar>
          <UserAuth />
        </Navbar>
        <main>
          {children}
        </main>
      </body>
      <footer>
        <Footer />
      </footer>
    </html>
  )
}
