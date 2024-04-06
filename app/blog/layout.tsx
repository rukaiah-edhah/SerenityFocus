import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Logo from '@/components/Logo'
import BlogNavbar from '@/components/blog/BlogNavbar'

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
    <html lang="en">
      <body className={inter.className}>
      <Logo />
        <BlogNavbar/>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
