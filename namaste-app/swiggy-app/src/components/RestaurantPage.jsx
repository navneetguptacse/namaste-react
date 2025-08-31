import React, { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/static";
import ShimmerCard from "./ShimmerCard";
import MenuList from "./MenuList";
import RestaurantInfo from "./RestaurentInfo";
import { useParams } from "react-router-dom";

const RestaurentPage = () => {
  const [restaurantsInfo, setRestaurantsInfo] = useState();
  const [restaurantsMenu, setRestaurantsMenu] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(MENU_API_URL + id);
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();

        const restaurantsInfoData = data.data.cards[2].card.card.info;
        const restaurantsMenuData =
          data.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card
            .itemCards;

        setRestaurantsInfo(restaurantsInfoData || []);
        setRestaurantsMenu(restaurantsMenuData || []);
      } catch (e) {
        console.error(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

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
