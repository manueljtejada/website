import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => props.theme.colors.white};
  border: 4px solid ${(props) => props.theme.colors.secondary};
  background: ${(props) => props.theme.colors.secondary};
  font-size: 1rem;
  padding: 0.5em 1.5em;
  border-radius: 3px;
  box-shadow: 0;
  transition: all 0.2s;

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
    transition: all 0.2s;
  }
`;

export default Button;
