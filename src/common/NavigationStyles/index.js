import styled from "styled-components"
import { NavLink } from "react-router-dom"

const activeClassName = "active"

export const StyledNav = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.color.teal};
    padding: 10px;
    list-style: none;
    font-size: 20px;
`

export const NavItems = styled.li`
    margin: 20px 30px;
    padding: 2px 0;
    border-bottom: 2px solid transparent;
    transition: 0.3s;
        &:hover{
            border-bottom: 2px solid ${({ theme }) => theme.color.white};
        }
       
`

export const StyledNavLink = styled(NavLink).attrs(props => ({
    activeClassName
}))`
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
       
        &.${activeClassName} {
         color: ${({ theme }) => theme.color.white};
         font-weight: bold;
        }`