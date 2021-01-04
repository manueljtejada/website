import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const base = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontFamilySerif: "Merriweather, serif",
  fontFamilySansSerif: "-apple-system, Roboto, sans-serif",
};

export const lightTheme = {
  ...base,
  colors: {
    primary: "#52BBDE",
    secondary: "#ED726D",
    background: "#fff",
    contrast: "#000",
    grayLight: "#666666",
    grayLighter: "#F2F2F2",
  },
};

export const darkTheme = {
  ...base,
  colors: {
    primary: "#52BBDE",
    secondary: "#ED726D",
    background: "#201E1E",
    contrast: "#fff",
    grayLight: "#666666",
    grayLighter: "#F2F2F2",
  },
};

export default {
  colors: {
    primary: "#52BBDE",
    secondary: "#ED726D",
    // secondary: {
    //   main: "",
    //   dark: "#E66E6A",
    // },
    white: "#fff",
    black: "#000",
    grayLight: "#666666",
    grayLighter: "#F2F2F2",
  },
};

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    font-family: -apple-system, Roboto, sans-serif, serif;
    font-size: 16px;
  }

  body {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.contrast};
    transition: background-color 0.3s;
  }

  h1 {
    font-size: 4em;
    font-weight: 600;
    color: ${(props) => props.theme.colors.secondary};
    line-height: 1.25;
    margin-bottom: 1.25rem;
  }

  /* h2 {

  } */

  h3 {
    font-family: ${(props) => props.theme.fontFamilySerif};
    font-size: 2em;
    font-weight: 800;
    line-height: 1.25;
    margin-bottom: 1.25em;
  }

  h4 {
    font-family: ${(props) => props.theme.fontFamilySerif};
    font-size: 1.5em;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }

  h6 {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 0.875em;
    font-weight: bold;
    line-height: 1;
    letter-spacing: 1px;
    margin-bottom: 1em;
    text-transform: uppercase;
  }
`;
