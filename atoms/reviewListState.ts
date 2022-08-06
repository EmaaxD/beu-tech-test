import { atom } from "recoil";

export const reviewListState = atom({
  key: "reviewList",
  default: {
    id: "",
    comments: [],
  },
});
