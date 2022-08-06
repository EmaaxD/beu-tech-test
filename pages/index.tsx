import { useEffect } from "react";
import { NextPage, GetServerSideProps, GetStaticProps } from "next";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { clientAxios, googleApiKey, limitResponseApi } from "../config";

import { bookListState } from "../atoms";

import { BookCardProps, BookDataProps, ResponseGoogleApi } from "../interfaces";

import { HomeLayout } from "../components/layouts";
import {
  BooksContainer,
  MainBooksContainer,
  MainContainer,
} from "../components/containers";
import { BookCard } from "../components/UI/Cards";
import { getBookByQuery } from "../services";

interface Props {
  books: BookDataProps[];
}

const Home: NextPage<Props> = ({ books }) => {
  const bookList = useRecoilValue(bookListState);

  const setBookList = useSetRecoilState(bookListState);

  useEffect(() => {
    (function () {
      console.log("bookList", bookList);

      if (bookList.books.length === 1) {
        setBookList((c: any) => ({ books }));
      }
    })();
  }, [books, setBookList]);

  return (
    <>
      <HomeLayout>
        <MainContainer>
          {/* the first two big books of the UI */}
          <MainBooksContainer>
            {/* the book card */}
            {bookList.books
              .slice(0, 2)
              .map((book: BookDataProps, index: any) => (
                <BookCard key={index} {...book} noDescription />
              ))}
          </MainBooksContainer>

          {/* the remaining books of the UI */}
          <BooksContainer>
            {/* the book card */}
            {bookList.books
              .slice(2, books.length)
              .map((book: BookDataProps, index: any) => (
                <BookCard key={index} {...book} bookSM noDescription />
              ))}
          </BooksContainer>
        </MainContainer>
      </HomeLayout>
    </>
  );
};

/** WHIT Static Side Generation **/

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const {
//     data: { items },
//   } = await clientAxios.get<ResponseGoogleApi>(
//     `/volumes?q=js&key=${googleApiKey}&maxResults=${limitResponseApi}`
//   );

//   const books: BookDataProps[] = items.map((book) => ({
//     id: book.id,
//     authors:
//       typeof book.volumeInfo.authors !== "undefined"
//         ? book.volumeInfo.authors[0]
//         : "Anonymous",
//     image: book.volumeInfo.imageLinks?.smallThumbnail,
//     description: book.volumeInfo.description,
//     title: book.volumeInfo.title,
//   }));

//   return {
//     props: {
//       books,
//     },
//   };
// };

/** WHIT Server Side Rendering **/

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const books: BookCardProps[] = await getBookByQuery("react");

  return {
    props: {
      books,
    },
  };
};

export default Home;
