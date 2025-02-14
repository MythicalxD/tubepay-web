"use client";
import SEO from "@/components/SEO";
import Link from "next/link";
import React, { useState } from "react";

const faqs = [
    { question: "What is TubePay?", answer: "TubePay is a reward-based app that allows users to earn points by watching videos, playing lucky number & spin wheel, and inviting friends." },
    { question: "How can I earn rewards on TubePay?", answer: "You can earn points by watching videos, completing tasks, spinning the wheel, playing lucky number, and inviting friends to the app." },
    { question: "How do I redeem my points?", answer: "You can redeem your earned points for PayPal cash, Amazon gift cards, and other rewards directly through the app." },
    { question: "Is TubePay free to use?", answer: "Yes! TubePay is completely free to use. No need to purchase gems, tokens, diamonds, or other in-app items." },
    { question: "How long does it take to receive my payout?", answer: "All rewards are processed within 24 hours. PayPal, Amazon Gift Cards, and other payouts are sent quickly and securely." },
    { question: "Can I invite my friends and earn rewards?", answer: "Yes! You can invite your friends using your referral code and earn bonus points for every successful signup." },
    { question: "Is TubePay affiliated with Google or YouTube?", answer: "No, TubePay is not affiliated with Google Inc. or YouTube. All offers and rewards are solely sponsored by TubePay." },
    { question: "Are there any limits on how much I can earn?", answer: "No, the more you watch and engage, the more you earn! There is no limit to how many points you can collect." },
    { question: "Is TubePay safe and legit?", answer: "Yes, TubePay is a legitimate and secure platform for earning rewards. We ensure fast and reliable payouts." },
    { question: "Where can I download TubePay?", answer: "You can download TubePay from the Google Play Store at: https://play.google.com/store/apps/details?id=com.earn.tubepay.tubepay" },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#1E1E2F] to-[#10101A] text-white flex flex-col items-center justify-start px-6">

            <SEO
                title="Frequently Asked Questions - TubePay"
                description="Find answers to common questions about TubePay. Learn how to earn rewards, redeem points, and understand the security of our platform."
                canonical="https://tubepay.live/faq"
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

            <div className="max-w-7xl mx-auto bg-[#222233] p-8 rounded-b-lg shadow-lg mt-[60px]">
                <h3 className="text-4xl font-bold text-yellow-400 mb-6 text-center">Find Your Answers Here</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-[#333344] p-4 rounded-lg shadow-md">
                            <button
                                className="flex justify-between items-center w-full text-lg font-semibold text-white"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                {faq.question}
                                <span className="text-yellow-400">{openIndex === index ? "▲" : "▼"}</span>
                            </button>
                            {openIndex === index && <p className="mt-3 text-gray-300">{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
