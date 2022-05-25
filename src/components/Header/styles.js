import styled from "styled-components";

export const ContHeaderStyle = styled.div`
    display: flex;
    justify-content: center;
    gap: 0px 20px;
    background: ${({theme}) => theme.colors.primary};
    padding: 20px;
    width: 100%;
    align-items: center;
    @media screen and (min-width: 1024px){
        justify-content: space-between;
    }
`;

export const StylesNav = styled.nav`
    display: flex;
    background: transparent;
    gap: 0px 20px;
`;