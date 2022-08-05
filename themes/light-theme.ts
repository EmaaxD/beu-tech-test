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
          "& .MuiInputAdornment-root": {
            color: "#A3A3A3",
          },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#DEC700",
              boxShadow: "none",
            },
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#BDBDBD",
            borderRadius: 12,
            boxShadow: "none",
          },
          "& ::placeholder": {
            fontSize: 18,
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderBottomWidth: 2,
          borderColor: "#d9d9d9",
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        root: {
          color: "#DEC700",
        },
      },
    },
  },
});
