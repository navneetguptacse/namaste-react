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
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
      <div className="relative w-full sm:w-96">
        <input
          type="text"
          value={searchText}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full pl-4 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-0 outline-none transition-colors duration-200 text-gray-700"
          placeholder="Search for restaurants and food"
        />
        <LuSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      </div>

      <button
        onClick={onFilter}
        disabled={isActive}
        className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
          isFilter
            ? "bg-orange-500 text-white hover:bg-orange-600"
            : "bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-50"
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {isFilter ? "Reset Filter" : "Top Rated"}
      </button>
    </div>
  );
};

export default RestaurantSearch;
