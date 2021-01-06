import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 4vw;
  display: flex;
  gap: 2rem;

  > div:first-child {
    flex: 1;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 4em;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  line-height: 1.25;
  margin-bottom: 1.25rem;
`;

const Content = styled.div`
  font-family: Merriweather, serif;
  font-size: 1.5rem;
  line-height: 1.75em;
  color: ${(props) => props.theme.colors.grayLight};
  margin-bottom: 2rem;
  max-width: 90%;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.contrast};
  font-weight: bold;
  font-family: Merriweather, serif;
  text-decoration: underline;
`;

export default function Hero() {
  return (
    <Wrapper>
      <Container>
        <div>
          <Title>Hey, I&apos;m Manuel.</Title>
          <Content>
            I am a Full-Stack JavaScript Developer from the Dominican Republic
            with 7 years of experience. I have a passion for designing
            high-quality design products and building beautiful websites, and
            scalable and maintainable web applications.
          </Content>
          <StyledLink to="/projects">View my work &rarr;</StyledLink>
        </div>
      </Container>
    </Wrapper>
  );
}
