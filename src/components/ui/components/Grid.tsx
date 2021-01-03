import styled from "styled-components";
import { color, layout, space } from "styled-system";

const MIN_COL_WIDTH = "15rem";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${MIN_COL_WIDTH}, 1fr));
  grid-gap: 2rem;
  ${space}
`;

export const Box = styled.div`
  ${color}
  ${layout}
  ${space}
`;
