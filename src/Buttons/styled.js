import styled from "styled-components"

export const ButtonContainer = styled.div`
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
`

export const HeaderButton = styled.button`
    border: none;
    padding: none;
    background-color: transparent;
    color: hsl(180, 100%, 25%);
    transition: 0.3s;

    &:hover {
        color: hsl(180, 100%, 30%)
    }

    &:active {
        color: hsl(180, 100%, 35%)
    }

    &:disabled {
        color: #eee;
    }

    @media (max-width: 767px) {
        margin-top: 30px
    }
`