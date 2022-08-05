import { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Stack } from "@mui/material";

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
    username: "Anonymous",
    review: "",
  });
  const [error, setError] = useState<string>("");
  const [disabledform, setDisabledform] = useState<boolean>(true);

  const {
    query: { id },
  } = useRouter();

  const handleChange = ({ target }: any) =>
    setForm((c) => ({ ...c, [target.name]: target.value }));

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { username, review } = form;

    try {
      await validationString(username);
      await validationString(review);

      const data: Reviews = {
        id: getRandomId(),
        user: form.username,
        comment: form.review,
        createdAt: new Date(),
      };

      await reviewLS(id, "insert", data);
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

  return (
    <>
      <Stack spacing={3}>
        <MainTitle text="Escribe una reseña" />

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
                text="Publicar"
                disabled={disabledform}
              />
            </Box>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
