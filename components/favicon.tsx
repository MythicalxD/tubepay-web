import { FaGooglePlay, FaYoutube, FaTelegram, FaHandshake } from "react-icons/fa";

const SocialMediaSection = () => {
    const links = [
        {
            icon: <FaGooglePlay className="text-green-500" />,
            title: "Google Play",
            description: "Discover all our apps on Google Play Store.",
            link: "https://play.google.com/store/apps/dev?id=4718899756046516833&hl=en",
        },
        {
            icon: <FaYoutube className="text-red-500" />,
            title: "YouTube Channel",
            description: "Subscribe for updates, tutorials, and more.",
            link: "https://www.youtube.com/@Tubepayapp",
        },
        {
            icon: <FaTelegram className="text-blue-500" />,
            title: "Telegram Channel",
            description: "Join our Telegram for latest news and updates.",
            link: "https://t.me/TUBEpayOfficial",
        },
        {
            icon: <FaHandshake className="text-purple-500" />,
            title: "Contact Us",
            description: "Partner with us to earn commissions.",
            link: "mailto:help.taskpay@gmail.com?subject=Partnership Inquiry&body=Hello, I would like to discuss...",
        },
    ];

    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-10">
                    Connect with Us
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {links.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-6 shadow-md rounded-lg hover:bg-opacity-100 transition-all duration-300 transform hover:scale-105"
                        >
                            <div className="text-5xl mb-4">{link.icon}</div>
                            <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600">
                                {link.title}
                            </h3>
                            <p className="text-gray-500 mt-2 group-hover:text-gray-700">
                                {link.description}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SocialMediaSection;
