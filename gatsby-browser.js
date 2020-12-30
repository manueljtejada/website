import React from "react";
import { ThemeProvider } from "styled-components";

import theme, { GlobalStyle } from "./src/components/ui/theme";
import Layout from "./src/components/Layout";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
);

export const wrapPageElement = ({ element, props }) => {
  const { path } = props;

  if (path === "/") {
    return element;
  } else {
    return <Layout {...props}>{element}</Layout>;
  }
};
