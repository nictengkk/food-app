import "jest-dom/extend-expect";
import FilterBar from "./FilterBar";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import React from "react";

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

test("FilterBar renders cuisines list", () => {
  const { getByText } = render(<FilterBar cuisines={sampleData} />);

  //   expect(container.querySelectorAll("buttons").length).toEqual(2);
  expect(getByText(/Western/i)).toBeInTheDocument();
  expect(getByText(/Japanese/i)).toBeInTheDocument();
});

test("FilterBar renders selectedCuisine with className active", () => {
  const data = {
    _id: "2",
    name: "Japanese"
  };

  const { getByText } = render(
    <FilterBar cuisines={sampleData} selectedCuisineId={data._id} />
  );

  expect(getByText(/Japanese/i)).toHaveClass("active");
});
