import React from "react";
import RestaurantCard from "./RestaurantCard";
import RestaurantSearch from "./RestaurantSearch";
import ShimmerCard from "./ShimmerCard";
import useRestaurants from "../hooks/useRestaurants";

export default function Body() {
  const {
    filteredRestaurants,
    isLoading,
    error,
    searchText,
    isFilter,
    handleSearch,
    toggleFilter,
  } = useRestaurants();

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center min-h-96">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Oops! Something went wrong
              </h2>
              <p className="text-gray-600 mb-6">Error: {error}</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-200"
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RestaurantSearch
          searchText={searchText}
          onSearch={handleSearch}
          onFilter={toggleFilter}
          isFilter={isFilter}
          isActive={isLoading || filteredRestaurants.length === 0}
        />

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {Array.from({ length: 12 }).map((_, index) => (
              <ShimmerCard key={index} />
            ))}
          </div>
        ) : filteredRestaurants.length === 0 ? (
          <div className="flex justify-center items-center min-h-96">
            <div className="text-center text-gray-500 text-lg">
              No restaurants found!
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {filteredRestaurants.map(({ info }) => (
              <RestaurantCard key={info?.id} {...info} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
