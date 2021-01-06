import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import DarkModeToggle from "../DarkModeToggle";

const StyledList = styled.ul`
  display: flex;
  gap: 1.5rem;
`;

const StyledListItem = styled.li`
  padding: 2rem 0;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.gray};
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
      <StyledListItem>
        <DarkModeToggle />
      </StyledListItem>
    </StyledList>
  );
}
