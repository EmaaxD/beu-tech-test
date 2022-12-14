import { Box, Stack } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

import { MainContainer } from "@/components/containers/index";

import { ModalButton } from "@/components/UI/index";

const NotFoundPage: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <MainContainer>
        <Stack
          height="100vh"
          justifyContent="center"
          alignItems="center"
          spacing={10}
        >
          <Box>
            <Image
              src="https://www.pngkit.com/png/full/825-8254351_home-robot-broken.png"
              width={300}
              height={200}
              alt="logo not found"
              objectFit="cover"
              loading="lazy"
            />
          </Box>

          <ModalButton
            actions="delete"
            text="Volver al inicio"
            onHandleClick={() => router.push("/")}
          />
        </Stack>
      </MainContainer>
    </>
  );
};

export default NotFoundPage;
