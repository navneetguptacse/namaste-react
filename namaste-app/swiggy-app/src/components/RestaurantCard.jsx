import React from "react";
import "../App.css";
import { FaStar } from "react-icons/fa";
import { CDN_URL } from "../utils/static";
import { Link } from "react-router-dom";

const RestaurantCard = (info) => {
  const { name, cloudinaryImageId, avgRating, locality, cuisines, sla } = info;
  const image = CDN_URL + cloudinaryImageId;

  return (
    <div className="card">
      <Link
        key={info?.id}
        to={`/restaurant/${info?.id}`}
        style={{
          textDecoration: "none",
          color: "inherit",
          cursor: "pointer",
        }}
      >
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
      </Link>
    </div>
  );
};

export default RestaurantCard;
