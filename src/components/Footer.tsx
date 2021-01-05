import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { format } from "date-fns";

import { Box, Container, Grid } from "./ui/components";
import wave from "../images/footer-wave.svg";

const Wrapper = styled.footer`
  padding-top: 3rem;
  color: ${(props) => props.theme.colors.grayLight};

  hr {
    background-color: ${(props) => props.theme.colors.grayLighter};
    border: 0;
    height: 1px;
  }
`;

const SocialLinks = styled.ul`
  display: flex;
  gap: 1rem;
  justify-content: end;
`;

interface FooterProps {
  socialLinks: {
    profile: string;
    url: string;
  }[];
}

export default function Footer({ socialLinks }: FooterProps) {
  const year = format(new Date(), "Y");

  return (
    <Wrapper>
      <Container>
        <hr />
        <Grid my="2rem">
          <Box>&copy; {year} Manuel J. Tejada. All rights reserved.</Box>
          <Box style={{ textAlign: "right" }}>
            <SocialLinks>
              {socialLinks?.map((link, index) => (
                <li key={index}>
                  <Link to={link.url} target="_blank" rel="noopen">
                    {link.profile}
                  </Link>
                </li>
              ))}
            </SocialLinks>
          </Box>
        </Grid>
      </Container>
      <img src={wave} alt="Red wave graphic" width="100%" height="auto" />
    </Wrapper>
  );
}
