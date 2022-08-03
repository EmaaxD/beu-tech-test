import { FC } from "react";
import Image from "next/image";
import { Stack, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { MainContainer } from "../containers";

interface Props {
  showIcon?: boolean;
}

export const Navbar: FC<Props> = ({ showIcon }) => {
  return (
    <>
      <Stack component="header">
        <MainContainer>
          {!showIcon ? (
            <Image
              src="/bookapp.svg"
              width={200}
              height={70}
              alt="main logo app"
            />
          ) : (
            <IconButton size="small">
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
          )}
        </MainContainer>
      </Stack>
    </>
  );
};
