import { atom } from "recoil";

export const selectReviewState = atom({
  key: "selectReview",
  default: {
    id: "",
    user: "",
    comment: "",
    createdAt: "",
  },
});
