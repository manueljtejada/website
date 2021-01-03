import React from "react";
import styled from "styled-components";
import { graphql, PageProps } from "gatsby";
import Img from "gatsby-image";
import Footer from "../components/Footer";

import Hero from "../components/Hero";
import Menu from "../components/Menu/Menu";
import { Container, Grid, Box } from "../components/ui/components";
import { ProjectType } from "../types";

const MenuContainer = styled.div`
  position: absolute;
  width: 100%;
`;

type IndexQueryType = {
  projects: {
    nodes: ProjectType[];
  };
};

const IndexPage = (props: PageProps<IndexQueryType>) => {
  const { projects } = props.data;
  console.log({ projects });
  return (
    <main>
      <title>Home Page</title>
      <MenuContainer>
        <Menu />
      </MenuContainer>
      <Hero />

      <Container>
        <Box py="4rem">
          <h6>Latest</h6>
          <h3>Projects</h3>

          <Grid>
            {projects?.nodes.map((project) => (
              <Box key={0}>
                <Img
                  fluid={project.data.image.fluid}
                  alt={project.data.image.alt}
                />
                {project.data.title.text}
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>

      <Footer />
    </main>
  );
};

export const query = graphql`
  query projects {
    projects: allPrismicProject(
      sort: { order: DESC, fields: data___publication_date }
      limit: 3
    ) {
      nodes {
        data {
          title {
            text
          }
          publication_date
          project_url {
            url
          }
          content {
            text
          }
          image {
            alt
            fluid(maxWidth: 400) {
              ...GatsbyPrismicImageFluid
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
