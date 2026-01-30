"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Aurora from "@/components/LiquidEther";

const apps = [
  {
    name: "TubePay",
    desc: "Earn rewards by watching videos, completing offers, and referring friends. Start your earnings journey today!",
    android:
      "https://play.google.com/store/apps/details?id=com.earn.tubepay.tubepay",
    ios: null,
    screenshots: ["/apps/t1.webp", "/apps/t2.webp", "/apps/t3.webp"],
    stats: [
      { label: "Downloads", value: "1M+" },
      { label: "Users Rewarded", value: "50k$+" },
      { label: "Happy Customers", value: "500k+" },
    ],
  },
  {
    name: "NewsPay",
    desc: "Earn rewards by reading daily news, completing offers, and referring friends. Available on Android and iOS.",
    android:
      "https://play.google.com/store/apps/details?id=com.ateam.newspay.newspay",
    ios: "https://apps.apple.com/in/app/newspay-daily-reading-perks/id6739415070",
    screenshots: ["/apps/n1.webp", "/apps/n2.webp", "/apps/n3.webp"],
    stats: [
      { label: "Downloads", value: "500k+" },
      { label: "Users Rewarded", value: "25k$+" },
      { label: "Happy Customers", value: "200k+" },
    ],
  },
  {
    name: "TaskPay",
    desc: "Earn rewards by scanning QR codes, completing offers, playing games, and referring friends.",
    android:
      "https://play.google.com/store/apps/details?id=com.earn.taskpay.taskpay",
    ios: null,
    screenshots: ["/apps/q1.webp", "/apps/q2.webp", "/apps/q3.webp"],
    stats: [
      { label: "Downloads", value: "100k+" },
      { label: "Users Rewarded", value: "10k$+" },
      { label: "Happy Customers", value: "5k+" },
    ],
  },
  {
    name: "CashPlay",
    desc: "Play games, complete tasks, and redeem instant rewards with CashPlay.",
    android:
      "https://play.google.com/store/apps/details?id=com.qateam.cashplay&hl=en_IN",
    ios: null,
    screenshots: ["/apps/c1.jpg", "/apps/c2.jpg", "/apps/c3.jpg"],
    stats: [
      { label: "Downloads", value: "50k+" },
      { label: "Users Rewarded", value: "25k$+" },
      { label: "Happy Customers", value: "10k+" },
    ],
  },
  {
    name: "RadarCash",
    desc: "Listen to music, earn rewards, and explore trending stations with RadioCash.",
    android:
      "https://play.google.com/store/apps/details?id=com.qateam.radiocash&hl=en_IN",
    ios: null,
    screenshots: ["/apps/r1.webp", "/apps/r2.webp", "/apps/r3.webp"],
    stats: [
      { label: "Downloads", value: "10k+" },
      { label: "Users Rewarded", value: "5k$+" },
      { label: "Happy Customers", value: "20k+" },
    ],
  },
  {
    name: "Tap",
    desc: "Tap and play simple games while earning daily rewards and bonuses.",
    android:
      "https://play.google.com/store/apps/details?id=com.qateam.tap&hl=en_IN",
    ios: null,
    screenshots: ["/apps/tap1.webp", "/apps/tap2.webp", "/apps/tap3.webp"],
    stats: [
      { label: "Downloads", value: "10k+" },
      { label: "Daily Rewards", value: "3k$+" },
      { label: "Happy Customers", value: "2k+" },
    ],
  },
];

