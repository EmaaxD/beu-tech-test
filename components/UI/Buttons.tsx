import { FC } from "react";
import Image from "next/image";
import { Button, IconButton, styled } from "@mui/material";

const MainCustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#DEC700 !important",
  width: 120,
  fontSize: 12,
  padding: "9px 0px",
  borderRadius: 8,
  color: "#090908",
  boxShadow: "none !important",

  "&.Mui-disabled": {
    opacity: 0.4,
    color: "#090908",
  },
}));

interface Props {
  type?: ButtonTypes;
  text: string;
  disabled: boolean;
}

interface MainIconProps {
  image: string;
}

export type ButtonTypes = "button" | "submit" | "reset";

export const MainButton: FC<Props> = ({ type = "button", text, disabled }) => {
  return (
    <>
      <MainCustomButton
        type={type}
        variant="contained"
        size="small"
        disabled={disabled}
      >
        {text}
      </MainCustomButton>
    </>
  );
};

export const MainIconButton: FC<MainIconProps> = ({ image }) => {
  return (
    <>
      <IconButton>
        <Image src={image} width={20} height={20} alt="icon main" />
      </IconButton>
    </>
  );
};
