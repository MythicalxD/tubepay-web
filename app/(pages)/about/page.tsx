"use client";
import SEO from '@/components/SEO';
import { Passion_One } from 'next/font/google';
import Link from 'next/link';

const passion = Passion_One({ subsets: ['latin'], weight: '400' });

function About() {
    return (
        <main className="flex flex-col min-h-screen w-screen bg-[#1E1E2F] text-white overflow-x-hidden items-center">
            <SEO
                title="About Us - TubePay"
                description="Learn about TubePay, our vision, and the technology behind it. Discover how we ensure secure transactions and user privacy while delivering top-quality mobile experiences."
                canonical="https://tubepay.live/about"
            />

            {/* Navigation Bar */}
            <nav className="w-full flex justify-between items-center py-4 max-w-6xl">
                <div className="text-2xl font-bold"><Link href="/" className="hover:underline">TUBEPAY</Link></div>
                <div className="flex gap-6">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/about" className="hover:underline">About</Link>
                    <Link href="/privacy" className="hover:underline">Legal</Link>
                    <Link href="/faq" className="hover:underline">FAQs</Link>
                </div>
            </nav>

            {/* Main Content */}
            <div className="text-gray-300 p-6 md:p-12 max-w-5xl mx-auto">
                <h1 className='text-4xl font-extrabold text-yellow-400 text-start mb-6'>About TubePay</h1>

                <section className="space-y-6 text-sm md:text-base leading-relaxed">
                    <p>At <b>TubePay</b>, we bring together innovation, passion, and technology to create a high-quality mobile experience that benefits our users. Our team, composed of dedicated developers and AI enthusiasts, is committed to delivering an app that allows users to earn rewards while watching videos.</p>

                    <h2 className="text-xl font-bold text-yellow-400 mt-6">📌 Our Mission</h2>
                    <p>Our goal is to provide a <b>secure and transparent</b> platform where users can <b>earn free rewards</b> in their spare time. With the integration of AI and smart technologies, we ensure that your experience is smooth, engaging, and rewarding.</p>

                    <h2 className="text-xl font-bold text-yellow-400 mt-6">📌 The Technology Behind TubePay</h2>
                    <p>TubePay is built on a <b>robust tech stack</b> combining <b>SQL database management, NodeJS, and Flutter</b>. This ensures a seamless and reliable user experience. Here’s how it works:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>💾 <b>SQL Databases</b> – Secure and scalable data storage.</li>
                        <li>⚙️ <b>NodeJS Backend</b> – Fast and efficient data processing.</li>
                        <li>📱 <b>Flutter Frontend</b> – Smooth and responsive UI.</li>
                        <li>🔒 <b>Enhanced Security</b> – Advanced encryption for data protection.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-yellow-400 mt-6">📌 Privacy & Security</h2>
                    <p>We prioritize <b>user privacy</b> and <b>data security</b>. All advertisements and offers are carefully selected to enhance the ecosystem without compromising your data.</p>

                    <h2 className="text-xl font-bold text-yellow-400 mt-6">📌 Monetization & Rewards</h2>
                    <p>TubePay generates revenue through ads, allowing us to <b>provide free rewards</b> to our users. You can <b>earn rewards</b> by:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>🎥 Watching videos and engaging with content.</li>
                        <li>🎰 Playing <b>Lucky Number & Spin Wheel</b>.</li>
                        <li>📢 Inviting friends and earning referral bonuses.</li>
                        <li>💳 Redeeming points via <b>PayPal, Amazon Gift Cards, and more!</b></li>
                    </ul>

                    <h2 className="text-xl font-bold text-yellow-400 mt-6">📌 Our Commitment to Users</h2>
                    <p>Our development is driven by <b>user feedback</b>. We conduct surveys, beta testing, and direct interactions to improve TubePay continuously. Your suggestions help shape the future of the app.</p>

                    <h2 className="text-xl font-bold text-yellow-400 mt-6">📌 Join Us</h2>
                    <p>We invite you to be a part of our journey. <b>TubePay is more than just an app—it’s a community!</b> 🚀</p>
                </section>

                {/* Contact Button */}
                <div className="mt-8 text-center">
                    <a href="mailto:team.tubepay@gmail.com?subject=Inquiry&body=Tell us more about what you want..." className="text-sm font-bold text-orange-400 border-2 border-orange-500 rounded-md px-6 py-2 hover:bg-orange-500 hover:text-white transition">
                        📩 Contact Us
                    </a>
                </div>
            </div>
        </main>
    );
}

export default About;
