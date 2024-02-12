import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { NavigationBar } from "@/components/navigation-bar/navigation-bar";
import GlobalStyle from "@/styles/globalStyles";
import { useContext } from "react";
import { AppProvider, AppStateContext } from "@/context/context";
import { appThemes } from "@/themes/themes";
import { getCookie } from "cookies-next";
import { NextPageContext } from "next";

export interface InitialProps {
  themeName?: string;
}

export const App = (props: AppProps & InitialProps) => {
  return (
    <AppProvider initialTheme={props.themeName}>
      <Website {...props} />
    </AppProvider>
  );
}

export const Website = ({ Component, pageProps }: AppProps) => {
  const { theme } = useContext(AppStateContext);

  return (
    <ThemeProvider theme={appThemes[theme]}>
      <GlobalStyle />
      <NavigationBar />
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
}

App.getInitialProps = ({ ctx }: { ctx: NextPageContext }): InitialProps => {
  const themeName = getCookie("themeName", { req: ctx.req });

  return {
    themeName,
  };
}

export default App;