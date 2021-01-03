import React from "react";
import Footer from "./Footer";
import Menu from "./Menu/Menu";
import Container from "./ui/components/Container";

const Layout: React.FC = ({ children }) => (
  <>
    <Menu />
    <Container>{children}</Container>
    <Footer />
  </>
);

export default Layout;
