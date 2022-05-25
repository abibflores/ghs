import styled from "styled-components";

export const StylesFooter = styled.footer`
    display: flex;
    justify-content: space-around;
    gap: 0px 20px;
    background: ${({theme}) => theme.colors.primary};
    width: 100%;
    align-items: center;
`;