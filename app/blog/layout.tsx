import { Inter } from 'next/font/google'
import '../globals.css'
import Logo from '@/components/Logo'
import BlogNavbar from '@/components/blog/BlogNavbar'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main>
        {children}
      </main>
    </>
  )
}
