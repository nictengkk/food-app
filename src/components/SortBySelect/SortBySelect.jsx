import React from "react";

function SortBySelect(handleSortSelect, selectedSort) {
  return (
    <div className="d-flex justify-content-center">
      <label className="d-flex mb-0 mr-2">Sort By:</label>
      <select
        className="p-3 col-8 btn btn-primary btn-lg text-light"
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
