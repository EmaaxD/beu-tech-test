import { NextPage, GetServerSideProps } from "next";

import { clientAxios, googleApiKey } from "../config";

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    data: { items },
  } = await clientAxios.get<ResponseGoogleApi>(
    `/volumes?q=react&key=${googleApiKey}&maxResults=10`
  );

  console.log("items[0].volumeInfo", items[0].volumeInfo);

  const books: BookDataProps[] = items.map((book) => ({
    id: book.id,
    title: book.volumeInfo.title,
    authors: book.volumeInfo.authors[0],
    image: book.volumeInfo.imageLinks?.thumbnail,
    description: book.volumeInfo.description,
  }));

  return {
    props: {
      books,
    },
  };
};

export default Home;
