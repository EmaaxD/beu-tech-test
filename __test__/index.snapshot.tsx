import React from "react";
import { render } from "@testing-library/react";
import Home from "@/pages/index";

it("renders homepage unchanged", () => {
  const { container } = render(<Home books={[]} />);
  expect(container).toMatchSnapshot();
});
