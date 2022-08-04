import type { NextPage } from "next";
import { Box, Divider, Stack } from "@mui/material";

import { BookLayout } from "../../components/layouts";
import {
  MainContainer,
  ReviewForm,
  ReviewsContainer,
} from "../../components/containers";
import { BookCard } from "../../components/UI/Cards";

const BookPage: NextPage = () => {
  const book = {
    id: 1,
    image: "/bookcover.svg",
    score: 4,
    title: "Bitter",
    author: "akwaeke emezi",
    description:
      "The Shining in S.A. Barnes’ Dead Silence, a SF horror novel in which a woman and her crew board a decades-lost luxury cruiser and find the wreckage of a nightmare that hasn t yet ended.",
  };

  return (
    <>
      <BookLayout>
        <MainContainer>
          <BookCard {...book} />

          <Box my={5}>
            <Divider />
          </Box>

          <Box my={3}>
            <ReviewsContainer />
            <Divider />
          </Box>

          <ReviewForm />
        </MainContainer>
      </BookLayout>
    </>
  );
};

export default BookPage;
