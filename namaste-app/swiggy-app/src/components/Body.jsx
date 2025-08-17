import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import RestaurantSearch from "./Search";
import ShimmerCard from "./ShimmerCard";
import { API_URL } from "../utils/static";

export default function Body() {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        const restaurantData =
          data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        setRestaurants(restaurantData || []);
      } catch (e) {
        console.error(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const restaurantsData = isFilter
    ? restaurants.filter((r) => r.info?.avgRating >= 4.5)
    : restaurants;

  return (
    <div className="body-main">
      <RestaurantSearch
        onFilter={() => setIsFilter((prev) => !prev)}
        isFilter={isFilter}
      />

      {isLoading ? (
        <div
          className="restaurant-list"
          style={{ display: "flex", gap: "20px", marginTop: "2.5rem" }}
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        </div>
      ) : restaurantsData.length === 0 ? (
        <div
          className="restaurant-list"
          style={{ display: "flex", gap: "20px", marginTop: "2.5rem" }}
        >
          No data found!
        </div>
      ) : (
        <div className="restaurant-list">
          {restaurantsData.map(({ info }) => (
            <RestaurantCard key={info?.id} {...info} />
          ))}
        </div>
      )}
    </div>
  );
}
