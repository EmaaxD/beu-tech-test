import React, { FC, ReactNode } from "react";
import { Stack } from "@mui/material";

import { Footer, Navbar, Search } from "@/components/UI/index";

interface HomeProps {
  children: ReactNode;
}

export const HomeLayout: FC<HomeProps> = ({ children }) => {
  return (
    <>
      <Stack gap={7} my={5}>
        <Navbar />
        <Search />

        <main>{children}</main>

        <Footer />
      </Stack>
    </>
  );
};
