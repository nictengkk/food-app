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
    selectedCuisine: null,
    selectOptions: [
      { name: "Restaurant Name", value: "name" },
      { name: "Average Price", value: "averagePrice" }
    ],
    selectedSort: "name"
  };

  filterAndSortRestaurantList = () => {
    const { selectedCuisine, restaurants, selectedSort } = this.state;
    const filteredRestaurantList =
      selectedCuisine && selectedCuisine._id
        ? restaurants.filter(res => res.cuisine._id === selectedCuisine._id)
        : restaurants;
    //sorting is done after filter as sort is mutative, it will alter the original object.
    return filteredRestaurantList.sort((a, b) => {
      if (a[selectedSort] < b[selectedSort]) return -1;
      if (a[selectedSort] > b[selectedSort]) return +1;
      return 0;
    });
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
    const {
      cuisines,
      selectedCuisine,
      selectOptions,
      selectedSort
    } = this.state;
    const filteredList = this.filterAndSortRestaurantList();

    return (
      <div className="container">
        <div className="row justify-content-between align-items-center mt-3">
          <div className="col-6">
            <FilterBar
              cuisines={cuisines}
              selected={selectedCuisine}
              handleClick={this.handleCuisineSelect}
            />
          </div>
          <div className="col-md-6 mt-3 d-flex justify-content-md-end">
            <SortBySelect
              handleSortSelect={this.handleSortSelect}
              options={selectOptions}
              selectedSort={selectedSort}
            />
          </div>
        </div>

        <div className="row">
          {filteredList.map(restaurant => (
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
