import { FC, ReactNode } from "react";
import { Box } from "@mui/material";

interface Props {
  children: ReactNode;
}

export const BooksContainer: FC<Props> = ({ children }) => {
  return (
    <>
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={3} my={7}>
        {children}
      </Box>
    </>
  );
};
