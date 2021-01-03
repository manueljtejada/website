import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import styled from "styled-components";

import useDarkMode from "../hooks/useDarkMode";

const Button = styled.button`
  border: 0;
  background: transparent;
  color: ${(props) => props.theme.colors.contrast};
  cursor: pointer;
  font-size: 1rem;
  padding: 0;
`;

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ? <FiSun /> : <FiMoon />}
    </Button>
  );
};

export default DarkModeToggle;
