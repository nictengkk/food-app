import React from "react";

const SortBySelect = props => {
  const { options, handleSortSelect, selectedSort } = props;
  return (
    <div className="d-flex justify-content-center">
      <label className="mb-0 mr-2">Sort By:</label>
      <select
        className="p-3 btn btn-primary btn-lg text-light"
        onChange={handleSortSelect}
        value={selectedSort}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortBySelect;
