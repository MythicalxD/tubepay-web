"use client";
import type { Metadata } from 'next'
import { Inter, Passion_One } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const passion = Passion_One({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  )
}



