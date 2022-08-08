import { FC } from "react";
import { Box, Typography } from "@mui/material";

export const Footer: FC = () => {
  return (
    <Box textAlign="center">
      <Typography variant="subtitle1" data-testid="title-footer">
        BEU technical test - Emanuel Mamani 🚀
      </Typography>
    </Box>
  );
};
