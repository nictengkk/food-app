import React from "react";

function FilterBar(props) {
  // const { handleClick, cuisines } = props;

  // const getClass = (cuisine, selected) => {
  //   return "btn btn-outline-primary";
  // };

  const cuisines = ["All", "Western", "Japanese", "Thai", "Chinese"];

  return (
    <div>
      <div className="btn-group" role="group">
        {cuisines.map((cuisine, i) => (
          <button
            key={cuisine._id}
            type="button"
            className="btn btn-outline-primary"
            onClick={() => props.handleClick()}
          >
            {cuisine}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
