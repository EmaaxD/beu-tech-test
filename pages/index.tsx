import { NextPage, GetServerSideProps } from "next";

import { clientAxios, googleApiKey, limitResponseApi } from "../config";

import { BookDataProps, ResponseGoogleApi } from "../interfaces";

import { HomeLayout } from "../components/layouts";
import {
  BooksContainer,
  MainBooksContainer,
  MainContainer,
} from "../components/containers";
import { BookCard } from "../components/UI/Cards";

interface Props {
  books: BookDataProps[];
}

const Home: NextPage<Props> = ({ books }) => {
  return (
    <>
      <HomeLayout>
        <MainContainer>
          <MainBooksContainer>
            {books.slice(0, 2).map((book: BookDataProps) => (
              <BookCard key={book.id} {...book} noDescription />
            ))}
          </MainBooksContainer>

          <BooksContainer>
            {books.slice(2, books.length).map((book: BookDataProps) => (
              <BookCard key={book.id} {...book} bookSM noDescription />
            ))}
          </BooksContainer>
        </MainContainer>
      </HomeLayout>
    </>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {
    data: { items },
  } = await clientAxios.get<ResponseGoogleApi>(
    `/volumes?q=js&key=${googleApiKey}&maxResults=${limitResponseApi}`
  );

  const books: BookDataProps[] = items.map((book) => ({
    id: book.id,
    authors:
      typeof book.volumeInfo.authors !== "undefined"
        ? book.volumeInfo.authors[0]
        : "Anonymous",
    image: book.volumeInfo.imageLinks?.smallThumbnail,
    description: book.volumeInfo.description,
    title: book.volumeInfo.title,
  }));

  return {
    props: {
      books,
    },
  };
};

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const {
//     data: { items },
//   } = await clientAxios.get<ResponseGoogleApi>(
//     `/volumes?q=js&key=${googleApiKey}&maxResults=11`
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

export default Home;
