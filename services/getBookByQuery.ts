import { clientAxios, googleApiKey, limitResponseApi } from "@/config/index";

import { BookDataProps, Item, ResponseGoogleApi } from "@/interfaces/index";

export const getBookByQuery = async (query: string) => {
  const {
    data: { items },
  } = await clientAxios.get<ResponseGoogleApi>(
    `/volumes?q=${query}&key=${googleApiKey}&maxResults=${limitResponseApi}`
  );

  const books: BookDataProps[] = items.map((book) => ({
    id: book.id,
    authors:
      typeof book.volumeInfo.authors !== "undefined"
        ? book.volumeInfo.authors[0]
        : "Anonymous",
    image:
      typeof book.volumeInfo.imageLinks?.thumbnail !== "undefined"
        ? book.volumeInfo.imageLinks?.thumbnail
        : "https://jackmoreno.files.wordpress.com/2014/04/cantar-del-mc3ado-cid.jpg?w=648",
    description: book.volumeInfo.description,
    title: book.volumeInfo.title,
  }));

  return books;
};

export const getBookById = async (id: string) => {
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
    image:
      typeof data.volumeInfo.imageLinks.thumbnail !== "undefined"
        ? data.volumeInfo.imageLinks.thumbnail
        : "https://jackmoreno.files.wordpress.com/2014/04/cantar-del-mc3ado-cid.jpg?w=648",
    description: data.volumeInfo.description,
  };

  return book;
};
