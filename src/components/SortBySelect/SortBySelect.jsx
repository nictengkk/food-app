import React from "react";

function SortBySelect(handleSortSelect, selectedSort) {
  return (
    <div>
      <label className="mr-3">Sort By:</label>
      <select
        className="custom-select col-8"
        onChange={handleSortSelect}
        value={selectedSort}
      >
        <option value="restaurantName">Restaurant Name</option>
        <option value="averagePrice">Average Price</option>
      </select>
    </div>
  );
}

export default SortBySelect;
