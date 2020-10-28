import styled, { css } from "styled-components"

const Input = styled.input`
    flex-basis: 100%;
    padding: 10px;
    margin: 20px;
    margin-left: 0px;
    border: none;
    box-shadow: 0 0 2px 2px ${({ theme }) => theme.color.silver};

    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        margin: 10px;

        ${({ task }) => task && css`
            flex-basis: 0;
            width: 150px;
        `}
    }
`

export default Input