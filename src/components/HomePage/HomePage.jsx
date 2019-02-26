import React, { Component } from "react";
import { getRestaurants } from "../../services/restaurantService";
import { getCuisines, getDefaultCuisine } from "../../services/cuisineService";
import Restaurant from "../Restaurant/Restaurant";
import FilterBar from "../FilterBar/FilterBar";
import SortBySelect from "../SortBySelect/SortBySelect";
import "./HomePage.scss";

class HomePage extends Component {
  state = {
    restaurants: getRestaurants(),
    cuisines: [getDefaultCuisine(), ...getCuisines()],
    selectedCuisine: null
  };

  handleCuisineSelect = cuisine => {
    const finalCuisine = cuisine.name === "All" ? null : cuisine;
    this.setState({
      selectedCuisine: finalCuisine
    });
  };

  handleSortSelect = event => {
    this.setState({ selectedSort: event.target.value });
  };

  render() {
    const { restaurants, cuisines, selectedCuisine } = this.state;
    const filteredRestaurantList =
      selectedCuisine && selectedCuisine._id
        ? restaurants.filter(res => res.cuisine._id === selectedCuisine._id)
        : restaurants;

    return (
      <div className="container">
        <div className="row justify-content-between align-item-center mt-3">
          <div className="col-6">
            <FilterBar
              cuisines={cuisines}
              selected={selectedCuisine}
              handleClick={this.handleCuisineSelect}
            />
          </div>
          <div className="col-6 d-flex justify-content-md-end">
            <SortBySelect handleSortSelect={this.handleSortSelect} />
          </div>
        </div>

        <div className="row">
          {filteredRestaurantList.map(restaurant => (
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
