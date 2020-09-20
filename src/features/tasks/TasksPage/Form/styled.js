
import styled from "styled-components"

export const StyledForm = styled.form`
    padding: 10px 25px;
    display: flex;

    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        flex-wrap: wrap;
    }
`

export const Button = styled.button`
    flex-basis: 20%;
    align-self: center;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    border: none;
    transition: 0.3s;

    &:hover {
        filter: brightness(110%);
        transform: scale(1.05);
    }

    &:active {
        filter: brightness(120%);
        transform: scale(1.1);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        min-width: 230px;
        flex-basis: 100%;
        margin: 10px;
    }
`