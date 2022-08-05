import { useEffect, useState } from "react";
import { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { Box, Divider } from "@mui/material";

import { clientAxios, googleApiKey } from "../../config";

import { BookDataProps, Item, ReviewsLS } from "../../interfaces";

import { BookLayout } from "../../components/layouts";
import {
  MainContainer,
  ReviewForm,
  ReviewsContainer,
} from "../../components/containers";
import { BookCard } from "../../components/UI/Cards";

import { existReviews } from "../../utils";

interface Props {
  book: BookDataProps;
}

const BookPage: NextPage<Props> = ({ book }) => {
  const [comments, setComments] = useState<ReviewsLS>({ id: "", comments: [] });

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    (function () {
      const verifyComments = existReviews(id);

      if (verifyComments.length > 0) {
        setComments({ ...verifyComments[0] });
      }
    })();
  }, [id]);

  return (
    <>
      <BookLayout>
        <MainContainer>
          <BookCard {...book} fullInfo />

          <Box my={5}>
            <Divider />
          </Box>

          {comments.id !== "" && (
            <Box my={3}>
              <ReviewsContainer comments={comments} />
              <Divider />
            </Box>
          )}

          <ReviewForm />
        </MainContainer>
      </BookLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id }: any = ctx.params;

  const { data } = await clientAxios.get<Item>(
    `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyAcU6Y5BsjnZEQdC2VhXStXsmd2ibm362g`
  );

  const book: BookDataProps = {
    id: data.id,
    title: data.volumeInfo.title,
    authors: data.volumeInfo.authors[0],
    image: data.volumeInfo.imageLinks.thumbnail,
    description: data.volumeInfo.description,
  };

  return {
    props: {
      book,
    },
  };
};

export default BookPage;
