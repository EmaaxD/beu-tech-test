export interface Reviews {
  id: string;
  user: string;
  comment: string;
  createdAt: string | Date;
}

export interface ReviewsLS {
  id: string;
  comments: Reviews[];
}
