import React from "react";
import Menu from "./Menu/Menu";
import Container from "./ui/components/Container";

const Layout: React.FC = ({ children }) => (
  <>
    <Menu />
    <Container>{children}</Container>
  </>
);

export default Layout;
