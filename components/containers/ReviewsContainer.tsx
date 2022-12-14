import { FC } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Stack } from "@mui/material";

import { reviewListState, selectReviewState } from "../../atoms";

import { Reviews, ReviewsLS } from "../../interfaces";

import { MainTitle } from "../UI";
import { ReviewCard } from "../UI/Cards";

import { removeReview } from "../../utils";

interface Props {
  comments: Reviews[];
}

export const ReviewsContainer: FC<Props> = ({ comments }) => {
  const [reviewList, setReviewList] = useRecoilState<any>(reviewListState);

  const setSelectReview = useSetRecoilState<Reviews>(selectReviewState);

  const handleReviewEdit = (id: string) => {
    const findComment = reviewList.comments.find(
      (comment: Reviews) => comment.id === id
    );

    if (findComment) {
      setSelectReview((c: Reviews) => ({ ...findComment }));
    }
  };

  const handleReviewDelete = (id: string) => {
    // setting state recoil
    setReviewList((c: ReviewsLS) => ({
      ...c,
      comments: c.comments.filter((comment: Reviews) => comment.id !== id),
    }));

    // removing comment in LS by idBook and idComment
    removeReview(reviewList.id, id);

    setSelectReview((c) => ({
      comment: "",
      createdAt: "",
      id: "",
      user: "",
    }));
  };

  return (
    <>
      <Stack mb={3}>
        <MainTitle text="Reseñas" />

        <Stack spacing={4} mt={3}>
          {comments.map((comment) => (
            <ReviewCard
              key={comment.id}
              {...comment}
              onHandleReviewEdit={handleReviewEdit}
              onHandleDltReview={handleReviewDelete}
            />
          ))}
        </Stack>
      </Stack>
    </>
  );
};
