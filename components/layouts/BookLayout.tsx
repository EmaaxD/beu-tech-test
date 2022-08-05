import React, { FC, ReactNode } from "react";
import { Stack } from "@mui/material";

import { Navbar } from "../UI";

interface BookProps {
  children: ReactNode;
}

export const BookLayout: FC<BookProps> = ({ children }) => {
  return (
    <>
      <Stack gap={7} mt={2} mb={5}>
        <Navbar showIcon />

        <main>{children}</main>
      </Stack>
    </>
  );
};
