import styled from "styled-components"

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.color.white};
    margin-bottom: 10px;
    box-shadow: 0px 0px 2px 2px #ddd;
`

export const HeaderContainer = styled.div`
    padding: 25px;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    text-align: center;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-wrap: wrap;
        flex-direction: column;
}
`

export const Header = styled.h2`
    margin: 0;
    padding: 0;
    text-align: left;
`



