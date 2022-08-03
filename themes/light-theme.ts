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
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: "1px solid #BDBDBD",
          borderRadius: 13,

          "& .MuiInputAdornment-root": {
            color: "#A3A3A3",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0000003b !important",
            borderWidth: "1px !important",
            boxShadow: "none !important",
          },
          "& ::placeholder": {
            fontSize: 23,
          },
        },
      },
    },
  },
});
