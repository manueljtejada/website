import styled from "styled-components";

const Badge = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 1.5rem;
  display: inline-flex;
  font-size: 0.875rem;
  font-weight: bold;
  color: white;
  padding: 0.5rem 1rem;
`;

export default Badge;
