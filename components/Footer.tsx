import React from "react";
import Link from "next/link";

const legalPages = [
  { title: "About Us", link: "/about" },
  { title: "Privacy Policy", link: "/privacy" },
  { title: "Terms & Conditions", link: "/tnc" },
  { title: "Refund Policy", link: "/refund" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-400 text-xs md:text-sm py-6 px-4 md:px-16 lg:px-24 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
        
        {/* Logo & Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-2">
          <div className="text-2xl font-bold text-white">
            <Link href="/" className="hover:text-yellow-400 transition duration-200">TUBEPAY</Link>
          </div>
          <p className="text-center md:text-left md:ml-8 text-gray-500">
            &copy; {new Date().getFullYear()} TubePay. All Rights Reserved.
          </p>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 md:mt-0">
          {legalPages.map((page, index) => (
            <Link key={index} href={page.link} passHref>
              <span className="hover:underline hover:text-yellow-400 transition duration-200 cursor-pointer">
                {page.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
