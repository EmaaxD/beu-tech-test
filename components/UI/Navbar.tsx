import { FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Stack, IconButton } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import { MainContainer } from "../containers";

interface Props {
  showIcon?: boolean;
}

export const Navbar: FC<Props> = ({ showIcon }) => {
  const router = useRouter();

  return (
    <>
      <Stack component="header">
        <MainContainer>
          {!showIcon ? (
            <Image
              src="/bookapp.svg"
              width={180}
              height={70}
              alt="main logo app"
            />
          ) : (
            <IconButton size="small" onClick={() => router.push("/")}>
              <ArrowBackOutlinedIcon />
            </IconButton>
          )}
        </MainContainer>
      </Stack>
    </>
  );
};
