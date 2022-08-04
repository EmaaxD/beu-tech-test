import { FC } from "react";
import { Typography } from "@mui/material";

interface Props {
  text: string;
}

export const MainTitle: FC<Props> = ({ text }) => {
  return (
    <>
      <Typography variant="h6" fontWeight={700}>
        {text}
      </Typography>
    </>
  );
};
