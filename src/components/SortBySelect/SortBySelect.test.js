import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import React from "react";
import { render } from "react-testing-library";
import SortBySelect from "./SortBySelect";

test("renders a select list from options", () => {
  const selectOptions = [
    { name: "option1", value: "option1Value" },
    { name: "option2", value: "option2Value" }
  ];

  const { getByText, getBySelectText } = render(
    <SortBySelect options={selectOptions} />
  );

  expect(getBySelectText("option1").children.length).toEqual(2);
  expect(getByText("option1")).toHaveAttribute("value", selectOptions[0].value);
  expect(getByText("option1")).toBeInTheDocument();
  expect(getByText("option2")).toBeInTheDocument();
});

test("check if Restaurant Name is selected as default", () => {
  const selectOptions = [
    { name: "option1", value: "option1Value" },
    { name: "option2", value: "option2Value" }
  ];

  const watermelon = "honey";

  const { getBySelectText } = render(
    <SortBySelect
      options={selectOptions}
      selectSort={watermelon}
      handleSortSelect={() => {}}
    />
  );

  expect(getBySelectText("option1")).toBeVisible();
});
