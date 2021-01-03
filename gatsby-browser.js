import React from "react";

import { GlobalStyle } from "./src/components/ui/theme";
import Layout from "./src/components/Layout";
import { DarkModeProvider } from "./src/hooks/useDarkMode";

const App = ({ element }) => {
  return (
    <DarkModeProvider>
      <GlobalStyle />
      {element}
    </DarkModeProvider>
  );
};

const Wrapper = ({ element }) => {
  return <App element={element} />;
};

export const wrapRootElement = Wrapper;

export const wrapPageElement = ({ element, props }) => {
  const { path } = props;

  if (path === "/") {
    return element;
  } else {
    return <Layout {...props}>{element}</Layout>;
  }
};
