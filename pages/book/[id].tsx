import { useEffect } from "react";
import {
  NextPage,
  GetServerSideProps,
  // GetStaticPaths,
  // GetStaticProps,
} from "next";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { Box, Divider } from "@mui/material";

import { BookDataProps, ReviewsLS } from "@/interfaces/index";

import { reviewListState } from "@/atoms/index";

import { BookLayout } from "@/components/layouts/index";
import {
  MainContainer,
  ReviewForm,
  ReviewsContainer,
} from "@/components/containers/index";
import { BookCard } from "@/components/UI/index";

import { existReviews } from "@/utils/index";

import { getBookById } from "@/services/index";

interface Props {
  book: BookDataProps;
}

const BookPage: NextPage<Props> = ({ book }) => {
  const [reviewList, setReviwList] = useRecoilState(reviewListState);

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    (function () {
      // get dataLS by id
      const verifyComments = existReviews(id);

      if (verifyComments.length > 0) {
        // actions setting state recoil
        setReviwList((c) => ({
          id: `${id}`,
          comments: verifyComments[0] ? verifyComments[0].comments : [],
        }));
      } else {
        // no match id setting empty
        setReviwList((c) => ({
          id: "",
          comments: [],
        }));
      }
    })();
  }, [id, setReviwList]);

  return (
    <>
      <BookLayout>
        <MainContainer>
          {/* the book card */}
          <BookCard {...book} fullInfo bookSM />

          <Box my={5}>
            <Divider />
          </Box>

          {/* show review if to saved */}
          {reviewList.comments.length > 0 && (
            <Box my={3}>
              <ReviewsContainer comments={reviewList.comments} />
              <Divider />
            </Box>
          )}

          {/* review form*/}
          <ReviewForm />
        </MainContainer>
      </BookLayout>
    </>
  );
};

/** WHIT Static Side Generation and Incremental Static Regeneration **/

// export const getStaticPaths: GetStaticPaths = async (ctx) => {
//   const {
//     data: { items },
//   } = await clientAxios.get<ResponseGoogleApi>(
//     `/volumes?q=js&key=${googleApiKey}&maxResults=${limitResponseApi}`
//   );

//   return {
//     paths: items.map((book) => ({
//       params: {
//         id: book.id,
//       },
//     })),
//     // enable ISR
//     fallback: "blocking",
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { id } = params as { id: string };

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

/** WHIT Server Side Rendering **/

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id }: any = ctx.params;

  const book = await getBookById(id);

  return {
    props: {
      book,
    },
  };
};

export default BookPage;
