import React from "react";
import { graphql, PageProps } from "gatsby";
import styled from "styled-components";
import Project from "../components/Project";
import { PrimsicAllQueryType, ProjectType } from "../types";

const MasonryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem 2rem;
`;

const ProjectsPage = ({
  data,
  ...rest
}: PageProps<{ projects: PrimsicAllQueryType<ProjectType> }>) => {
  return (
    <main>
      <MasonryGrid>
        {data.projects.nodes.map((project) => (
          <Project
            key={project.id}
            slug={project.uid}
            data={project.data}
            tags={project.tags}
          />
        ))}
      </MasonryGrid>
    </main>
  );
};

export const query = graphql`
  query ProjectsQuery {
    projects: allPrismicProject(
      sort: { order: DESC, fields: data___publication_date }
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

export default ProjectsPage;
