import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/static";

const useRestaurantMenu = (restaurantId) => {
  const [restaurantsInfo, setRestaurantsInfo] = useState(null);
  const [restaurantsMenu, setRestaurantsMenu] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!restaurantId) {
      setIsLoading(false);
      return;
    }

    const fetchRestaurantData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(MENU_API_URL + restaurantId);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const restaurantsInfoData = data?.data?.cards?.[2]?.card?.card?.info;

        const restaurantsMenuData =
          data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
            ?.card?.card?.itemCards;

        setRestaurantsInfo(restaurantsInfoData || null);
        setRestaurantsMenu(restaurantsMenuData || []);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
        setError(error.message);
        setRestaurantsInfo(null);
        setRestaurantsMenu([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRestaurantData();
  }, [restaurantId]);

  return {
    restaurantsInfo,
    restaurantsMenu,
    isLoading,
    error,
  };
};

export default useRestaurantMenu;
