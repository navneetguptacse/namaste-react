import React from "react";
import { LuSearch } from "react-icons/lu";

const RestaurantSearch = ({
  searchText,
  onSearch,
  onFilter,
  isFilter,
  isActive,
}) => {
  return (
    <div className="searchbar-container">
      <div className="searchbar-input-wrapper">
        <input
          type="text"
          value={searchText}
          onChange={(e) => onSearch(e.target.value)}
          className="searchbar-input"
          placeholder="Search..."
        />
        <LuSearch className="searchbar-icon" />
      </div>
      <div className="searchbar-btn-group">
        <button
          onClick={onFilter}
          className="searchbar-btn searchbar-btn-filter"
          disabled={isActive}
        >
          {isFilter ? "Reset" : "Filter"}
        </button>
      </div>
    </div>
  );
};

export default RestaurantSearch;
