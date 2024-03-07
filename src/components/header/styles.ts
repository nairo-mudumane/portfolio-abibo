import { THEME } from "@/global/theme";
import styled from "styled-components";

export const StyledHeader = styled.header`
  a {
    color: white;
    position: relative;
    z-index: 50;

    &:hover,
    &.active {
      color: ${THEME.colors.primary};
      text-decoration: underline;
      text-underline-offset: 4px;
    }
  }
`;
