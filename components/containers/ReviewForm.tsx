import { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Box, Stack } from "@mui/material";

import { reviewListState, selectReviewState } from "../../atoms";

import { Reviews, StateReviewForm } from "../../interfaces";

import {
  ErrorAlert,
  MainTitle,
  SimpleInput,
  SimpleTextArea,
  MainButton,
} from "../UI";

import { getRandomId, reviewLS, validationString } from "../../utils";

export const ReviewForm: FC = () => {
  const [form, setForm] = useState<StateReviewForm>({
    username: "",
    review: "",
  });
  const [error, setError] = useState<string>("");
  const [disabledform, setDisabledform] = useState<boolean>(true);

  const [selectReview, setSelectReview] = useRecoilState(selectReviewState);

  const setReviewList = useSetRecoilState(reviewListState);

  const {
    query: { id },
  } = useRouter();

  const handleChange = ({ target }: any) =>
    setForm((c) => ({ ...c, [target.name]: target.value }));

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { username, review } = form;

    try {
      // validations to string
      await validationString(username);
      await validationString(review);

      if (selectReview.id !== "") {
        const data = {
          ...selectReview,
          user: form.username,
          comment: form.review,
        };

        await reviewLS(id, "edit", data);

        // set recoil state reviewList
        setReviewList((c: any) => ({
          ...c,
          comments: c.comments.map((comment: Reviews) =>
            comment.id === selectReview.id
              ? { ...comment, user: form.username, comment: form.review }
              : comment
          ),
        }));
        setSelectReview((c) => ({
          id: "",
          comment: "",
          createdAt: "",
          user: "",
        }));
      } else {
        // building review object to save
        const data: Reviews = {
          id: getRandomId(),
          user: form.username,
          comment: form.review,
          createdAt: `${new Date()}`,
        };

        // save review object LS
        await reviewLS(id, "insert", data);

        // set recoild state reviewList
        setReviewList((c: any) => ({
          ...c,
          comments: [...c.comments, data],
        }));
      }

      // clean form
      setForm({
        username: "",
        review: "",
      });
    } catch (error: any) {
      console.log(error);
      setError(error?.message);
    }
  };

  useEffect(() => {
    (function () {
      if (form.username.trim() !== "" && form.review.trim() !== "") {
        setDisabledform(false);
      } else {
        setDisabledform(true);
      }
    })();
  }, [form]);

  useEffect(() => {
    (function () {
      setForm((c) => ({
        ...c,
        username: selectReview.user,
        review: selectReview.comment,
      }));
    })();
  }, [selectReview]);

  return (
    <>
      <Stack spacing={3}>
        <MainTitle
          text={`${
            selectReview.id !== "" ? "Editar reseña" : "Escribe una reseña"
          }`}
        />

        {/* Init component review form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          mt="25px !important"
          mb={2}
        >
          <Stack spacing={3}>
            <SimpleInput
              title="Nombre de usuario"
              name="username"
              value={form.username}
              onHandleChange={handleChange}
              placeholder="Escribe aquí tu nombre de usuario"
            />

            <SimpleTextArea
              title="Reseña"
              name="review"
              value={form.review}
              onHandleChange={handleChange}
              placeholder="Escribe aquí tu reseña"
            />

            {error !== "" && <ErrorAlert error={error} />}

            <Box display="flex" flexDirection="column" alignItems="end">
              <MainButton
                type="submit"
                text={`${selectReview.id !== "" ? "Guardar" : "Publicar"}`}
                disabled={disabledform}
              />
            </Box>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
