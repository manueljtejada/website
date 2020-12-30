import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default {
  colors: {
    primary: {
      main: "#52BBDE",
    },
    secondary: {
      main: "#ED726D",
      dark: "#E66E6A",
    },
    white: "#fff",
    black: "#000",
    gray: {
      light: "#fafafa",
    },
    text: {
      primary: "#000",
      secondary: "#666666",
    },
  },
};

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: -apple-system, Roboto, sans-serif, serif;
    font-size: 16px;
    color: #1a202c;
  }
  body {
    line-height: 1.5;
    letter-spacing: 0;
  }
`;
