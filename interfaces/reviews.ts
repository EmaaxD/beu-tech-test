export interface Reviews {
  id: string;
  user: string;
  comment: string;
  createdAt: string;
}

export interface ReviewCardProps {
  id: string;
  user: string;
  comment: string;
  createdAt: string | Date;
  onHandleReviewEdit: (value: any) => void;
  onHandleDltReview: (value: any) => void;
}

export interface ReviewsLS {
  id: string | any;
  comments: Reviews[];
}
