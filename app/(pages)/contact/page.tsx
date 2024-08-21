"use client";
import SEO from '@/components/SEO';
import { Passion_One } from 'next/font/google'
import Link from 'next/link';

const passion = Passion_One({ subsets: ['latin'], weight: '400', })


function Privacy() {

    return (
        <main className="flex flex-col min-h-screen w-screen bg-[#F3F4F5] overflow-x-hidden">
            <SEO
                title="Contact US - Tubepay"
                description="you can contact us via email."
                canonical="https://tubepay.live/contact"
            />

            <div className="flex h-[70px] items-center px-[15px] w-screen bg-gradient-to-r from-orange-400 to-pink-500">
                <a href="https://play.google.com/store/apps/details?id=com.earn.tubepay.tubepay">
                    <img src="./logo.png" alt="logo" className='h-[40px]' />
                </a>
                <Link href="/">
                    <p className='text-md font-bold text-gray-700 hover:text-black ml-4' >HOME</p>
                </Link>
            </div>
            <div className="text-black p-8">
                <h1 className='text-3xl' ><strong>TubePay Contact Us</strong></h1><br></br>
                <p><strong> You can contact us via email address tubepay.team@gmail.com</strong></p>
            </div>
        </main>
    )
}

export default Privacy;
