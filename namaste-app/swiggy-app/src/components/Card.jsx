// RestaurantCard.jsx
import React from "react";
import { FaStar } from "react-icons/fa";
import "../App.css"; // See CSS below

const RestaurantCard = ({ image, name, rating, time, cuisines, location }) => (
  <div className="card">
    <img src={image} alt={name} className="card-image" />
    <div className="card-content">
      <h3 className="card-title">{name}</h3>
      <div className="card-rating-time">
        <FaStar color="#43b02a" size={16} />
        <span>{rating}</span>
        <span className="dot">·</span>
        <span>{time}</span>
      </div>
      <div className="card-cuisines">{cuisines}</div>
      <div className="card-location">{location}</div>
    </div>
  </div>
);

export default RestaurantCard;
