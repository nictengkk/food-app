import React, { Component } from "react";
import { Link } from "react-router-dom";
import RestaurantTable from "../RestaurantTable/RestaurantTable";
import {
  getRestaurants,
  deleteRestaurant
} from "../../services/restaurantService";
import "bootstrap/dist/css/bootstrap.css";

class AdminPage extends Component {
  state = {
    restaurants: getRestaurants()
  };

  handleDelete = restaurantId => {
    deleteRestaurant(restaurantId);
    this.setState({ restaurants: getRestaurants() });
  };

  render() {
    const { restaurants } = this.state;
    return (
      <div>
        <div className="d-flex justify-content-end mb-2">
          <Link className="btn btn-primary" to="/restaurants/new">
            Create New
          </Link>
        </div>
        <div data-testid="admin-page">
          <RestaurantTable
            restaurants={restaurants}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default AdminPage;
