import React from "react";

function Restaurant({ item }) {
  const { name, openingTime, closingTime, cuisine, imageUrl } = item;

  // const cardStyle = { width: "30rem" };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card mb-3">
        <img className="card-img-top" src={imageUrl} alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="card-text text-muted">
            <p>{cuisine.name}</p>
            <p>
              {openingTime} - {closingTime}
            </p>
          </div>
        </div>
        <div className="card-footer text-muted">
          <button className="btn btn-outline-primary">Order</button>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
