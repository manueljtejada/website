import React from "react";
import styled from "styled-components";

import Hero from "../components/Hero";
import Menu from "../components/Menu/Menu";

const MenuContainer = styled.div`
  position: absolute;
  width: 100%;
`;

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <MenuContainer>
        <Menu />
      </MenuContainer>
      <Hero />
    </main>
  );
};

export default IndexPage;
