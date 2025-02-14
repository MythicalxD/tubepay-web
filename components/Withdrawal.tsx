import React from "react";
import Image from "next/image";

const payoutOptions = [
    { id: 1, name: "PayPal", image: "/with/p.png", status: "available" },
    { id: 2, name: "UPI", image: "/with/upi.png", status: "available" },
    { id: 3, name: "Google Play Gift Card", image: "/with/g.png", status: "available" },
    { id: 4, name: "Amazon Gift Card", image: "/with/a.png", status: "available" },
    { id: 5, name: "Bitcoin", image: "/with/b.png", status: "available" },
    { id: 6, name: "Litecoin", image: "/with/l.png", status: "available" },
    { id: 6, name: "Riot games", image: "/with/r.png", status: "sold-out" },
    { id: 6, name: "PUBG", image: "/with/pubg.png", status: "sold-out" },
];

const PayoutOptions = () => {
    return (
        <div className="w-full bg-[#1E1E2F] p-8 rounded-lg shadow-lg mt-12">
            <h3 className="text-4xl font-bold text-yellow-400 mb-8 text-center">Choose Your Payout Method</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
                {payoutOptions.map((option) => (
                    <div
                        key={option.id}
                        className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-md transition-all duration-300 ${option.status === "available" ? "bg-[#222233] hover:scale-105" : "bg-gray-700 opacity-50"
                            }`}
                    >
                        <Image src={option.image} width={60} height={60} alt={option.name} />
                        <p className="text-lg font-semibold text-white mt-3 text-center">{option.name}</p>
                        <p className="text-sm text-gray-400">⏳ Within 24 hours</p>
                        <span
                            className={`text-xs font-semibold px-3 py-1 mt-2 rounded ${option.status === "available" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                                }`}
                        >
                            {option.status === "available" ? "Available" : "Sold Out"}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PayoutOptions;
