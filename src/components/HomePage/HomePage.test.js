import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render, getByAltText } from "react-testing-library";
import HomePage from "./HomePage";
import * as RestaurantService from "../../services/restaurantService"; //* means exporting everything in the restaurantService js document into an object.

test("HomePage renders list of restaurants", () => {
  const sampleData = [
    {
      _id: "5c342ac9fc13ae39f8000000",
      name: "The Burger Bar by Fatboy's Concepts (Boat Quay)",
      address: "35 Boat Quay, 049824 Singapore",
      openingTime: "11:00",
      closingTime: "22:30",
      cuisine: { _id: "5c3430ecfc13ae122d000000", name: "Western" },
      imageUrl: "images/restaurants/5c342ac9fc13ae39f8000000.jpg",
      averagePrice: 25
    },
    {
      _id: "5c342ac9fc13ae39f8000001",
      name: "The Soup Spoon (Tanjong Pagar Exchange)",
      address:
        "120 Maxwell Road, Tanjong Pagar Xchange, B1-31, 069119 Singapore",
      openingTime: "12:00",
      closingTime: "21:30",
      cuisine: { _id: "5c3430ecfc13ae122d000000", name: "Western" },
      imageUrl: "images/restaurants/5c342ac9fc13ae39f8000001.jpg",
      averagePrice: 12
    }
  ];
});
