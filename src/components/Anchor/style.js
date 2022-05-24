import styled from "styled-components";

export const AnchorStyle = styled.a`
    color: ${({theme}) => theme.colors.neutro} ;
    text-decoration: none;
    background: ${({theme}) => theme.colors.primary};
    padding: 2px;
    border: none;
    border-bottom: ${({ theme, $active }) => $active ? `solid 2px ${theme.colors.neutro}` : "none"};
    text-align: center;
    max-height: 30px;
`;
