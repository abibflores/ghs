import styled from "styled-components";

export const StylesButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: solid 2px ${({theme}) => theme.colors.primary };
    background: ${({theme}) => theme.colors.primary };
    color: ${({theme}) => theme.colors.neutro};
    font-size: ${({theme}) => theme.fonts.small.size};
    font-weight: ${({theme}) => theme.fonts.small.weight};
`;