import React from "react";
import styled from "styled-components";
import Button from "./ui/components/Button";
import me from "../images/me.jpg";
import AvatarHexagon from "./AvatarHexagon";

interface CircleProps {
  size?: number;
  opacity?: number;
  absolute?: boolean;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

const Circle = styled.div<CircleProps>`
  width: ${(props) => props.size || 100}px;
  height: ${(props) => props.size || 100}px;
  shape-outside: circle();
  clip-path: circle();
  background: ${(props) =>
    props.color ? props.theme.colors[props.color].main : "transparent"};
  opacity: ${(props) => (props.opacity ? props.opacity / 100 : 1)};
  position: ${(props) => (props.absolute ? "absolute" : "static")};
  ${(props) => (props.top ? `top: ${props.top}px` : undefined)};
  ${(props) => (props.right ? `right: ${props.right}px` : undefined)};
  ${(props) => (props.bottom ? `bottom: ${props.bottom}px` : undefined)};
  ${(props) => (props.left ? `left: ${props.left}px` : undefined)};
`;

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
  background-color: ${(props) => props.theme.colors.gray.light};
  height: 100vh;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: 1.25rem;
`;

const Content = styled.div`
  color: ${(props) => props.theme.colors.text.secondary};
  margin-bottom: 2rem;
`;

export default function Hero() {
  return (
    <Wrapper>
      <Container>
        <div>
          <Title>Hey, I&apos;m Manuel</Title>
          <Content>
            I am a Full-Stack JavaScript Developer from the Dominican Republic
            with 7 years of experience. I have a passion for designing
            high-quality design products and building beautiful websites, and
            scalable and maintainable web applications.
          </Content>
          <Button>View my work &raquo;</Button>
        </div>
        <AvatarHexagon image={me} imageAlt="Manuel Tejada" />
      </Container>
      <Circle
        color="primary"
        size={270}
        opacity={50}
        absolute
        top={-100}
        left={-200}
      />
      <Circle
        color="secondary"
        size={125}
        opacity={50}
        absolute
        top={-75}
        left={20}
      />
    </Wrapper>
  );
}
