import React from "react";
import { FaStar, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const RestaurantInfo = ({ restaurantsInfo, isLoading }) => {
  if (isLoading || !restaurantsInfo) return null;

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    locality,
    city,
    isOpen,
    sla: { slaString },
    availability: { nextOpenTimeMessage },
  } = restaurantsInfo;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
        <h1 className="text-3xl font-bold mb-4">{name}</h1>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
            <FaStar className="text-yellow-300" size={14} />
            <span className="font-semibold">{avgRating}</span>
            <span className="opacity-90">({totalRatingsString})</span>
          </div>

          <div className="bg-white/20 px-3 py-1 rounded-full font-medium">
            {costForTwoMessage}
          </div>

          <div
            className={`px-3 py-1 rounded-full font-medium ${
              isOpen ? "bg-green-500/80" : "bg-red-500/80"
            }`}
          >
            {isOpen ? "Open Now" : nextOpenTimeMessage}
          </div>
        </div>
      </div>

      {/* Restaurant Details */}
      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-orange-500">🍽️</span>
              Cuisines
            </h3>
            <p className="text-gray-700 mb-4">{cuisines.join(", ")}</p>

            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <FaMapMarkerAlt className="text-orange-500" />
              Location
            </h3>
            <p className="text-gray-700">{[locality, city].join(", ")}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <FaClock className="text-orange-500" />
              Delivery Time
            </h3>
            <p className="text-gray-700 text-lg font-medium">{slaString}</p>

            <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex items-center gap-2 text-orange-700">
                <span className="font-medium">💡 Tip:</span>
                <span className="text-sm">
                  Free delivery on orders above ₹199
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
