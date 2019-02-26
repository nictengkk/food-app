import React from "react";

function FilterBar(props) {
  const { handleClick, cuisines } = props;

  getclass = (cuisine, selected) => {
    return;
  };

  return (
    <div>
      <form className="form-inline mt-3">
        <div className="btn-group ml-3" role="group" aria-label="Basic example">
          {cuisines.map(button => (
            <button
              type="button"
              class={getClass}
              onClick={() => props.handleClick()}
            >
              {name}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
}

export default FilterBar;
