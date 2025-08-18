"use client";
import SEO from '@/components/SEO';
import { Passion_One } from 'next/font/google';
import Link from 'next/link';

const passion = Passion_One({ subsets: ['latin'], weight: '400', })


function Privacy() {

    return (
        <main className="flex flex-col min-h-screen w-screen bg-[#1E1E2F] overflow-x-hidden p-4">
            <nav className="w-full flex justify-between items-center py-4 px-20">
                <div className="text-2xl font-bold"><Link href="/" className="hover:underline">TUBEPAY</Link></div>
                <div className="flex gap-6">
                    <Link href="/earn" className="hover:underline text-yellow-400">Earn</Link>
                    <Link href="/about" className="hover:underline">About</Link>
                    <Link href="/privacy" className="hover:underline">Legal</Link>
                    <Link href="/faq" className="hover:underline">FAQs</Link>
                </div>
            </nav>
            <div className="flex items-start justify-start w-full max-w-6xl mt-[50px] text-3xl p-20">
                Earning Page Coming soon...
            </div>
        </main>
    )
}

export default Privacy;
