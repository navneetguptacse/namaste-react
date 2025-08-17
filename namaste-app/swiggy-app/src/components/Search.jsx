import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const RestaurantSearch = ({ onSearch, onFilter, isFilter, isActive }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    const handleSearchClick = () => {
      onSearch(input);
    };
    handleSearchClick();
  }, [input]);

  return (
    <div className="searchbar-container">
      <div className="searchbar-input-wrapper">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="searchbar-input"
          placeholder="Search..."
        />
        <FaSearch className="searchbar-icon" />
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
