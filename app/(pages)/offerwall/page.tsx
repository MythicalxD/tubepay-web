"use client";
import SEO from '@/components/SEO';
import { Passion_One } from 'next/font/google'
import Link from 'next/link';

const passion = Passion_One({ subsets: ['latin'], weight: '400', })


function About() {

    return (
        <main className="flex flex-col min-h-screen w-screen bg-[#F3F4F5] overflow-x-hidden">
            <iframe src='https://notik.me/coins?api_key=rqHZrGYq2z2bJQ9QozKLkEtBwhMxtr32&pub_id=8kUzVg&app_id=8ZfM39Uzu5&user_id={YOUR_UNIQUE_USER_ID}'></iframe>
        </main >
    )
}

export default About;
