import React from 'react';

const RatingBreakdown = ({ ratings, averageRating }: { ratings: { star: number; percentage: number }[]; averageRating: number }) => {
    // Function to determine the color based on the star rating
    const getColorForRating = (star: number) => {
        if (star >= 4) return 'from-green-400 to-teal-500'; // Green for high ratings
        if (star === 3) return 'from-yellow-400 to-orange-500'; // Yellow for average ratings
        return 'from-red-400 to-pink-500'; // Red for low ratings
    };

    // Function to render stars based on the average rating
    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
            <div className="flex items-center">
                {[...Array(fullStars)].map((_, i) => (
                    <span key={`full-${i}`} className="text-yellow-400 text-3xl">★</span>
                ))}
                {hasHalfStar && <span className="text-yellow-400 text-3xl">½</span>}
                {[...Array(emptyStars)].map((_, i) => (
                    <span key={`empty-${i}`} className="text-gray-400 text-3xl">★</span>
                ))}
            </div>
        );
    };

    return (
        <div className="w-full md:p-8 p-0 rounded-lg shadow-2xl mx-auto transform transition-all duration-500 hover:scale-105">
            {/* Star Rating Summary */}
            <div className="text-center mb-8">
                <div className="flex justify-center items-center space-x-2">
                    {renderStars(averageRating)}
                    <span className="text-4xl font-bold text-yellow-400">{averageRating.toFixed(1)}</span>
                </div>
                <p className="text-lg text-gray-300 mt-2">Google Verified Ratings</p>
            </div>

            {/* What Our Users Say Section */}
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-6 text-center">
                What Our Users Say
            </h3>
            <p className="text-lg text-gray-300 mb-8 text-center">
                Join thousands of users who are earning daily with TubePay! Here’s how they rate us:
            </p>

            {/* Rating Breakdown */}
            {ratings.map((rating) => (
                <div key={rating.star} className="flex items-center mb-4 w-full px-4 sm:px-6">
                    <span className="w-16 text-right text-lg font-bold text-yellow-400">{rating.star}★</span>
                    <div className="flex-1 mx-4 bg-gray-800 rounded-full h-4 sm:h-6 relative overflow-hidden">
                        <div
                            className={`absolute left-0 top-0 bottom-0 bg-gradient-to-r ${getColorForRating(rating.star)} h-4 sm:h-6 rounded-full transition-all duration-500 ease-in-out`}
                            style={{ width: `${rating.percentage}%` }}
                        ></div>
                    </div>
                    <span className="w-16 text-left text-lg font-semibold text-yellow-400">{rating.percentage}%</span>
                </div>
            ))}
        </div>
    );
};

export default RatingBreakdown;