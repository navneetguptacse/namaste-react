import React from "react";
import { FaStar } from "react-icons/fa";
import { CDN_URL } from "../utils/static";
import { Link } from "react-router-dom";

const RestaurantCard = (info) => {
  const { name, cloudinaryImageId, avgRating, locality, cuisines, sla } = info;
  const image = CDN_URL + cloudinaryImageId;

  return (
    <Link
      to={`/restaurant/${info?.id}`}
      className="group block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
    >
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1">
          {name}
        </h3>

        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded text-sm">
            <FaStar size={12} />
            <span className="font-medium">{avgRating}</span>
          </div>
          <span className="text-gray-600">•</span>
          <span className="text-gray-600 text-sm font-medium">
            {sla?.slaString}
          </span>
        </div>

        <div className="text-gray-500 text-sm mb-1 line-clamp-1">
          {cuisines.join(", ")}
        </div>

        <div className="text-gray-400 text-sm line-clamp-1">{locality}</div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
