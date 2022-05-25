import styled from "styled-components";

export const StylesInput = styled.input`
    color: ${({ theme }) => theme.colors.secondary};
    padding: 10px;
    width: 100%;
    border: none;
    background: ${({ theme }) => theme.colors.secondaryLight};
`;