const testimonials = [
  {
    name: "Amit",
    text: "TubePay has changed how I earn online. Easy, fun, and rewarding!",
    stars: 5,
  },
  {
    name: "Sophia",
    text: "NewsPay keeps me updated AND pays me. Best of both worlds.",
    stars: 4,
  },
  {
    name: "Raj",
    text: "TaskPay is addictive, scanning QR for cash rewards is genius!",
    stars: 5,
  },
  {
    name: "Priya",
    text: "CashPlay surprises me with something fun daily — I really enjoy the variety of games!",
    stars: 5,
  },
  {
    name: "Vikram",
    text: "RadarCash keeps me hooked — scanning with the radar is fun and the instant rewards make it even better!",
    stars: 4,
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden bg-black">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Navigation */}
      <nav className="z-10 relative w-full flex justify-between items-center py-6 px-8 max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          TUBEPAY
        </Link>
        <div className="flex gap-6 text-sm md:text-base">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/privacy" className="hover:underline">
            Legal
          </Link>
          <Link href="/faq" className="hover:underline">
            FAQs
          </Link>
        </div>
      </nav>

      {/* Apps Showcase */}
      <div className="relative z-10 flex flex-col gap-32 mt-20">
        {apps.map((app, i) => (
          <motion.section
            key={app.name}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-12 px-6"
          >
            {i % 2 === 0 ? (
              <>
                {/* Left screenshots, right text */}
                <Screenshots shots={app.screenshots} />
                <AppInfo app={app} align="right" />
              </>
            ) : (
              <>
                {/* Left text, right screenshots */}
                <AppInfo app={app} align="left" />
                <Screenshots shots={app.screenshots} />
              </>
            )}
          </motion.section>
        ))}
      </div>

      {/* QATEAM Modern Art Footer */}
      <div className="relative z-10 mt-32 flex flex-col items-center">
        <h1 className="text-[14rem] md:text-[25rem] font-extrabold tracking-tight text-white/10 leading-none font-sans uppercase">
          QATEAM
        </h1>

        {/* Partners Section */}
        <div className="w-full mt-16 flex justify-center">
          <div className="flex flex-wrap justify-center items-center gap-12">
            {[
              "CPX Research",
              "Notik Offerwall",
              "KIWI-Walls",
              "Strucon Games",
              "AST Ltd.",
            ].map((partner, i) => (
              <motion.span
                key={i}
                className="text-xl md:text-2xl font-semibold text-gray-400 hover:text-white transition duration-300 cursor-default"
                whileHover={{ scale: 1.1 }}
              >
                {partner}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-24 w-full max-w-6xl px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative group rounded-2xl overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#3A29FF] via-[#FF94B4] to-[#FF3232] opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>

                {/* Card Content */}
                <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-lg flex flex-col items-center text-center group-hover:shadow-[0_0_25px_rgba(255,148,180,0.6)] transition duration-500">
                  {/* Stars */}
                  <div className="flex mb-4">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">
                        ★
                      </span>
                    ))}
                    {Array.from({ length: 5 - t.stars }).map((_, i) => (
                      <span key={i} className="text-gray-500 text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-200 mb-4 italic">
                    &quot;{t.text}&quot;
                  </p>
                  <p className="font-semibold">{t.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div
        id="frame"
        className="width: 100%;margin: auto;position: relative; z-index: 99998;"
      >
        <iframe
          data-aa="2425888"
          src="//acceptable.a-ads.com/2425888/?size=Adaptive"
          className="border:0; padding:0; width:70%; height:auto; overflow:hidden;display: block;margin: auto"
        ></iframe>
      </div>
    </main>
  );
}

function Screenshots({ shots }: { shots: string[] }) {
  return (
    <div className="flex gap-4">
      {shots.map((s, i) => (
        <motion.img
          key={i}
          src={s}
          alt="app screenshot"
          className="w-[200px] md:w-[240px] rounded-2xl shadow-lg"
          whileHover={{ scale: 1.08, rotate: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      ))}
    </div>
  );
}

function AppInfo({ app, align }: { app: any; align: "left" | "right" }) {
  return (
    <div
      className={`flex flex-col gap-4 max-w-md flex-1 ${
        align === "right" ? "text-right items-end" : "text-left items-start"
      }`}
    >
      <h2 className="text-4xl font-extrabold">{app.name}</h2>
      <p className="text-gray-300">{app.desc}</p>

      {/* Store buttons */}
      <div
        className={`flex gap-4 mt-2 ${align === "right" ? "justify-end" : ""}`}
      >
        {app.android && (
          <a href={app.android} target="_blank" rel="noopener noreferrer">
            <img
              src="/google.png"
              alt="google play"
              className="w-[160px] hover:scale-105 transition"
            />
          </a>
        )}
        {app.ios && (
          <a href={app.ios} target="_blank" rel="noopener noreferrer">
            <img
              src="/apple.png"
              alt="apple store"
              className="w-[160px] hover:scale-105 transition"
            />
          </a>
        )}
      </div>

      {/* Stats */}
      <div
        className={`flex gap-10 mt-6 ${align === "right" ? "justify-end" : ""}`}
      >
        {app.stats.map((stat: any) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-xs text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
