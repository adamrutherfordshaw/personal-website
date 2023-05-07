import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: ${({ theme }) => theme.backgroundColour.light};
    color: ${({ theme }) => theme.textColour.dark};
    height: 100%;
    max-width: 100vw;
    overflow-x: hidden;
    font-family: 'Quicksand', sans-serif;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
