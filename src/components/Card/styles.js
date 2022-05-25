import styled from "styled-components";

export const StylesCard = styled.div`
    display: flex;
    gap: 0px 20px;
    justify-content: flex-start;
    align-items: center;
    border-radius: 15px;
    background: ${({ theme }) => theme.colors.neutro};
    width: 95%;
    padding: 20px;
`;

export const StylesCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const StylesCardHeader = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
`;