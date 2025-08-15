import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import RestaurantSearch from "./Search";

import { RESTAURANTS } from "../data/static";

export default function Body() {
  const [restaurants, setRestaurants] = useState(RESTAURANTS);
  // const [filter, setFilter] = useState("Filter");

  const [check, setCheck] = useState(false);

  return (
    <div className="body-main">
      <RestaurantSearch
        onFilter={() => {
          // const topRated = restaurants.filter(
          //   (restaurant) => restaurant?.info?.avgRating >= 4.5
          // );

          // if (filter === "Filter") {
          //   setFilter("Reset");
          //   setRestaurants(topRated);
          // } else {
          //   setFilter("Filter");
          //   setRestaurants(RESTAURANTS);
          // }

          // Or,
          if (!check) {
            setRestaurants(restaurants.filter((r) => r.info?.avgRating >= 4.5));
          } else {
            setRestaurants(RESTAURANTS);
          }
          setCheck((check) => !check);
        }}
        filter={check ? "Reset" : "Filter"}
      />
      <div className="restaurant-list">
        {restaurants.map(({ info }) => (
          <RestaurantCard key={info?.id} {...info} />
        ))}
      </div>
    </div>
  );
}
