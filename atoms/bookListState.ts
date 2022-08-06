import { atom } from "recoil";

export const bookListState = atom({
  key: "bookList",
  default: {
    books: [
      {
        id: "",
        authors: "",
        image: "",
        description: "",
        title: "",
      },
    ],
  },
});
