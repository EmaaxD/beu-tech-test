import React from "react";
import { RecoilRoot } from "recoil";
import { render, screen } from "@testing-library/react";

import { BookDataProps } from "@/interfaces/index";
import Home from "@/pages/index";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "/",
      query: {},
      asPath: "/",
      basePath: "/",
      isLocaleDomain: true,
      isReady: true,
      push: jest.fn(),
      prefetch: jest.fn(),
      replace: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
      isPreview: false,
    };
  },
}));

describe("Home", () => {
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

  test("<Home /> empieza a montarse", () => {
    render(
      <RecoilRoot>
        <Home books={books} />
      </RecoilRoot>
    );

    expect(screen.getByTestId("logo-app").tagName).toBe("IMG");

    expect(screen.getByTestId("input-search").tagName).toBe("DIV");

    expect(screen.getByTestId("title-footer").tagName).toBe("H6");

    expect(screen.getByTestId("container-main-imgs").children.length).toEqual(
      1
    );
  });
});
