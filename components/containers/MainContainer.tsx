import { FC, ReactNode } from "react";
import { Container } from "@mui/material";

interface Props {
  children: ReactNode;
}

export const MainContainer: FC<Props> = ({ children }) => {
  return (
    <>
      <Container maxWidth="md">{children}</Container>
    </>
  );
};
