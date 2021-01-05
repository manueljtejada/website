import React from "react";
import styled from "styled-components";
import { Box } from "../ui/components";
import Container from "../ui/components/Container";
import Logo from "./Logo";
import MenuList from "./MenuList";

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface MenuProps {
  siteName?: string;
  bg?: string;
}

const pages = [
  { title: "Projects", slug: "projects" },
  { title: "About", slug: "about" },
  { title: "Contact", slug: "contact" },
  { title: "Blog", slug: "blog" },
];

export default function Menu({ siteName = "Manuel J. Tejada", bg }: MenuProps) {
  return (
    <Box bg={bg}>
      <Container>
        <Grid>
          <Logo siteName={siteName} />
          <MenuList items={pages} />
        </Grid>
      </Container>
    </Box>
  );
}
