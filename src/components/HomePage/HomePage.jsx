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
    restaurants: getRestaurants()
    // cuisines: [getDefaultCuisine(), ...getCuisines()]
  };

  // handleClick() {}
  //create a method to handleclick
  //sort state by restaurants.cuisine.name
  //return

  render() {
    const { restaurants, cuisines } = this.state;
    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <FilterBar />
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
