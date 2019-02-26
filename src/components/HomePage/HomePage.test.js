import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render, fireEvent, getByTestId } from "react-testing-library";
import HomePage from "./HomePage";
import * as RestaurantService from "../../services/restaurantService";

const sampleData = [
  {
    _id: "1",
    name: "The Burger Bar by Fatboy's Concepts (Boat Quay)",
    openingTime: "11:00 AM",
    closingTime: "10:30 PM",
    cuisine: { _id: "5c3430ecfc13ae122d000000", name: "Western" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000000.jpg"
  },
  {
    _id: "2",
    name: "Ramen Champion",
    openingTime: "11:00",
    closingTime: "22:00",
    cuisine: { _id: "5c3430ecfc13ae122d000001", name: "Japanese" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000003.jpg"
  }
];

beforeEach(() => {
  jest
    .spyOn(RestaurantService, "getRestaurants")
    .mockImplementation(() => sampleData);
}); //mockImplementation changes the function method of getRestaurants to take data from sampleData, and result in an object called RestaurantService.

afterEach(() => {
  RestaurantService.getRestaurants.mockRestore();
}); //restores the mocked up function back to its original function.

test("displays list of two restaurants on load", () => {
  const { getAllByText } = render(<HomePage />);

  expect(RestaurantService.getRestaurants).toHaveBeenCalledTimes(1);
  expect(getAllByText("Order").length).toEqual(2);
});

test("FilterBar renders cuisine list based on selectedCuisineId", () => {
  //destructure HomePage object when rendered, with the helper methods to be used
  const { getByText, queryByText, getAllByText, getByTestId } = render(
    <HomePage />
  );
  //only recommended for cases where you can't match by text or it doesn't make sense
  fireEvent.click(getByTestId("filter-btn-japanese"));

  //positive assertion
  expect(getByText(/ramen champion/i)).toBeInTheDocument();
  //negative assertion
  expect(queryByText(/Burger Bar by Fatboy/i)).not.toBeInTheDocument();
  //ensure only one restaurant card is rendered
  expect(getAllByText("Order").length).toEqual(1);
});
