export interface Reviews {
  id: string;
  user: string;
  comment: string;
  createdAt: number;
}

export interface ReviewsLS {
  id: string;
  comments: Reviews[];
}
