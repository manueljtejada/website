import React from "react";
import styled from "styled-components";
import Container from "../ui/components/Container";
import Logo from "./Logo";
import MenuList from "./MenuList";

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface MenuProps {
  siteName: string;
}

const pages = [
  { title: "Projects", slug: "projects" },
  { title: "About", slug: "about" },
  { title: "Contact", slug: "contact" },
  { title: "Blog", slug: "blog" },
];

export default function Menu({ siteName = "Manuel J. Tejada" }: MenuProps) {
  return (
    <Container>
      <Grid>
        <Logo siteName="Manuel J. Tejada" />
        <MenuList items={pages} />
      </Grid>
    </Container>
  );
}
