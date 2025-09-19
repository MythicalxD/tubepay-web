"use client";

import Link from "next/link";

export const dynamic = "force-dynamic";   // no prerender, runtime only

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen w-screen bg-[#F3F4F5] overflow-x-hidden">
      {/* Header Bar */}
      <div className="flex h-[70px] items-center px-[15px] w-screen bg-gradient-to-r from-orange-400 to-pink-500">
        <a href="https://play.google.com/store/apps/details?id=com.earn.tubepay.tubepay">
          <img src="/logo.png" alt="logo" className="h-[40px]" />
        </a>
        <Link href="/">
          <p className="text-md font-bold text-gray-700 hover:text-black ml-4">
            HOME
          </p>
        </Link>
      </div>

      {/* Contact Content */}
      <div className="text-black p-8">
        <h1 className="text-3xl font-bold mb-4">TubePay Contact Us</h1>
        <p>
          You can reach us at{" "}
          <a
            href="mailto:tubepay.team@gmail.com"
            className="text-blue-600 underline"
          >
            tubepay.team@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
}
