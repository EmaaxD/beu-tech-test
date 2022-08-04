export interface SimpleInputProps {
  title: string;
  name: string;
  value: string;
  placeholder?: string;
  onHandleChange: (target: any) => void;
}

export interface SimpleTextareaProps {
  title: string;
  name: string;
  value: string;
  placeholder?: string;
  onHandleChange: (target: any) => void;
}

export interface StateReviewForm {
  username: string;
  review: string;
}
