import React, { Component } from "react";
import { cloneDeep } from "lodash";
import { getRestaurants } from "../../services/restaurantService";
import Restaurant from "../Restaurant/Restaurant";
import FilterBar from "../FilterBar/FilterBar";
import { restaurants } from "../../services/restaurantService";
import { getCuisines, getDefaultCuisine } from "../../services/cuisineService";
import "./HomePage.scss";
import "bootstrap/dist/css/bootstrap.css";

class HomePage extends Component {
  state = {
    restaurants: getRestaurants(),
    cuisine: [getDefaultCuisine(), ...getCuisines()]
  };

  handleClick() {}
  //create a method to handleclick
  //sort state by restaurants.cuisine.name
  //return

  render() {
    const { restaurants } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <FilterBar handleClick={this.handleClick} />
        </div>

        <div className="row">
          {restaurants.map(restaurant => (
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
