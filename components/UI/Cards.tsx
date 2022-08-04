import { FC } from "react";
import { useRouter } from "next/router";
import { Stack, Box, Typography, Rating } from "@mui/material";
import Image from "next/image";

import { MainIconButton } from "./Buttons";

interface Props {
  id: string | number;
  image: string;
  title: string;
  author: string;
  score: number;
  noDescription?: boolean;
  description: string;
  bookSM?: boolean;
}

export const BookCard: FC<Props> = ({
  id,
  image,
  title,
  author,
  score,
  noDescription = false,
  description,
  bookSM = false,
}) => {
  const router = useRouter();

  return (
    <>
      <Stack
        flex={1}
        alignItems="center"
        spacing={1}
        onClick={() => router.push(`/book/${id}`)}
      >
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flex={1}
        >
          <Image
            src={image}
            width={450}
            height={!noDescription ? 400 : 700}
            alt="book cover"
          />
        </Box>

        <Rating
          name="read-only"
          value={score}
          size={bookSM ? "small" : "medium"}
          readOnly
        />

        <Stack alignItems="center" spacing={-0.3} textAlign="center">
          <Typography variant="body1" color="#9A9A9A" fontWeight={600}>
            {title}
          </Typography>
          <Typography
            variant="body1"
            color="#000"
            textTransform="capitalize"
            fontStyle="italic"
          >
            {author}
          </Typography>
        </Stack>

        {!noDescription && (
          <Box sx={{ mt: "30px !important" }}>
            <Typography variant="body1" fontWeight={600}>
              {description}
            </Typography>
          </Box>
        )}
      </Stack>
    </>
  );
};

export const ReviewCard: FC = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography fontSize={14} fontWeight={400}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, Lorem
          ipsum dolor sit amet consectetur adipiscing elit.{" "}
        </Typography>

        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            display="flex"
            direction="row"
            alignItems="center"
            spacing={0.3}
          >
            <Typography variant="caption" fontWeight={700}>
              Anonymous
            </Typography>
            <Typography color="#A5A5A2" fontSize={10}>
              - Hace 1 min
            </Typography>
          </Stack>

          <Stack display="flex" direction="row" spacing={0.3}>
            <MainIconButton image="/icons/editicon.svg" />
            <MainIconButton image="/icons/trashicon.svg" />
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
