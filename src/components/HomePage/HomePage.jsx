import React, { Component } from "react";
import Restaurant from "../Restaurant/Restaurant";
import { getRestaurants } from "../../services/restaurantService";

export class HomePage extends Component {
  state = {
    restaurants: getRestaurants()
  };

  render() {
    const { restaurants } = this.state;
    return (
      <div className="container">
        <div className="row">
          {restaurants.map(restaurant => (
            <Restaurant key={restaurant._id} item={restaurant} />
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
