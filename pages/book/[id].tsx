import { useEffect, useState } from "react";
import {
  NextPage,
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
} from "next";
import { useRouter } from "next/router";
import { Box, Divider } from "@mui/material";

import { clientAxios, googleApiKey, limitResponseApi } from "../../config";

import {
  BookDataProps,
  Item,
  ResponseGoogleApi,
  ReviewsLS,
} from "../../interfaces";

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
          <BookCard {...book} fullInfo bookSM />

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

/** WHIT Static Side Generation and Incremental Static Regeneration **/

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const {
    data: { items },
  } = await clientAxios.get<ResponseGoogleApi>(
    `/volumes?q=js&key=${googleApiKey}&maxResults=${limitResponseApi}`
  );

  return {
    paths: items.map((book) => ({
      params: {
        id: book.id,
      },
    })),
    // enable ISR
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data } = await clientAxios.get<Item>(
    `/volumes/${id}?key=${googleApiKey}`
  );

  const book: BookDataProps = {
    id: data.id,
    title: data.volumeInfo.title,
    authors:
      typeof data.volumeInfo.authors !== "undefined"
        ? data.volumeInfo.authors[0]
        : "Anonymous",
    image: data.volumeInfo.imageLinks.thumbnail,
    description: data.volumeInfo.description,
  };

  return {
    props: {
      book,
    },
  };
};

/** WHIT Server Side Rendering **/

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { id }: any = ctx.params;

//   const { data } = await clientAxios.get<Item>(
//     `/volumes/${id}?key=${googleApiKey}`
//   );

//   const book: BookDataProps = {
//     id: data.id,
//     title: data.volumeInfo.title,
//     authors:
//       typeof data.volumeInfo.authors !== "undefined"
//         ? data.volumeInfo.authors[0]
//         : "Anonymous",
//     image: data.volumeInfo.imageLinks.thumbnail,
//     description: data.volumeInfo.description,
//   };

//   return {
//     props: {
//       book,
//     },
//   };
// };

export default BookPage;
