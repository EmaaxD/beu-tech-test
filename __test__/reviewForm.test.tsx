import React from "react";
import { RecoilRoot } from "recoil";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ReviewForm } from "@/components/containers";

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

const handleSearch = jest.fn();

describe("ReviewForm", () => {
  test("<ReviewForm />  iniciar form", () => {
    render(
      <RecoilRoot>
        <ReviewForm />
      </RecoilRoot>
    );

    expect(screen.getByTestId("title").tagName).toBe("H6");
    expect(screen.getByTestId("title")).toBeInTheDocument();

    expect(screen.queryByTestId("container-alert")).not.toBeInTheDocument();
  });

  test("<ReviewForm />  enviar form", () => {
    render(
      <RecoilRoot>
        <ReviewForm />
      </RecoilRoot>
    );

    userEvent.type(screen.getByTestId("username"), "Ema");
    userEvent.type(screen.getByTestId("review"), "This is a simple comment");

    // handle submit form
    const btnForm = screen.getByTestId("btn-send");
    userEvent.click(btnForm);
  });
});
