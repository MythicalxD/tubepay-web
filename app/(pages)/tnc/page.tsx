"use client";
import SEO from '@/components/SEO';
import { Passion_One } from 'next/font/google';
import Link from 'next/link';

const passion = Passion_One({ subsets: ['latin'], weight: '400' });

function Terms() {
    return (
        <main className="flex flex-col min-h-screen w-screen bg-[#1E1E2F] text-white overflow-x-hidden">
            {/* SEO Optimization */}
            <SEO
                title="Terms and Conditions - TubePay"
                description="Review TubePay's Terms and Conditions, outlining the rules and guidelines for using our platform. Learn more about acceptable use, user conduct, and liability."
                canonical="https://tubepay.live/tnc"
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

            {/* Terms & Conditions Content */}
            <div className="max-w-4xl mx-auto bg-[#222233] p-6 md:p-12 rounded-lg shadow-lg mt-6">
                <h1 className="text-3xl font-bold text-yellow-400 text-center mb-6">TubePay Terms and Conditions</h1>

                <section className="space-y-6 text-sm md:text-base leading-relaxed">
                    <h2 className="text-lg font-semibold text-yellow-400">📌 Terms of Service</h2>
                    <p>This agreement outlines the rules and guidelines for using the TubePay app and services. By accessing our platform, you agree to abide by these terms.</p>

                    <h2 className="text-lg font-semibold text-yellow-400">📌 Basic Information</h2>
                    <p>TubePay provides users with a reward-based platform. Users must ensure they have the necessary equipment and internet access to use the app.</p>

                    <h2 className="text-lg font-semibold text-yellow-400">📌 Acceptable Use Policy</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>🔹 No fraudulent activity, including botnets or fake accounts.</li>
                        <li>🔹 No use of unauthorized scripts or automation tools.</li>
                        <li>🔹 No abusive, hateful, or inappropriate behavior.</li>
                        <li>🔹 No infringement of intellectual property rights.</li>
                        <li>🔹 No spamming or unauthorized commercial promotions.</li>
                    </ul>

                    <h2 className="text-lg font-semibold text-yellow-400">📌 User Termination</h2>
                    <p>TubePay reserves the right to suspend or terminate accounts that violate our policies. Any fraudulent activities will result in an immediate ban.</p>

                    <h2 className="text-lg font-semibold text-yellow-400">📌 Limitations of Liability</h2>
                    <p>We are not responsible for:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>⚠️ Errors, software bugs, or system downtimes.</li>
                        <li>⚠️ Unauthorized third-party access to user data.</li>
                        <li>⚠️ Loss of rewards due to rule violations or account bans.</li>
                    </ul>

                    <h2 className="text-lg font-semibold text-yellow-400">📌 Age Restrictions</h2>
                    <p>Users must be at least <b>13 years old</b> to use TubePay. Any accounts found to belong to users under this age will be removed.</p>

                    <h2 className="text-lg font-semibold text-yellow-400">📌 Amendments</h2>
                    <p>We reserve the right to modify these terms at any time. Continued use of TubePay constitutes acceptance of any changes.</p>

                    <h2 className="text-lg font-semibold text-yellow-400">📌 Contact Information</h2>
                    <p>If you have any questions regarding our terms, please contact us at:
                        <a href="mailto:contact@tubepay.live" className="text-orange-400 hover:underline"> contact@tubepay.live</a>
                    </p>

                    <p className="text-gray-400 text-sm"><i>Last Updated: 15/01/2024</i></p>
                </section>
            </div>
        </main>
    );
}

export default Terms;
