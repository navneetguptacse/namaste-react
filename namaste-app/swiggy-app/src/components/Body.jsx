import React from "react";
import RestaurantCard from "./Card";
import RestaurantSearchBar from "./Search";
import { Restaurants } from "../data/restaurants";

export default function Body() {
  return (
    <div className="body-main">
      <RestaurantSearchBar />
      <div className="restaurant-list">
        {Restaurants.map((rest, idx) => (
          <RestaurantCard key={idx} {...rest} />
        ))}
      </div>
    </div>
  );
}
