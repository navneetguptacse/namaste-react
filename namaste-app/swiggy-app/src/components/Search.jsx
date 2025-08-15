import React from "react";

const RestaurantSearchBar = ({ value, onChange, onSearch, onFilter }) => (
  <div className="searchbar-container">
    <input
      type="text"
      placeholder="Search restaurants..."
      value={value}
      onChange={onChange}
      className="searchbar-input"
    />
    <div className="searchbar-btn-group">
      <button onClick={onSearch} className="searchbar-btn searchbar-btn-search">
        Search
      </button>
      <button onClick={onFilter} className="searchbar-btn searchbar-btn-filter">
        Filter
      </button>
    </div>
  </div>
);

export default RestaurantSearchBar;
