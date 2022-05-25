import styled from "styled-components";

export const StylesText = styled.h1`
  color: ${({ theme }) => theme.colors.secondaryDark};
  font-size: ${({ theme, variant }) => theme.fonts[variant].size};
  font-weight: ${({ theme, variant }) => theme.fonts[variant].weight};
  text-align: center;
  text-overflow: "-";
`;
