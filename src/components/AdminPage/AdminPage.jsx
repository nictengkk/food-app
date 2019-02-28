import React, { Component } from "react";
import RestaurantTable from "../RestaurantTable/RestaurantTable";
import {
  getRestaurants,
  deleteRestaurant
} from "../../services/restaurantService";

class AdminPage extends Component {
  state = {
    restaurants: getRestaurants()
  };

  handleDelete = restaurant => {
    deleteRestaurant(restaurant);
    this.setState({ restaurants: getRestaurants() });
  };

  render() {
    const { restaurants } = this.state;
    return (
      <div>
        <RestaurantTable
          restaurants={restaurants}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default AdminPage;
