import React, { Component } from "react";
// import { cloneDeep } from "lodash";
import { getRestaurants } from "../../services/restaurantService";
import Restaurant from "../Restaurant/Restaurant";
import FilterBar from "../FilterBar/FilterBar";
// import { restaurants } from "../../services/restaurantService";
import { getCuisines, getDefaultCuisine } from "../../services/cuisineService";
import "./HomePage.scss";
import "bootstrap/dist/css/bootstrap.css";

class HomePage extends Component {
  state = {
    restaurants: getRestaurants(),
    cuisines: [getDefaultCuisine(), ...getCuisines()],
    selectedCuisineId: getDefaultCuisine()._id
  };

  handleClick = cuisine => {
    this.setState({ selectedCuisineId: cuisine });
  };

  render() {
    const { restaurants, cuisines, selectedCuisineId } = this.state;
    const renderRestaurants =
      selectedCuisineId === getDefaultCuisine()._id
        ? restaurants
        : restaurants.filter(
            restaurant => restaurant.cuisine._id === selectedCuisineId
          );
    return (
      <div className="container">
        <div className="row d-flex justify-content-center mt-3">
          <FilterBar
            selectedCuisineId={selectedCuisineId}
            cuisines={cuisines}
            handleClick={this.handleClick}
          />
        </div>

        <div className="row">
          {renderRestaurants.map(restaurant => (
            <div className="card-col" key={restaurant._id}>
              <Restaurant details={restaurant} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
