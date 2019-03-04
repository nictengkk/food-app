import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render, fireEvent } from "react-testing-library";
import RestaurantForm from "./RestaurantForm";

test("displays all form fields on load", () => {
  const match = { params: { id: 1 } };
  const returnPath = "/admin";

  const { getByLabelText } = render(
    <RestaurantForm match={match} returnPath={returnPath} />
  );

  expect(getByLabelText("Name")).toHaveAttribute("type", "text");
  expect(getByLabelText("Address")).toHaveAttribute("type", "text");
  expect(getByLabelText("Opening Time")).toHaveAttribute("type", "text");
  expect(getByLabelText("Closing Time")).toHaveAttribute("type", "text");
  expect(getByLabelText("Cuisine")).toBeInTheDocument();
  expect(getByLabelText("Average Price")).toHaveAttribute("type", "number");
  expect(getByLabelText("Image URL")).toHaveAttribute("type", "text");
});

test("save button is disabled when page loads", () => {
  const match = { params: { id: 1 } };
  const returnPath = "/admin";
  const { getByText } = render(
    <RestaurantForm match={match} returnPath={returnPath} />
  );
  expect(getByText("Save")).toHaveAttribute("disabled");
});

const match = { params: { id: 1 } };
const returnPath = "/admin";

test("error message appears if text input is invalid, and is removed if valid", () => {
  const { getByText, getByLabelText, queryByText } = render(
    <RestaurantForm match={match} returnPath={returnPath} />
  );
  const nameInput = getByLabelText("Name");
  //negative assertion, use queryByText. positive assertion, use getByText

  fireEvent.change(nameInput, { target: { value: "a" } });
  expect(
    queryByText('"name" is not allowed to be empty')
  ).not.toBeInTheDocument();

  fireEvent.change(nameInput, { target: { value: "" } });
  expect(getByText('"name" is not allowed to be empty')).toBeInTheDocument();
});

test("error message appears if number input is invalid", () => {
  const { getByText, getByLabelText, queryByText } = render(
    <RestaurantForm match={match} returnPath={returnPath} />
  );
  const numberInput = getByLabelText("Average Price");
  //negative assertion, use queryByText. positive assertion, use getByText

  fireEvent.change(numberInput, { target: { value: "1" } });
  expect(
    queryByText('"averagePrice" must be larger than or equal to 1')
  ).not.toBeInTheDocument();

  fireEvent.change(numberInput, { target: { value: "0" } });
  expect(
    getByText('"averagePrice" must be larger than or equal to 1')
  ).toBeInTheDocument();
});
