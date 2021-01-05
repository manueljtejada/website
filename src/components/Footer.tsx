import React from "react";
import styled from "styled-components";
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

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <hr />
        <Grid my="2rem">
          <Box>© 2020 Manuel J. Tejada. All rights reserved.</Box>
          <Box style={{ textAlign: "right" }}>GitHub Twitter Instagram</Box>
        </Grid>
      </Container>
      <img src={wave} alt="Red wave graphic" width="100%" height="auto" />
    </Wrapper>
  );
}
