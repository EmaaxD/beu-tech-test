import { useState } from "react";
import type { NextPage } from "next";

import { HomeLayout } from "../components/layouts";
import {
  BooksContainer,
  MainBooksContainer,
  MainContainer,
} from "../components/containers";
import { BookCard } from "../components/UI/Cards";

const Home: NextPage = () => {
  const [mook] = useState([
    {
      id: 1,
      image: "/bookcover.svg",
      score: 4,
      title: "Bitter",
      author: "akwaeke emezi",
      description:
        "The Shining in S.A. Barnes’ Dead Silence, a SF horror novel in which a woman and her crew board a decades-lost luxury cruiser and find the wreckage of a nightmare that hasn t yet ended.",
    },
    {
      id: 2,
      image: "/bookcover.svg",
      score: 4,
      title: "Dead silence",
      author: "S.A Barnes",
      description:
        "The Shining in S.A. Barnes’ Dead Silence, a SF horror novel in which a woman and her crew board a decades-lost luxury cruiser and find the wreckage of a nightmare that hasn t yet ended.",
    },
    {
      id: 3,
      image: "/bookcover.svg",
      score: 4,
      title: "Hunt the stars",
      author: "jessie mihail",
      description:
        "The Shining in S.A. Barnes’ Dead Silence, a SF horror novel in which a woman and her crew board a decades-lost luxury cruiser and find the wreckage of a nightmare that hasn t yet ended.",
    },
    {
      id: 4,
      image: "/bookcover.svg",
      score: 4,
      title: "Mikey 7",
      author: "edward ashton",
      description:
        "The Shining in S.A. Barnes’ Dead Silence, a SF horror novel in which a woman and her crew board a decades-lost luxury cruiser and find the wreckage of a nightmare that hasn t yet ended.",
    },
    {
      id: 5,
      image: "/bookcover.svg",
      score: 4,
      title: "Moon Witch",
      author: "edward ashton",
      description:
        "The Shining in S.A. Barnes’ Dead Silence, a SF horror novel in which a woman and her crew board a decades-lost luxury cruiser and find the wreckage of a nightmare that hasn t yet ended.",
    },
    {
      id: 6,
      image: "/bookcover.svg",
      score: 4,
      title: "Moon Witch",
      author: "edward ashton",
      description:
        "The Shining in S.A. Barnes’ Dead Silence, a SF horror novel in which a woman and her crew board a decades-lost luxury cruiser and find the wreckage of a nightmare that hasn t yet ended.",
    },
    {
      id: 7,
      image: "/bookcover.svg",
      score: 4,
      title: "Moon Witch",
      author: "edward ashton",
      description:
        "The Shining in S.A. Barnes’ Dead Silence, a SF horror novel in which a woman and her crew board a decades-lost luxury cruiser and find the wreckage of a nightmare that hasn t yet ended.",
    },
    {
      id: 8,
      image: "/bookcover.svg",
      score: 4,
      title: "Moon Witch",
      author: "edward ashton",
      description:
        "The Shining in S.A. Barnes’ Dead Silence, a SF horror novel in which a woman and her crew board a decades-lost luxury cruiser and find the wreckage of a nightmare that hasn t yet ended.",
    },
  ]);

  return (
    <>
      <HomeLayout>
        <MainContainer>
          <MainBooksContainer>
            {mook.slice(0, 2).map((book) => (
              <BookCard key={book.id} {...book} noDescription />
            ))}
          </MainBooksContainer>

          <BooksContainer>
            {mook.slice(2, mook.length).map((book) => (
              <BookCard key={book.id} {...book} bookSM noDescription />
            ))}
          </BooksContainer>
        </MainContainer>
      </HomeLayout>
    </>
  );
};

export default Home;
