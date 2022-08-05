import { FC } from "react";
import { Stack } from "@mui/material";

import { ReviewsLS } from "../../interfaces";

import { MainTitle } from "../UI";
import { ReviewCard } from "../UI/Cards";

interface Props {
  comments: ReviewsLS;
}

export const ReviewsContainer: FC<Props> = ({ comments }) => {
  return (
    <>
      <Stack mb={3}>
        <MainTitle text="Reseñas" />

        <Stack spacing={4} mt={3}>
          {comments.comments.map((comment) => (
            <ReviewCard key={comment.id} {...comment} />
          ))}
        </Stack>
      </Stack>
    </>
  );
};
