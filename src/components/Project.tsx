import React, { useMemo } from "react";
import Image from "gatsby-image";
import { Box } from "./ui/components";
import styled from "styled-components";
import { Link } from "gatsby";
import { ProjectType } from "../types";

const StyledText = styled.div`
  color: ${(props) => props.theme.colors.grayLight};
`;

interface ProjectProps {
  data: ProjectType["data"];
  tags: string[];
  slug: string;
}

export default function Project({ data, tags, slug }: ProjectProps) {
  const tagList = useMemo(() => {
    if (!tags) return null;

    return tags.join(", ");
  }, [tags]);


  return (
    <Link to={`/projects/${slug}`}>
      <Box mb="2em">
        <Image fluid={data.image.fluid} alt={data.image.alt} />
      </Box>
      <h4>{data.title.text}</h4>
      <StyledText>{tagList}</StyledText>
    </Link>
  );
}
