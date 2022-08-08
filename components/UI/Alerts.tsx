import { FC } from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  error: string;
}

export const ErrorAlert: FC<Props> = ({ error }) => {
  return (
    <>
      <Box
        data-testid="container-alert"
        bgcolor="#ff1745d0"
        py={1}
        borderRadius={2}
      >
        <Typography variant="body1" color="white" textAlign="center">
          {error}
        </Typography>
      </Box>
    </>
  );
};

export const ErrorSearch: FC<Props> = ({ error }) => {
  return (
    <Typography variant="body1" color="#ff1745d0" mt={1}>
      {error}
    </Typography>
  );
};
