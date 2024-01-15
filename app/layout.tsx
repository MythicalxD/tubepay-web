import { Inter } from 'next/font/google'
import './globals.css'
import SchemaOrg from '@/components/schema';
import { Metadata } from 'next';
import SEO from '@/components/SEO';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tubepay official',
  description: 'Earn free rewards by watching videos on Tubepay. Download trusted application and start earning now',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Earn free rewards by watching videos on Tubepay. Download trusted application and start earning now."></meta>
        <link rel="canonical" href="https://tubepay.live/"></link>
        <title>Tubepay watch and Earn (Tubepay official)</title>
      </Head>
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}



