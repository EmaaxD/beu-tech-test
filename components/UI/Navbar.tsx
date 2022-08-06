import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import Image from "next/image";
import { Stack, IconButton } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import { selectReviewState } from "../../atoms";

import { AnimationContainer, MainContainer } from "../containers";

interface Props {
  showIcon?: boolean;
}

export const Navbar: FC<Props> = ({ showIcon }) => {
  const router = useRouter();

  const setSelectReview = useSetRecoilState(selectReviewState);

  const handleClickBack = () => {
    setSelectReview((c) => ({
      id: "",
      comment: "",
      createdAt: "",
      user: "",
    }));
    router.push("/");
  };

  // setting when it detects going back with the click in the browser
  useEffect(() => {
    router.beforePopState(({ as }) => {
      if (as !== router.asPath) {
        setSelectReview((c) => ({
          id: "",
          comment: "",
          createdAt: "",
          user: "",
        }));
      }
      return true;
    });

    return () => {
      router.beforePopState(() => true);
    };
  }, [router, setSelectReview]);

  return (
    <>
      <AnimationContainer>
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
              <IconButton size="small" onClick={handleClickBack}>
                <ArrowBackOutlinedIcon />
              </IconButton>
            )}
          </MainContainer>
        </Stack>
      </AnimationContainer>
    </>
  );
};
