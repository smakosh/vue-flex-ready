import styled from "vue-styled-components";
import { FlexProps, ItemProps } from "@/types";

export const StyledFlex = styled("div", FlexProps)`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  flex-wrap: wrap;
  align-items: ${({ align }) => align || "center"};

  &:after {
    content: "";
    max-width: ${({ col, gap = 1 }) =>
      col && col < 12 ? `${(100 * col) / 12 - gap}%` : "100%"};
    width: 100%;

    @media (max-width: 960px) {
      max-width: ${({ colTablet, gapTablet = 1 }) =>
        colTablet && colTablet < 12
          ? `${(100 * colTablet) / 12 - gapTablet}%`
          : "100%"};
    }

    @media (max-width: 680px) {
      max-width: ${({ colMobile, gapMobile = 1 }) =>
        colMobile && colMobile < 12
          ? `${(100 * colMobile) / 12 - gapMobile}%`
          : "100%"};
    }
  }
`;

export const StyledItem = styled("div", ItemProps)`
  width: 100%;
  max-width: ${({ col, gap = 1 }) =>
    col && col < 12 ? `${(100 * col) / 12 - gap}%` : "100%"};

  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? `${marginBottom}px` : "unset"};

  @media (max-width: 960px) {
    max-width: ${({ colTablet, gapTablet = 1 }) =>
      colTablet && colTablet < 12
        ? `${(100 * colTablet) / 12 - gapTablet}%`
        : "100%"};
    margin-bottom: ${({ marginBottom = 10 }) => `${marginBottom}px`};
  }

  @media (max-width: 680px) {
    max-width: ${({ colMobile, gapMobile = 1 }) =>
      colMobile && colMobile < 12
        ? `${(100 * colMobile) / 12 - gapMobile}%`
        : "100%"};

    &:last-child {
      margin-bottom: unset;
    }
  }

  ${({ stretch }) =>
    stretch &&
    `
    display: flex;
    align-self: stretch;
  `}
`;
