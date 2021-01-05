import React from "react";
import { format } from "date-fns";
import { Link } from "gatsby";
import styled from "styled-components";
import { BlogPostType } from "../types";

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const DateText = styled.div`
  color: ${(props) => props.theme.colors.grayLight};
  flex-grow: 1;
`;

interface BlogPostListItemProps {
  slug: string;
  data: BlogPostType["data"];
  date: Date;
}

export default function BlogPostListItem({ slug, data, date }: BlogPostListItemProps) {
  return (
    <Wrapper>
      <DateText>{format(new Date(date), "PP")}</DateText>
      <div>
        <h4>
          <Link to={`/blog/${slug}`}>{data.title.text}</Link>
        </h4>
      </div>
    </Wrapper>
  );
}
