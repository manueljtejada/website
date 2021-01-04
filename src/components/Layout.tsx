import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Helmet from "react-helmet";

import Footer from "./Footer";
import Menu from "./Menu/Menu";
import Container from "./ui/components/Container";

const Layout: React.FC = ({ children, ...rest }) => {
  const data = useStaticQuery(METADATA_QUERY);
  const { title, description } = data.site.siteMetadata;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Menu bg="grayLighter" />
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
