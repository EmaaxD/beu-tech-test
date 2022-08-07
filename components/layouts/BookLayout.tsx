import React, { FC, ReactNode } from "react";
import { Stack } from "@mui/material";

import { Navbar } from "@/components/UI/index";

interface BookProps {
  children: ReactNode;
}

export const BookLayout: FC<BookProps> = ({ children }) => {
  return (
    <>
      <Stack gap={3} mt={2} mb={5}>
        <Navbar showIcon />

        <main>{children}</main>
      </Stack>
    </>
  );
};
