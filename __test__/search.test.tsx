import React from "react";
import { RecoilRoot } from "recoil";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Search } from "@/components/UI";

const handleSearch = jest.fn();

describe("Search input", () => {
  test("<Search />  buscar libro", () => {
    render(
      <RecoilRoot>
        <Search />
      </RecoilRoot>
    );

    // handle submit form
    const btnForm = screen.getByTestId("books-search");
    userEvent.click(btnForm);

    userEvent.type(screen.getByTestId("input-search"), "React");
  });
});
