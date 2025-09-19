import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import BottomNav from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tubepay official",
  description:
    "Earn free rewards by watching videos on Tubepay. Download trusted application and start earning now",
  metadataBase: new URL("https://tubepay.live"),
  alternates: {
    canonical: "https://tubepay.live/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Extra tags not covered by `metadata` */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* ReactBits Background */}
        <link
          rel="stylesheet"
          href="https://reactbits.dev/backgrounds/liquid-ether.css"
        />
      </head>
      <body
        className={`${inter.className} overflow-x-hidden liquid-ether-bg`}
      >
        {children}
        <Analytics />
        <BottomNav />
      </body>
    </html>
  );
}
