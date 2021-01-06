import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const base = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontFamilySerif: "Merriweather, serif",
  fontFamilySansSerif: "Gilroy, 'Helvetica Neue', Roboto, sans-serif",
};

export const lightTheme = {
  ...base,
  colors: {
    primary: "#ED726D",
    accent: "#F3F5F7",
    background: "#fff",
    contrast: "#0F1020",
    gray: "#3f3f3f",
    grayLight: "#666666",
    grayLighter: "#F2F2F2",
  },
};

export const darkTheme = {
  ...base,
  colors: {
    primary: "#ED726D",
    accent: "#0C0D1A",
    background: "#0F1020",
    contrast: "#EFF1F3",
    grayLight: "#989aaf",
    grayLighter: "#07080f",
  },
};

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    font-family: ${(props) => props.theme.fontFamilySansSerif};
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
    font-size: 2.125em;
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 1.25em;
  }

  h2 {
    font-size: 1.5em;
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 1.5em;
  }

  h3 {
    font-family: ${(props) => props.theme.fontFamilySerif};
    font-size: 1.25em;
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
    color: ${(props) => props.theme.colors.primary};
    font-size: 0.875em;
    font-weight: bold;
    line-height: 1;
    letter-spacing: 3px;
    margin-bottom: 1em;
    text-transform: uppercase;
  }

  strong {
    font-weight: bold;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
