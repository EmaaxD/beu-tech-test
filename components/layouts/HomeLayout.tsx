import React, { FC, ReactNode } from "react";
import { Stack } from "@mui/material";

import { Navbar, Search } from "../UI";

interface HomeProps {
  children: ReactNode;
}

export const HomeLayout: FC<HomeProps> = ({ children }) => {
  return (
    <>
      <Stack spacing={5} mt={5}>
        <Navbar />
        <Search />

        {children}
      </Stack>
    </>
  );
};
