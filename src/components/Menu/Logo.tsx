import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLogo = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  position: relative;

  &::after {
    content: "";
    width: 50px;
    height: 6px;
    background-color: ${({ theme }) => theme.colors.primary.main};
    position: absolute;
    left: 0;
    bottom: -0.75rem;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

interface LogoProps {
  siteName: string;
}

export default function Logo({ siteName }: LogoProps) {
  return (
    <StyledLogo>
      <StyledLink to="/">{siteName}</StyledLink>
    </StyledLogo>
  );
}
