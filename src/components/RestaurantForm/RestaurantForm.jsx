import React, { Component } from "react";
import Input from "../Input/Input";
import Select from "../Input/Select";
import { getCuisines } from "../../services/cuisineService";
import { saveRestaurant } from "../../services/restaurantService";

export class RestaurantForm extends Component {
  state = {
    cuisines: getCuisines(),
    data: {
      name: "",
      address: "",
      openingTime: "",
      closingTime: "",
      cuisine: {
        _id: "",
        name: ""
      },
      imageUrl: "",
      averagePrice: 0
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const { data } = this.state;
    const newRestaurants = saveRestaurant(data);
    if (newRestaurants) {
      const { history } = this.props;
      history.push("/");
    }
  };

  handleChange = event => {
    const copy = { ...this.state.data };
    const keyName = event.target.name;
    const value = event.target.value;
    keyName === "averagePrice"
      ? (copy[keyName] = Number(value))
      : (copy[keyName] = value);
    this.setState({ data: copy });
  };

  render() {
    const { cuisines } = this.state;
    return (
      <div className="mx-auto">
        <h1>Restaurant Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input name="Name" type="text" handleChange={this.handleChange} />
          <Input name="Address" type="text" handleChange={this.handleChange} />
          <Input
            name="Opening Time"
            type="text"
            handleChange={this.handleChange}
          />
          <Input
            name="Closing Time"
            type="text"
            handleChange={this.handleChange}
          />
          <Select name="Cuisine" options={cuisines} />
          <Input
            name="Average Price"
            type="number"
            handleChange={this.handleChange}
          />
          <Input
            name="Image URL"
            type="text"
            handleChange={this.handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default RestaurantForm;
