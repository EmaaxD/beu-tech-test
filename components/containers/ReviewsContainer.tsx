import { FC } from "react";
import { Stack } from "@mui/material";

import { MainTitle } from "../UI";
import { ReviewCard } from "../UI/Cards";

export const ReviewsContainer: FC = () => {
  return (
    <>
      <Stack mb={3}>
        <MainTitle text="Reseña" />

        <Stack spacing={4} mt={3}>
          {[1, 2, 3].map((item) => (
            <ReviewCard key={item} />
          ))}
        </Stack>
      </Stack>
    </>
  );
};
