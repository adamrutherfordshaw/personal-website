import { Quicksand } from "next/font/google";
const quicksand = Quicksand({
  subsets: ["latin"],
});
import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle<{
  x?: number;
  y?: number;
  lightsOff: boolean;
}>`
  html,
  body {
    background-color: ${({ theme }) => theme.colour.background.light};
    color: ${({ theme }) => theme.colour.text.dark};
    height: 100%;
    max-width: 100vw;
    overflow-x: hidden;
    font-family: ${quicksand.style.fontFamily};
    ${({ lightsOff }) => lightsOff ? `cursor: url('data:image/svg+xml;charset=utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="32" width="32"><text y="16" font-size="16">🪄</text></svg>') 16 16, auto` : 'auto'};
  }

  body {
    ${({ lightsOff, x, y }) =>
    lightsOff ?
      css`
        ::after {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          pointer-events: none;
          background: ${x && y
          ? `radial-gradient(circle at ${x}px ${y}px, hsla(0, 0%, 100%, 0) 0%, hsla(0, 0%, 0%, 1) 9%)`
          : "black"};
        }
      `: ''};
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
