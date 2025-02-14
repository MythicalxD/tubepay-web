import React from "react";
import Link from "next/link";

const legalPages = [
    { title: "About Us", link: "/about" },
    { title: "Privacy Policy", link: "/privacy" },
    { title: "Terms & Conditions", link: "/tnc" },
    { title: "Refund Policy", link: "/refund" },
];

const LegalSection = () => {
    return (
        <footer className="w-full bg-[#1E1E2F] text-gray-400 text-sm py-6 px-4 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-gray-600 pt-4">
                <p className="text-xs md:text-sm">&copy; {new Date().getFullYear()} TubePay. All Rights Reserved.</p>
                <div className="flex space-x-4 mt-2 md:mt-0">
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

export default LegalSection;
