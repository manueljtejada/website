import React from "react";
import { graphql, PageProps } from "gatsby";
import styled from "styled-components";
import { ProjectType } from "../types";

const Wrapper = styled.article`
  img {
    max-width: 100%;
    height: auto;
  }

  p,
  ul,
  ol {
    color: ${(props) => props.theme.colors.grayLight};
    font-size: 19px;
    line-height: 36px;
    font-family: ${(props) => props.theme.fontFamilySerif};
    margin-bottom: 1.5em;
  }

  ul {
    list-style-type: disc;
    padding-left: 1em;
  }
`;

export default function ProjectTemplate({
  data,
}: PageProps<{ project: ProjectType }>) {
  const { title, content } = data.project.data;
  return (
    <Wrapper>
      <h1>{title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </Wrapper>
  );
}

export const query = graphql`
  query ProjectQuery($slug: String!) {
    project: prismicProject(uid: { eq: $slug }) {
      id
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`;
