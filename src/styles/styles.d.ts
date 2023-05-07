import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColour: {
      light: string;
      dark: string;
      accent: string;
    };
    backgroundColour: {
      light: string;
      dark: string;
      accent: string;
    };
  }
}
