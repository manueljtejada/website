import React from "react";
import { ThemeProvider } from "styled-components";

import theme, { GlobalStyle } from "./src/components/ui/theme";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
);
