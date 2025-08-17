import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import RestaurantSearch from "./Search";
import ShimmerCard from "./ShimmerCard";
import { API_URL } from "../utils/static";

export default function Body() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFilter, setIsFilter] = useState(false);
  const [searchText, setSearchText] = useState("");

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
        setFilteredRestaurants(restaurantData || []);
      } catch (e) {
        console.error(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const applyFilters = (text, filter) => {
    const baseList = restaurants.filter(
      (r) =>
        (!filter || r.info?.avgRating >= 4.2) &&
        (!text || r.info?.name?.toLowerCase().includes(text.toLowerCase()))
    );

    setFilteredRestaurants(baseList);
  };

  const handleSearch = (input) => {
    setSearchText(input);
    applyFilters(input, isFilter);
  };

  const toggleFilter = () => {
    setIsFilter((prev) => {
      const newFilter = !prev;
      applyFilters(searchText, newFilter);
      return newFilter;
    });
  };

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
