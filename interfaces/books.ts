export interface BookCardProps {
  id: string | number;
  image: string;
  title: string;
  authors: string;
  noDescription?: boolean;
  description: string;
  bookSM?: boolean;
  fullInfo?: boolean;
}
