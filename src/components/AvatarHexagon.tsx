import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 300px;
  width: 300px;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    clip-path: polygon(50% 0, 90% 25%, 90% 75%, 50% 100%, 10% 75%, 10% 25%);
    opacity: 0.5;
  }

  &::before {
    background-color: ${(props) => props.theme.colors.primary.main};
    bottom: -35px;
    right: -20px;
  }

  &::after {
    background-color: ${(props) => props.theme.colors.secondary.main};
    top: -35px;
    left: -20px;
  }
`;

const ImageMask = styled.div`
  clip-path: polygon(50% 0, 90% 25%, 90% 75%, 50% 100%, 10% 75%, 10% 25%);
  width: 300px;
  height: 300px;
  position: relative;
  z-index: 9;

  > img {
    max-width: 100%;
    height: auto;
  }
`;

interface AvatarHexagonProps {
  image: string;
  imageAlt: string;
}

export default function AvatarHexagon({ image, imageAlt }: AvatarHexagonProps) {
  return (
    <Wrapper>
      <ImageMask>
        <img src={image} alt={imageAlt} />
      </ImageMask>
    </Wrapper>
  );
}
