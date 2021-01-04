import React, { useMemo } from "react";
import Image from "gatsby-image";
import { Box } from "./ui/components";
import styled from "styled-components";

const StyledText = styled.div`
  color: ${(props) => props.theme.colors.grayLight};
`;

export default function Project({ data, tags }) {
  const tagList = useMemo(() => {
    if (!tags) return null;

    return tags.join(", ");
  }, [tags]);
  return (
    <Box>
      <Box mb="2em">
        <Image fluid={data.image.fluid} alt={data.image.alt} />
      </Box>
      <h4>{data.title.text}</h4>
      <StyledText>{tagList}</StyledText>
    </Box>
  );
}
