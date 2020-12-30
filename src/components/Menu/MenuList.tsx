import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledList = styled.ul`
  display: flex;
  gap: 1.5rem;
`;

const StyledListItem = styled.li`
  padding: 2rem 0;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

interface MenuListProps {
  items: {
    title: string;
    slug: string;
  }[];
}

export default function MenuList({ items }: MenuListProps) {
  return (
    <StyledList>
      {items.map((item) => (
        <StyledListItem key={item.slug}>
          <StyledLink to={`/${item.slug}`}>{item.title}</StyledLink>
        </StyledListItem>
      ))}
    </StyledList>
  );
}
