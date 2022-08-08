import { FC, useState } from "react";
import { useRouter } from "next/router";
import { Stack, Box, Typography, Rating, styled } from "@mui/material";
import Image from "next/image";
import Moment from "react-moment";
import "moment/locale/es";

import { BookCardProps, ReviewCardProps } from "@/interfaces/index";

import { AnimationContainer } from "@/components/containers/index";
import { MainIconButton, ModalDelete } from "@/components/UI/index";

import { getLengthString } from "@/utils/index";

const BookCardImage = styled(Box)(({ theme }) => ({
  minHeight: 150,

  "& > span": {
    maxWidth: "60% !important",

    [theme.breakpoints.down("md")]: {
      maxWidth: "100% !important",
    },
  },
  "& img": {
    objectFit: "cover",
    borderRadius: "19px",
  },
}));

export const BookCard: FC<BookCardProps> = ({
  id,
  title,
  authors,
  image,
  noDescription = false,
  description,
  bookSM = false,
  fullInfo = false,
}) => {
  const router = useRouter();

  return (
    <AnimationContainer>
      <Stack
        flex={1}
        alignItems="center"
        alignSelf="start"
        spacing={1}
        onClick={() => router.push(`/book/${id}`)}
      >
        <BookCardImage
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flex={1}
        >
          {image !== "" && (
            <Image
              data-testid="card-image"
              src={image}
              width={!noDescription ? 163 : 450}
              height={!noDescription ? 250 : 700}
              loading="lazy"
              alt="book cover"
            />
          )}
        </BookCardImage>

        <Rating
          name="read-only"
          value={4}
          size={bookSM ? "small" : "medium"}
          readOnly
          color="#DEC700 !important"
        />

        <Stack alignItems="center" spacing={-0.3} textAlign="center">
          <Typography
            data-testid="card-title-book"
            variant="body1"
            color="#9A9A9A"
            fontSize={15}
            fontWeight={600}
          >
            {fullInfo ? title : getLengthString(title)}
          </Typography>
          <Typography
            data-testid="card-author-book"
            variant="body1"
            color="#000"
            textTransform="capitalize"
            fontSize={16}
            fontStyle="italic"
          >
            {fullInfo ? authors : getLengthString(authors, 16)}
          </Typography>
        </Stack>

        {!noDescription && (
          <Box sx={{ mt: "30px !important" }}>
            <Typography
              data-testid="card-desc-book"
              variant="body1"
              fontSize="14px"
              lineHeight="20px"
              fontWeight={400}
            >
              {description}
            </Typography>
          </Box>
        )}
      </Stack>
    </AnimationContainer>
  );
};

export const ReviewCard: FC<ReviewCardProps> = ({
  id,
  comment,
  createdAt,
  user,
  onHandleReviewEdit,
  onHandleDltReview,
}) => {
  const [openmodal, setOpenModal] = useState<boolean>(false);

  const handleDelete = () => {
    onHandleDltReview(id);

    // close modal
    setOpenModal(false);
  };

  return (
    <>
      <Box display="flex" flexDirection="column" gap={1.2}>
        {/* comment by user UI */}
        <Typography fontSize={14} fontWeight={400}>
          {comment}
        </Typography>

        {/* containers actions user */}
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* info user by comment UI */}
          <Stack
            display="flex"
            direction="row"
            alignItems="center"
            spacing={0.3}
          >
            <Typography
              variant="caption"
              fontWeight={700}
              textTransform="capitalize"
            >
              {user}
            </Typography>
            <Typography color="#A5A5A2" fontSize={10}>
              - <Moment fromNow>{createdAt}</Moment>
            </Typography>
          </Stack>

          {/* actions user by comment UI */}
          <Stack display="flex" direction="row" spacing={0.3}>
            <MainIconButton
              onHandleClick={() => onHandleReviewEdit(id)}
              image="/icons/editicon.svg"
            />
            <MainIconButton
              onHandleClick={() => setOpenModal((c) => !c)}
              image="/icons/trashicon.svg"
            />
          </Stack>
        </Stack>
      </Box>

      <ModalDelete
        open={openmodal}
        onHandleDelete={handleDelete}
        onHandleClose={() => setOpenModal((c) => !c)}
      />
    </>
  );
};
