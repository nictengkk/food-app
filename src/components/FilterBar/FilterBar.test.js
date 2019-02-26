import "jest-dom/extend-expect";
import FilterBar from "./FilterBar";
import { render } from "react-testing-library";
import React from "react";

test.skip("FilterBar renders cuisines list", () => {
  const sampleData = [
    {
      _id: "1",
      name: "Western"
    },
    {
      _id: "2",
      name: "Japanese"
    }
  ];

  const { getByText } = render(<FilterBar cuisines={sampleData} />);

  //   expect(container.querySelectorAll("buttons").length).toEqual(2);
  expect(getByText(/Western/i)).toBeInTheDocument();
  expect(getByText(/Japanese/i)).toBeInTheDocument();
});

test.skip("FilterBar renders selectedCuisine with className active", () => {});
