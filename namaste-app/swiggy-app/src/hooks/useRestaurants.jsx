import { useEffect, useState } from "react";
import { API_URL } from "../utils/static";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const restaurantData =
          data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        const restaurants = restaurantData || [];
        setRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
        setError(error.message);
        setRestaurants([]);
        setFilteredRestaurants([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const applyFilters = (text, filter) => {
    const baseList = restaurants.filter((restaurant) => {
      const matchesRating = !filter || restaurant.info?.avgRating >= 4.2;
      const matchesSearch =
        !text ||
        restaurant.info?.name?.toLowerCase().includes(text.toLowerCase());

      return matchesRating && matchesSearch;
    });

    setFilteredRestaurants(baseList);
  };

  const handleSearch = (input) => {
    setSearchText(input);
    applyFilters(input, isFilter);
  };

  const toggleFilter = () => {
    setIsFilter((prevFilter) => {
      const newFilter = !prevFilter;
      applyFilters(searchText, newFilter);
      return newFilter;
    });
  };

  const resetFilters = () => {
    setSearchText("");
    setIsFilter(false);
    setFilteredRestaurants(restaurants);
  };

  return {
    restaurants,
    filteredRestaurants,
    isLoading,
    error,
    searchText,
    isFilter,
    handleSearch,
    toggleFilter,
    resetFilters,
  };
};

export default useRestaurants;
