import React from "react";
import ShimmerCard from "./ShimmerCard";
import MenuList from "./MenuList";
import RestaurantInfo from "./RestaurentInfo";
import { useParams } from "react-router-dom";
import useMenu from "../hooks/useMenu.jsx";

const RestaurentPage = () => {
  const { id } = useParams();
  const { restaurantsInfo, restaurantsMenu, isLoading, error } = useMenu(id);

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
      {isLoading ? (
        <div className="restaurant-list shimmer">
          {Array.from({ length: 12 }).map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        </div>
      ) : (
        <div>
          {/* Restaurant Info Card */}
          <RestaurantInfo
            restaurantsInfo={restaurantsInfo}
            isLoading={isLoading}
          />

          {/* Menu List Card */}
          <MenuList restaurantsMenu={restaurantsMenu} isLoading={isLoading} />
        </div>
      )}
    </div>
  );
};

export default RestaurentPage;
