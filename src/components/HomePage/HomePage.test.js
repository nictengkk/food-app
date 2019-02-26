import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import HomePage from "./HomePage";
import * as RestaurantService from "../../services/restaurantService"; //* means exporting everything in the restaurantService js document into an object and importing into this file

const sampleData = [
  {
    _id: "5c342ac9fc13ae39f8000000",
    name: "The Burger Bar by Fatboy's Concepts (Boat Quay)",
    openingTime: "11:00",
    closingTime: "22:30",
    cuisine: { _id: "5c3430ecfc13ae122d000000", name: "Western" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000000.jpg"
  },
  {
    _id: "5c342ac9fc13ae39f8000001",
    name: "The Soup Spoon (Tanjong Pagar Exchange)",
    openingTime: "12:00",
    closingTime: "21:30",
    cuisine: { _id: "5c3430ecfc13ae122d000000", name: "Western" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000001.jpg"
  }
];

//spyOn takes in two arguments, first one an object, and second argument is the method tested.
//mockImplementation takes a function and passes through a different function with a different logic
//for this example. the object RestaurantService contains all the different methods, including getRestaurants(). The argument in the mockImplementation function changes the logic behind the getRestaurants method and redirects it to take data from sampleData instead.
beforeEach(() => {
  return jest
    .spyOn(RestaurantService, "getRestaurants")
    .mockImplementation(() => sampleData);
});

afterEach(() => {
  RestaurantService.getRestaurants.mockRestore();
});

//each test should only test one function, test codes within arrow function.
test("HomePage renders list of restaurants", () => {
  // include helper methods as applicable. sampleData is used because without an input data, there will be uncertainty to what is being tested (general data can be manipulated with us knowing, hence code might break if input data is no longer available)
  const { getAllByText } = render(<HomePage item={sampleData} />);

  expect(RestaurantService.getRestaurants).toHaveBeenCalled();
  expect(getAllByText("Order").length).toEqual(2);
});
