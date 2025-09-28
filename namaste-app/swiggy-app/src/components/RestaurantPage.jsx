import React from "react";
import MenuList from "./MenuList";
import RestaurantInfo from "./RestaurentInfo";
import { useParams } from "react-router-dom";
import useMenu from "../hooks/useMenu.jsx";

const RestaurentPage = () => {
  const { id } = useParams();
  const { restaurantsInfo, restaurantsMenu, isLoading, error } = useMenu(id);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-96">
            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="text-6xl text-orange-500 mb-4">⚠️</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Oops! Something went wrong
              </h2>
              <p className="text-gray-600 mb-6">Error: {error}</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="space-y-6">
            {/* Restaurant Info Shimmer */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            </div>

            {/* Menu Items Shimmer */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
              <div className="space-y-4">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-1 space-y-2">
                      <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                    </div>
                    <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <RestaurantInfo
              restaurantsInfo={restaurantsInfo}
              isLoading={isLoading}
            />
            <MenuList restaurantsMenu={restaurantsMenu} isLoading={isLoading} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurentPage;
