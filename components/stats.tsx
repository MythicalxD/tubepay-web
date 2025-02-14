const StatsWithIcons = () => {
    const stats = [
      {
        icon: "😄",
        label: "Happy Users",
        value: "100,000+",
      },
      {
        icon: "📥",
        label: "App Downloads",
        value: "1,000K+",
      },
      {
        icon: "🏆",
        label: "Prize Distributed",
        value: "$500K+",
      },
      {
        icon: "🌍",
        label: "Working in Countries",
        value: "150+",
      },
      {
        icon: "⭐",
        label: "Global Rating",
        value: "4.7+",
      },
    ];
  
    return (
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-white p-6 shadow-md rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-gray-800 mt-4">{stat.value}</h3>
                <p className="text-gray-500 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default StatsWithIcons;
  