import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#EDEEF2",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ["Mulish", "Roboto", "sans-serif"].join(","),
  },

  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {},
    },
  },
});
