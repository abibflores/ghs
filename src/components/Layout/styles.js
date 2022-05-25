import styled from "styled-components";

export const StylesLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    align-items: center;
`;

export const StylesLayoutChildren = styled.div`
    display: flex;
    width: 95%;
    flex-direction: column;
    justify-content: ${({ center }) => center ? "center" : "flex-start"};
    align-items: center;
    gap: 20px 0px;
    min-height: calc(100vh - 158px);
    padding: 10px 0px;
`;