import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent, cleanup } from "react-testing-library";
import App from "../src/App";

beforeEach(cleanup);

test("Menu links to Order and Admin navigate to the correct pages", () => {
  const route = "/";
  const history = createMemoryHistory({ initialEntries: [route] });
  const ui = <App />;
  const { getByText, getByTestId } = render(
    <Router history={history}>{ui}</Router>
  );

  expect(getByTestId("home-page")).toBeInTheDocument();
  fireEvent.click(getByText(/admin/i));
  expect(getByTestId("admin-page")).toBeInTheDocument();
  fireEvent.click(getByText(/order/i));
  expect(getByTestId("order-page")).toBeInTheDocument();
});

// // this is a handy function that I would utilize for any component
// // that relies on the router being in context
// function renderWithRouter(
//   ui,
//   {
//     route = "/",
//     history = createMemoryHistory({ initialEntries: [route] })
//   } = {}
// ) {
//   return {
//     ...render(<Router history={history}>{ui}</Router>),
//     // adding `history` to the returned utilities to allow us
//     // to reference it in our tests (just try to avoid using
//     // this to test implementation details).
//     history
//   };
// }
