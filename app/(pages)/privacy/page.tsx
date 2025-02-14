"use client";
import SEO from '@/components/SEO';
import { Passion_One } from 'next/font/google';
import Link from 'next/link';

const passion = Passion_One({ subsets: ['latin'], weight: '400' });

function Privacy() {
    return (
        <main className="flex flex-col min-h-screen w-screen bg-[#1E1E2F] text-white overflow-x-hidden">
            {/* SEO Optimization */}
            <SEO
                title="Privacy Policy - TubePay"
                description="Your privacy matters to us at TubePay. Learn how we handle your data securely and transparently. We collect minimal information to improve your experience."
                canonical="https://tubepay.live/privacy"
            />

            {/* Navigation Bar */}
            <nav className="w-full flex justify-between items-center py-4 px-20">
                <div className="text-2xl font-bold"><Link href="/" className="hover:underline">TUBEPAY</Link></div>
                <div className="flex gap-6">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/about" className="hover:underline">About</Link>
                    <Link href="/privacy" className="hover:underline">Legal</Link>
                    <Link href="/faq" className="hover:underline">FAQs</Link>
                </div>
            </nav>

            {/* Privacy Policy Content */}
            <div className="max-w-4xl mx-auto bg-[#222233] p-6 md:p-12 rounded-lg shadow-lg mt-6">
                <h1 className="text-3xl font-bold text-yellow-400 text-center mb-6">TubePay Privacy Policy</h1>

                <section className="space-y-6 text-sm md:text-base leading-relaxed">
                    <h2 className="text-lg font-semibold text-yellow-400">📌 Data Collection</h2>
                    <p>To provide you with the best experience, TubePay requires users to provide their email address during registration. This is necessary for linking in-app progress and ensuring secure authentication.</p>

                    <h2 className="text-lg font-semibold text-yellow-400">📌 Data Use</h2>
                    <p>Your email is used solely for improving your TubePay experience, securely linking your in-app progress, and authenticating your identity.</p>

                    <h2 className="text-lg font-semibold text-yellow-400">📌 Data Disposal</h2>
                    <p>We respect your privacy. If you choose to delete your account, we will permanently erase all associated data upon request.</p>

                    <h2 className="text-lg font-semibold text-yellow-400">📌 Data Privacy</h2>
                    <p>TubePay does not use your email for newsletters or spam. Your information is strictly used for authentication and app functionalities.</p>

                    <h2 className="text-lg font-semibold text-yellow-400">📌 Security Measures</h2>
                    <p>We use industry-standard security protocols to protect your data from unauthorized access, disclosure, or loss.</p>

                    <h2 className="text-lg font-semibold text-yellow-400">📌 Third-Party Services</h2>
                    <p>TubePay may use trusted third-party services to enhance app features while ensuring compliance with our privacy standards.</p>

                    <h2 className="text-lg font-semibold text-yellow-400">📌 Policy Updates</h2>
                    <p>This privacy policy may be updated periodically. Users will be notified of any major changes.</p>

                    <h2 className="text-lg font-semibold text-yellow-400">📌 Contact Information</h2>
                    <p>For any privacy concerns or data-related queries, email us at:
                        <a href="mailto:contact@tubepay.live" className="text-orange-400 hover:underline"> contact@tubepay.live</a>
                    </p>

                    <p className="text-gray-400 text-sm"><i>Last Updated: 15/01/2024</i></p>
                </section>
            </div>
        </main>
    );
}

export default Privacy;
