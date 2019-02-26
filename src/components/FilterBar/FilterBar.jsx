import React from "react";

function FilterBar(props) {
  const { cuisines, handleClick, selectedCuisineId } = props;
  //cuisines is the array of 5 objects.

  const getClassName = cuisineId => {
    return selectedCuisineId === cuisineId
      ? "btn btn-outline-primary active"
      : "btn btn-outline-primary";
  };

  return (
    <div>
      <div className="btn-group" role="group">
        {cuisines.map(cuisine => (
          <button
            key={cuisine._id}
            type="button"
            className={getClassName(cuisine._id)}
            onClick={() => handleClick(cuisine._id)}
          >
            {cuisine.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
