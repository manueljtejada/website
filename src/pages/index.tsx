import React from "react";
import styled from "styled-components";
import { graphql, PageProps } from "gatsby";
import Footer from "../components/Footer";

import Hero from "../components/Hero";
import Menu from "../components/Menu/Menu";
import { Container, Grid, Box } from "../components/ui/components";
import { ProjectType } from "../types";
import Project from "../components/Project";
import useMetadata from "../hooks/useMetadata";
import { Helmet } from "react-helmet";

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
  const { title, description, socialLinks } = useMetadata();

  return (
    <main>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
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
              <Project
                key={project.id}
                slug={project.uid}
                data={project.data}
                tags={project.tags}
              />
            ))}
          </Grid>
        </Box>
      </Container>

      <Footer socialLinks={socialLinks} />
    </main>
  );
};

export const query = graphql`
  query projects {
    projects: allPrismicProject(
      sort: { order: DESC, fields: data___publication_date }
      limit: 2
    ) {
      nodes {
        id
        tags
        uid
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
