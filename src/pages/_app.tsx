import { useContext, useEffect, useState } from "react";
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
import { AppState, ThemeName } from "@/context/types";

export interface InitialProps {
  themeName?: string;
  lightsOff: boolean;
}

export const AppWithContext = (props: AppProps & InitialProps) => {
  const stateFromCookies: Partial<AppState> = {};
  const { themeName, lightsOff } = props;

  if (themeName && Object.values<string>(ThemeName).includes(themeName)) {
    stateFromCookies.theme = themeName as ThemeName;
  }

  stateFromCookies.lightsOff = lightsOff;

  return (
    <AppProvider stateFromCookies={stateFromCookies}>
      <Website {...props} />
    </AppProvider>
  );
};

export const Website = ({ Component, pageProps }: AppProps) => {
  const { theme } = useContext(AppStateContext);
  const { lightsOff } = useContext(AppStateContext);

  const [mouseLocation, setMouseLocation] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseLocation({
        x: e.clientX,
        y: e.clientY,
      });
    }

    if (lightsOff) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [lightsOff]);

  return (
    <ThemeProvider theme={appThemes[theme]}>
      <GlobalStyle x={mouseLocation.x} y={mouseLocation.y} lightsOff={lightsOff} />
      <NavigationBar />
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
};

AppWithContext.getInitialProps = async (
  context: AppContext
): Promise<InitialProps & AppInitialProps> => {
  const { ctx } = context;
  const themeName = getCookie("themeName", { req: ctx.req });
  const lightsOff = getCookie("lightsOff", { req: ctx.req });

  const initialProps = await App.getInitialProps(context);

  return {
    ...initialProps,
    themeName,
    lightsOff: lightsOff === "true",
  };
};

export default AppWithContext;
