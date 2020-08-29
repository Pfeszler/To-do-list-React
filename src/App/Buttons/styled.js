import styled from "styled-components"

export const ButtonContainer = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: flex;
        flex-direction: column;
    }
`

export const HeaderButton = styled.button`
    border: none;
    padding: none;
    background-color: transparent;
    color: ${({ theme }) => theme.color.teal};
    transition: 0.3s;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.gray}
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-top: 30px
    }
`