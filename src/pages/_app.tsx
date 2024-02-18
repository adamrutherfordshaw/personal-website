import { useContext } from "react";
import App from "next/app";
import type { AppContext, AppInitialProps, AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { NavigationBar } from "@/components/navigation-bar/navigation-bar";
import { AppProvider, AppStateContext } from "@/context/context";
import GlobalStyle from "@/styles/globalStyles";
import { appThemes } from "@/themes";
import { getCookie } from "cookies-next";

export interface InitialProps {
  themeName?: string;
}

export const AppWithContext = (props: AppProps & InitialProps) => {
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

AppWithContext.getInitialProps = async (context: AppContext): Promise<InitialProps & AppInitialProps> => {
  const { ctx } = context;
  const themeName = getCookie("themeName", { req: ctx.req });

  const initialProps = await App.getInitialProps(context)

  return {
    ...initialProps,
    themeName,
  };
}

export default AppWithContext;