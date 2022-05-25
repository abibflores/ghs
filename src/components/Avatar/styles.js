import styled from "styled-components";

export const StylesAvatar = styled.div`
    display: ${({ hidden }) => hidden ? "node" : "flex" };
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
    width: 45px;
    height: 45px;
    @media only screen and (min-width: 1024px) {
        display: flex;
    }
`;