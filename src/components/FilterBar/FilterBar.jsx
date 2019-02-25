import React from "react";

function FilterBar(props) {
  const { handleClick } = props;
  return (
    <div className="text-center">
      <form className="form-inline mt-3">
        <div className="btn-group ml-3" role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={() => props.handleClick()}
          >
            All
          </button>
          <button type="button" class="btn btn-outline-primary">
            Western
          </button>
          <button type="button" class="btn btn-outline-primary">
            Japanese
          </button>
          <button type="button" class="btn btn-outline-primary">
            Thai
          </button>
          <button type="button" class="btn btn-outline-primary">
            Chinese
          </button>
        </div>
      </form>
    </div>
  );
}

export default FilterBar;
