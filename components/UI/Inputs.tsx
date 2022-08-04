import React, { FC } from "react";
import {
  Box,
  FormControl,
  OutlinedInput,
  TextareaAutosize,
  Typography,
  styled,
} from "@mui/material";

import { SimpleInputProps, SimpleTextareaProps } from "../../interfaces";

const CustomTextareaAutosize = styled(TextareaAutosize)(({}) => ({
  width: "100%",
  background: "transparent",
  fontSize: 17,
  color: "#000000de",
  border: "1px solid #BDBDBD",
  borderRadius: 12,
  padding: "15px",
  fontWeight: 400,
  fontFamily: "Mulish !important",

  "::placeholder": {
    fontSize: 19,
    color: "#6666658b !important",
    fontWeight: "400 !important",
    fontFamily: "Mulish !important",
    // padding: "10px",
  },
}));

export const SimpleInput: FC<SimpleInputProps> = ({
  title,
  name,
  value,
  placeholder,
  onHandleChange,
}) => {
  return (
    <>
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography variant="body2" fontWeight={700}>
          {title}
        </Typography>
        <FormControl size="small" fullWidth>
          <OutlinedInput
            id={name}
            name={name}
            value={value}
            size="medium"
            onChange={onHandleChange}
            placeholder={placeholder}
          />
        </FormControl>
      </Box>
    </>
  );
};

export const SimpleTextArea: FC<SimpleTextareaProps> = ({
  title,
  name,
  value,
  placeholder,
  onHandleChange,
}) => {
  return (
    <>
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography variant="body2" fontWeight={700}>
          {title}
        </Typography>
        <CustomTextareaAutosize
          minRows={6}
          name={name}
          value={value}
          onChange={onHandleChange}
          placeholder={placeholder}
        />
      </Box>
    </>
  );
};
