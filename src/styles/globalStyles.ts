import { Quicksand } from "next/font/google";
const quicksand = Quicksand({
  subsets: ["latin"],
});
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: ${({ theme }) => theme.colour.background.light};
    color: ${({ theme }) => theme.colour.text.dark};
    height: 100%;
    max-width: 100vw;
    overflow-x: hidden;
    font-family: ${quicksand.style.fontFamily};
  }

  main {
    max-width: 1200px;
    margin: 0 auto;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
