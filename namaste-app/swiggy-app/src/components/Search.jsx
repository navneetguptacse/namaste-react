import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";

const RestaurantSearch = ({ onSearch, onFilter, isFilter, isActive }) => {
  const [input, setInput] = useState("");

  return (
    <div className="searchbar-container">
      <div className="searchbar-input-wrapper">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            onSearch(e.target.value);
          }}
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
