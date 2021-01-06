import React from "react";
import { format } from "date-fns";
import styled from "styled-components";
import { BlogPostType } from "../types";
import { Badge, Box, FancyLink } from "./ui/components";
import generateExcerpt from "../util/generateExcerpt";

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const DateText = styled.div`
  color: ${(props) => props.theme.colors.grayLight};
  flex: 0 1 25%;
`;

interface BlogPostListItemProps {
  slug: string;
  data: BlogPostType["data"];
  date: Date;
  tags?: string[];
}

export default function BlogPostListItem({ slug, data, date, tags }: BlogPostListItemProps) {
  const excerpt = generateExcerpt(data.content.text);

  return (
    <Wrapper>
      <DateText>{format(new Date(date), "PP")}</DateText>
      <div>
        <h4>
          <FancyLink to={`/blog/${slug}`}>{data.title.text}</FancyLink>
        </h4>
        <Box mb="1.5rem">{excerpt}</Box>
        {tags?.map((tag, index) => (
          <Badge key={index}>#{tag.toLowerCase()}</Badge>
        ))}
      </div>
    </Wrapper>
  );
}
