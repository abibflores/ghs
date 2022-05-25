import styled from "styled-components";

export const ContHeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0px 20px;
    background: ${({theme}) => theme.colors.primary};
    padding: 20px;
    width: 100%;
    align-items: center;
`;

export const StylesNav = styled.nav`
    display: flex;
    background: transparent;
    gap: 0px 20px;
`;