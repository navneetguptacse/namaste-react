import React from "react";
import "../App.css";
import { FaStar } from "react-icons/fa";
import { IMG_BASE_URL } from "../data/static";

const RestaurantCard = (info) => {
  const { name, cloudinaryImageId, avgRating, locality, cuisines, sla } = info;
  const image = IMG_BASE_URL + cloudinaryImageId;

  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <div className="card-rating-time">
          <FaStar color="#43b02a" size={16} />
          <span>{avgRating}</span>
          <span className="dot">·</span>
          <span>{sla?.slaString}</span>
        </div>
        <div className="card-cuisines">{cuisines.join(", ")}</div>
        <div className="card-location">{locality}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
