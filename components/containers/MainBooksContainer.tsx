import { FC, ReactNode } from "react";
import { Stack } from "@mui/material";

interface Props {
  children: ReactNode;
}

export const MainBooksContainer: FC<Props> = ({ children }) => {
  return (
    <>
      <Stack
        display="flex"
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={3}
      >
        {children}
      </Stack>
    </>
  );
};
