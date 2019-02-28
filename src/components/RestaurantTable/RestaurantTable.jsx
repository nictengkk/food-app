import React from "react";

function RestaurantTable({ restaurants, handleDelete }) {
  const sortedList = restaurants.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    } else return 0;
  });

  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Opening Hours</th>
          <th>Cuisine</th>
          <th>Average Price</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {sortedList.map(restaurant => (
          <tr key={restaurant._id}>
            <td>{restaurant.name}</td>
            <td>{restaurant.address}</td>
            <td>
              {restaurant.openingTime} - {restaurant.closingTime}
            </td>
            <td>{restaurant.cuisine.name}</td>
            <td>${restaurant.averagePrice.toFixed(2)}</td>
            <td>
              <button
                onClick={() => {
                  handleDelete(restaurant._id);
                }}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RestaurantTable;
