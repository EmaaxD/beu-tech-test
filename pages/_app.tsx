import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { RecoilRoot } from "recoil";

import { lightTheme, darkTheme } from "../themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {/* Start the state with recoil */}
      <RecoilRoot override={false}>
        <Component {...pageProps} />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp;
