"use client";
import SEO from '@/components/SEO';
import { Passion_One } from 'next/font/google';
import Link from 'next/link';

const passion = Passion_One({ subsets: ['latin'], weight: '400' });

function Refund() {
    return (
        <main className="flex flex-col min-h-screen w-screen bg-[#1E1E2F] text-white overflow-x-hidden">
            {/* SEO Optimization */}
            <SEO
                title="Refund and Cancellation - TubePay"
                description="Review TubePay's refund and cancellation policy. Learn about our refund process, cancellation timeframes, and conditions for transactions."
                canonical="https://tubepay.live/refund"
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

            {/* Refund & Cancellation Policy Content */}
            <div className="max-w-4xl mx-auto bg-[#222233] p-6 md:p-12 rounded-lg shadow-lg mt-6">
                <h1 className="text-3xl font-bold text-yellow-400 text-center mb-6">TubePay Refund & Cancellation Policy</h1>

                <section className="space-y-6 text-sm md:text-base leading-relaxed">
                    <h2 className="text-lg font-semibold text-yellow-400">📌 Cancellation Policy</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>⏳ Users have a <b>30-minute window</b> to cancel a transaction after making a payment.</li>
                        <li>🚫 Cancellations after 30 minutes will not be accepted, and the transaction will be considered final.</li>
                    </ul>

                    <h2 className="text-lg font-semibold text-yellow-400">📌 Refund Policy</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>💰 Refunds are available <b>only</b> within the 30-minute cancellation window.</li>
                        <li>📩 To request a refund, users must contact our support team via <b>email or live chat</b> within 30 minutes of the payment.</li>
                        <li>🔄 Refunds will be processed back to the <b>original payment method</b> within <b>5-10 business days</b>.</li>
                    </ul>

                    <h2 className="text-lg font-semibold text-yellow-400">📌 Exceptions</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>🚀 Refunds are <b>not applicable</b> if the service/product has already been delivered or used.</li>
                        <li>⚠️ If technical issues occur preventing transaction completion, users must contact support for assistance.</li>
                    </ul>

                    <h2 className="text-lg font-semibold text-yellow-400">📌 Policy Updates</h2>
                    <p>We reserve the right to update this policy at any time. Users will be notified via <b>email or in-app notifications</b> about changes.</p>

                    <h2 className="text-lg font-semibold text-yellow-400">📌 Contact Information</h2>
                    <p>For any refund or cancellation inquiries, please reach out to us at:
                        <a href="mailto:contact@tubepay.live" className="text-orange-400 hover:underline"> contact@tubepay.live</a>
                    </p>

                    <p className="text-gray-400 text-sm"><i>Last Updated: 15/01/2024</i></p>
                </section>
            </div>
        </main>
    );
}

export default Refund;
