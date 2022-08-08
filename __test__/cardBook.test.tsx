import React from "react";
import { RecoilRoot } from "recoil";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BookCard } from "@/components/UI";

import { BookDataProps } from "@/interfaces/index";

const handleSearch = jest.fn();

describe("Search input", () => {
  const books: BookDataProps[] = [
    {
      id: "asdasd",
      authors: "Anonymous",
      image:
        "https://jackmoreno.files.wordpress.com/2014/04/cantar-del-mc3ado-cid.jpg?w=648",
      description: "this is a simple descripcion for a book",
      title: "react testing",
    },
  ];

  test("<BookCard />  Card libro", () => {
    render(
      <RecoilRoot>
        <BookCard {...books[0]} />
      </RecoilRoot>
    );

    expect(screen.getByTestId("card-image")).toBeInTheDocument();
    expect(screen.getByTestId("card-title-book")).toBeInTheDocument();
    expect(screen.getByTestId("card-author-book")).toBeInTheDocument();
    expect(screen.getByTestId("card-desc-book")).toBeInTheDocument();
    expect(screen.getByTestId("card-desc-book")).toBeInTheDocument();
  });
});
