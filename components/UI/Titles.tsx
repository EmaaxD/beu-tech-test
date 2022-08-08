import { FC } from "react";
import { Typography } from "@mui/material";

interface Props {
  text: string;
}

export const MainTitle: FC<Props> = ({ text }) => {
  return (
    <>
      <Typography data-testid="title" variant="h6" fontWeight={700}>
        {text}
      </Typography>
    </>
  );
};
