import styled from "styled-components"

export const StyledContainer = styled.main`
    max-width: 900px;
    margin: 0 auto;
    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        margin: 0 15px;
    }
`