import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

import { NavigationBar } from "@/components/navigation-bar/navigation-bar";
import GlobalStyle from "@/styles/globalStyles";

const theme: DefaultTheme = {
  colour: {
    text: {
      light: "#ffffff",
      dark: "#1f1a3b",
      accent: "#89B0AE",
      focus: "#ffff00",
    },
    background: {
      light: "#E3DEDE",
      dark: "#1f1a3b",
      accent: "#89B0AE",
    },
  },
  spacing: {
    one: "0.25rem",
    two: "0.5rem",
    three: "1rem",
    four: "2rem",
    five: "4rem",
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
        <SpeedInsights />
      </ThemeProvider>
    </>
  );
}
