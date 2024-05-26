import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colour: {
      text: {
        light: string;
        dark: string;
        accent: string;
        focus: string;
      };
      background: {
        light: string;
        dark: string;
        accent: string;
      };
    };
    spacing: {
      one: string;
      two: string;
      three: string;
      four: string;
      five: string;
    };
  }
}
