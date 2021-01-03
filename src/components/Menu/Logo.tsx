import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLogo = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  position: relative;
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
