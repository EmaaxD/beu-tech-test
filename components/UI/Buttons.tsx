import { FC } from "react";
import Image from "next/image";
import { Button, IconButton, styled } from "@mui/material";

import {
  MainButtonProps,
  MainIconProps,
  ModalButtonProps,
} from "../../interfaces";

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
const ModalCustomButton = styled(Button)(({ theme }) => ({
  fontSize: 12,
  padding: "9px 0px",
  borderRadius: 8,
  color: "#090908",
  boxShadow: "none !important",
  fontWeight: 600,
}));

export const MainButton: FC<MainButtonProps> = ({
  type = "button",
  text,
  disabled,
}) => {
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

export const MainIconButton: FC<MainIconProps> = ({ onHandleClick, image }) => {
  return (
    <>
      <IconButton onClick={onHandleClick}>
        <Image src={image} width={20} height={20} alt="icon main" />
      </IconButton>
    </>
  );
};

export const ModalButton: FC<ModalButtonProps> = ({
  type = "button",
  actions,
  text,
  onHandleClick,
}) => {
  return (
    <>
      <ModalCustomButton
        type={type}
        fullWidth
        variant="contained"
        size="small"
        style={{
          background: actions == "delete" ? "#DEC700" : "#595959",
          color: actions == "delete" ? "#18191F" : "#FFFFEF",
        }}
        onClick={onHandleClick}
      >
        {text}
      </ModalCustomButton>
    </>
  );
};
