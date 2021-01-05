import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Helmet from "react-helmet";

import Footer from "./Footer";
import Menu from "./Menu/Menu";
import Container from "./ui/components/Container";
import { Box } from "./ui/components";

const Layout: React.FC = ({ children, ...rest }) => {
  const data = useStaticQuery(METADATA_QUERY);
  const { title, description } = data.site.siteMetadata;

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
      <Footer />
    </>
  );
};

const METADATA_QUERY = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export default Layout;
