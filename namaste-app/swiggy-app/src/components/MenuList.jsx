import React from "react";
import { CDN_URL } from "../utils/static";
import { FaStar, FaPlus } from "react-icons/fa";

const MenuList = ({ restaurantsMenu, isLoading }) => {
  if (isLoading) return null;

  const menuItems = restaurantsMenu || [];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
          <span className="text-orange-500">📋</span>
          Recommended ({menuItems.length})
        </h2>
        <p className="text-gray-600 mt-1">Most popular items from our menu</p>
      </div>

      <div className="divide-y divide-gray-200">
        {menuItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl text-gray-300 mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No menu items available
            </h3>
            <p className="text-gray-500">
              Please check back later for menu updates.
            </p>
          </div>
        ) : (
          menuItems.map((item) => (
            <div
              key={item.card.info.id}
              className="p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-start justify-between gap-6">
                {/* Item Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                      {item.card.info.name}
                    </h3>
                    <div className="flex items-center gap-2 ml-4">
                      <span className="text-xl font-bold text-gray-900">
                        ₹{Math.floor(item.card.info.price / 100)}
                      </span>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                        60% OFF
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1 text-green-600">
                      <FaStar size={12} />
                      <span className="text-sm font-medium">
                        {item.card.info.ratings?.aggregatedRating?.rating ||
                          "4.4"}
                      </span>
                      <span className="text-gray-500 text-sm">
                        (
                        {item.card.info.ratings?.aggregatedRating
                          ?.ratingCountV2 || "14"}
                        )
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {item.card.info.description ||
                      "Delicious food item prepared with fresh ingredients and authentic flavors."}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Vegetarian
                    </span>
                    <span>Serves 1</span>
                  </div>
                </div>

                {/* Image and Add Button */}
                <div className="flex flex-col items-center gap-3">
                  <div className="relative">
                    <img
                      src={CDN_URL + item.card.info.imageId}
                      alt={item.card.info.name}
                      className="w-28 h-28 object-cover rounded-lg shadow-md"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/112x112/f3f4f6/9ca3af?text=No+Image";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
                  </div>

                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center gap-2 shadow-md">
                    <FaPlus size={12} />
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Bottom CTA */}
      {menuItems.length > 0 && (
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-600 mb-3">Looking for more options?</p>
            <button className="bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200">
              View Full Menu
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuList;
