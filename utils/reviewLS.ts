import { Cookie } from "@mui/icons-material";
import { Reviews, ReviewsLS } from "../interfaces";

type ActionsTypes = "insert" | "edit";

export const reviewLS = async (
  idBook: any,
  actions: ActionsTypes,
  data: Reviews
) => {
  if (typeof window === "undefined") return false;

  let reviews: ReviewsLS[] = JSON.parse(
    localStorage.getItem("reviews") || "[]"
  );

  const reviewFound = reviews.find((review) => review.id === idBook);

  if (reviewFound) {
    if (actions === "insert") {
      reviews = reviews.map((review) =>
        review.id === idBook
          ? { ...review, comments: [data, ...review.comments] }
          : review
      );
    }

    if (actions === "edit") {
      reviews = reviews.map((review) =>
        review.id === idBook
          ? {
              ...review,
              comments: review.comments.map((comment) =>
                comment.id == data.id ? { ...comment, ...data } : comment
              ),
            }
          : review
      );
    }
  } else {
    reviews.push({ id: idBook, comments: [data] });
  }

  localStorage.setItem("reviews", JSON.stringify(reviews));
};

export const removeReview = (idBook: any, idReview: string) => {
  if (typeof window === "undefined") return false;

  let reviews: ReviewsLS[] = JSON.parse(
    localStorage.getItem("reviews") || "[]"
  );

  const reviewFound = reviews.find((review) => review.id === idBook);

  if (reviewFound) {
    const newReviews = reviews.map((review) =>
      review.id === idBook
        ? {
            ...review,
            comments: review.comments.filter(
              (comment) => comment.id !== idReview
            ),
          }
        : review
    );

    localStorage.setItem("reviews", JSON.stringify(newReviews));
  }
};

export const existReviews = (id: any): any => {
  if (typeof window === "undefined") return false;

  const favorites: ReviewsLS[] = JSON.parse(
    localStorage.getItem("reviews") || "[]"
  );

  const exists = favorites.filter((review) => review.id === id);

  return exists;
};
