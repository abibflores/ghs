import styled from "styled-components";

export const StylesCard = styled.div`
    display: grid;
    grid-template-columns: 55px auto;
    gap: 0px 20px;
    border-radius: 15px;
    background: ${({ theme }) => theme.colors.neutro};
    width: 95%;
    padding: 20px;
    align-items: center;
`;

export const StylesCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    @media only screen and (min-width: 1024px) {
        display: grid;
        grid-template-columns: 2fr 1fr 140px;
        align-items: center;
        justify-items: flex-start;
    }
`;
