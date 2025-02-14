"use client";

import RatingBreakdown from "@/components/Rating";
import TestimonialCarousel from "@/components/testimonial";
import WithdrawalOptions from "@/components/Withdrawal";
import Link from "next/link";

export default function Home() {

  const ratingData = [
    { star: 5, percentage: 70 },
    { star: 4, percentage: 20 },
    { star: 3, percentage: 5 },
    { star: 2, percentage: 3 },
    { star: 1, percentage: 7 },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1E1E2F] to-[#10101A] text-white flex flex-col items-center justify-center px-6">
      {/* Navigation Bar */}
      <nav className="w-full flex justify-between items-center py-4 max-w-6xl">
        <div className="text-2xl font-bold"><Link href="/" className="hover:underline">TUBEPAY</Link></div>
        <div className="flex gap-6">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/privacy" className="hover:underline">Legal</Link>
          <Link href="/faq" className="hover:underline">FAQs</Link>
        </div>
      </nav>

      <div className="flex md:flex-row flex-col items-center justify-between w-full max-w-6xl">
        <section className="flex justify-center items-center">
          <img src="./phone2.png" alt="mobile" className="w-[400px] object-cover mt-8"></img>
        </section>
        <section className="flex flex-col items-start text-center">
          <h1 className="md:text-center text-start text-5xl font-extrabold">Download NewsPay!</h1>
          <p className="mt-4 text-lg max-w-2xl text-start">
            Earn rewards by reading daily news, completing offers, and referring friends. Start your earnings journey today!
          </p>
          <div className="flex gap-x-4">
            <a href="https://play.google.com/store/apps/details?id=com.ateam.newspay.newspay&hl=en_IN">
              <img src="./google.png" alt="download" className='z-10 w-[200px] mt-[20px] object-cover' />
            </a>
            <a href="https://apps.apple.com/in/app/newspay-daily-reading-perks/id6739415070">
              <img src="./apple.png" alt="download" className='z-10 w-[200px] mt-[20px] object-cover' />
            </a>
          </div>
          <div className="mt-6 md:ml-8 ml-0 flex gap-10 text-center">
            <div>
              <p className="text-2xl font-bold">200k+</p>
              <p className="text-sm text-gray-400">Downloads</p>
            </div>
            <div>
              <p className="text-2xl font-bold">40k$+</p>
              <p className="text-sm text-gray-400">Daily Rewards</p>
            </div>
            <div>
              <p className="text-2xl font-bold">50k+</p>
              <p className="text-sm text-gray-400">Happy Customers</p>
            </div>
          </div>
        </section>
      </div>

      <div className="flex md:flex-row flex-col items-center justify-between w-full max-w-6xl">
        <section className="flex flex-col items-start text-center">
          <h1 className="md:text-center text-start text-5xl font-extrabold">Download TubePay!</h1>
          <p className="mt-4 text-lg max-w-2xl text-start">
            Earn rewards by watching videos, completing offers, and referring friends. Start your earnings journey today!
          </p>
          <a href="https://play.google.com/store/apps/details?id=com.earn.tubepay.tubepay">
            <img src="./google.png" alt="download" className='z-10 w-[200px] mt-[20px] object-cover' />
          </a>
          <div className="mt-6 flex gap-10 text-center">
            <div>
              <p className="text-2xl font-bold">700k+</p>
              <p className="text-sm text-gray-400">Downloads</p>
            </div>
            <div>
              <p className="text-2xl font-bold">200k$+</p>
              <p className="text-sm text-gray-400">Daily Rewards</p>
            </div>
            <div>
              <p className="text-2xl font-bold">100k+</p>
              <p className="text-sm text-gray-400">Happy Customers</p>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center">
          <img src="./phone1.png" alt="mobile" className="w-[400px] object-cover mt-8"></img>
        </section>
      </div>

      <div className="flex md:flex-row flex-col items-center justify-between w-full max-w-6xl">
        <section className="flex justify-center items-center">
          <img src="./phone3.png" alt="mobile" className="w-[400px] object-cover mt-8"></img>
        </section>
        <section className="flex flex-col items-start text-center">
          <h1 className="md:text-center text-start text-5xl font-extrabold">Download TaskPay!</h1>
          <p className="mt-4 text-lg max-w-2xl text-start">
            Earn rewards by Generating QR Codes, Scanning QR Code, Completing Offers Playing Games and referring friends. Start your earnings journey today!
          </p>
          <div className="flex gap-x-4">
            <a href="https://play.google.com/store/apps/details?id=com.earn.taskpay.taskpay&hl=en_IN">
              <img src="./google.png" alt="download" className='z-10 w-[200px] mt-[20px] object-cover' />
            </a>
          </div>
          <div className="mt-6 md:ml-8 ml-0 flex gap-10 text-center">
            <div>
              <p className="text-2xl font-bold">25k+</p>
              <p className="text-sm text-gray-400">Downloads</p>
            </div>
            <div>
              <p className="text-2xl font-bold">5k$+</p>
              <p className="text-sm text-gray-400">Daily Rewards</p>
            </div>
            <div>
              <p className="text-2xl font-bold">5k+</p>
              <p className="text-sm text-gray-400">Happy Customers</p>
            </div>
          </div>
        </section>
      </div>

      {/* Rating Breakdown Section */}
      <section className="mt-12 w-full">
        <RatingBreakdown ratings={ratingData} averageRating={4.5} />
      </section>

      <TestimonialCarousel />

      <WithdrawalOptions />
    </main>
  );
}
