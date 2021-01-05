import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Helmet from "react-helmet";

import Footer from "./Footer";
import Menu from "./Menu/Menu";
import Container from "./ui/components/Container";
import { Box } from "./ui/components";
import useMetadata from "../hooks/useMetadata";

const Layout: React.FC = ({ children, ...rest }) => {
  const { title, description, socialLinks } = useMetadata();

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Menu bg="accent" />
      <Box bg="accent" pt="3rem" pb="1rem" mb="2rem">
        <Container>
          <h4>Page Title</h4>
        </Container>
      </Box>
      <Container>{children}</Container>
      <Footer socialLinks={socialLinks} />
    </>
  );
};

export default Layout;
