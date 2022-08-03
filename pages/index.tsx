import type { NextPage } from "next";
import { Typography } from "@mui/material";

import { HomeLayout } from "../components/layouts";
import { MainContainer } from "../components/containers";

const Home: NextPage = () => {
  return (
    <>
      <HomeLayout>
        <MainContainer>
          <Typography variant="h2">Hi from init</Typography>
        </MainContainer>
      </HomeLayout>
    </>
  );
};

export default Home;
