import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { Analytics } from "@vercel/analytics/react";

import { NavigationBar } from "@/components/navigation-bar/navigation-bar";
import GlobalStyle from "@/styles/globalStyles";

const theme: DefaultTheme = {
  textColour: {
    light: "#ffffff",
    dark: "#1f1a3b",
    accent: "#89B0AE",
    focus: "#ffff00"
  },
  backgroundColour: {
    light: "#E3DEDE",
    dark: "#1f1a3b",
    accent: "#89B0AE",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavigationBar />
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </>
  );
}
