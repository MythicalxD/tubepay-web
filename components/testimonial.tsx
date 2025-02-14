import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const testimonials = [
    {
        name: "HADWTSHA baro",
        rating: 5,
        text: "TubePay is a reward-based earning app that makes watching videos, completing offers, and referrals seamless. With an intuitive interface, it ensures quick rewards, secure transactions, and reliable earnings. Whether you're looking to earn extra money or maximize your digital rewards, TubePay is the perfect choice!",
        image: "/1.png",
    },
    {
        name: "Google User",
        rating: 5,
        text: "TubePay is your go-to platform for earning rewards effortlessly! 🎉 Watch reels, complete simple tasks, and promote your channel to cash in real rewards. With instant payouts and a smooth interface, earning has never been this easy!",
        image: "/2.png",
    },
    {
        name: "Google User",
        rating: 4,
        text: "A solid app for earning rewards! Watching reels and promoting channels is seamless, and payouts are fast. The interface is user-friendly, making it easy to earn. However, adding more earning opportunities and diverse tasks would enhance the experience. Overall, TubePay is a great platform for passive income and digital promotions! ",
        image: "/3.png",
    },
];

const getStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => {
        if (rating >= index + 1) return <FaStar key={index} className="text-yellow-500" />;
        if (rating >= index + 0.5) return <FaStarHalfAlt key={index} className="text-yellow-500" />;
        return <FaRegStar key={index} className="text-gray-500" />;
    });
};

const TestimonialSection = () => {
    return (
        <div className="w-full max-w-6xl mx-auto py-12 m-8">
            <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">User Testimonials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex flex-col items-center text-center bg-[#222233] p-8 rounded-lg shadow-lg">
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-20 h-20 rounded-full mb-4 border-4 border-yellow-500"
                        />
                        <h3 className="text-2xl font-semibold text-white">{testimonial.name}</h3>
                        <div className="flex justify-center mt-2">{getStars(testimonial.rating)}</div>
                        <p className="md:text-lg text-sm text-gray-300 mt-4 max-w-lg">{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialSection;
