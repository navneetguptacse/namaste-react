import React from "react";
import RestaurantCard from "./RestaurantCard";
import RestaurantSearch from "./Search";
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
      <div className="body-main">
        <div className="error-message">
          <h2>Oops! Something went wrong</h2>
          <p>Error: {error}</p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="body-main">
      <RestaurantSearch
        searchText={searchText}
        onSearch={handleSearch}
        onFilter={toggleFilter}
        isFilter={isFilter}
        isActive={isLoading || filteredRestaurants.length === 0}
      />

      {isLoading ? (
        <div className="restaurant-list shimmer">
          {Array.from({ length: 12 }).map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        </div>
      ) : filteredRestaurants.length === 0 ? (
        <div className="restaurant-list not-found">No data found!</div>
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants.map(({ info }) => (
            <RestaurantCard key={info?.id} {...info} />
          ))}
        </div>
      )}
    </div>
  );
}
