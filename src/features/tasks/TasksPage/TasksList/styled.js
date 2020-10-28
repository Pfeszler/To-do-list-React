import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

export const List = styled.ul`
    list-style: none;
    padding: 0px;

`

export const Item = styled.li`
    border-bottom: 1px solid ${({ theme }) => theme.color.silver};
    display: flex;
    margin: 30px 0px;
    line-height: 1.5em;
    align-items: center;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        margin: 20px -15px;
    }
`

export const Text = styled.span`
    flex-basis: 100%;
    flex-shrink: 1;
    margin: 0 15px;
`

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.color.teal};
    text-decoration: none;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
    
    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`

export const Button = styled.button`
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    padding: 5px;
    border: none;
    transition: 0.3s;
    outline: none;
    color: ${({ theme }) => theme.color.white};
    font-weight: bold;

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({ theme }) => theme.color.green};
    `}

    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.color.red};
    `}

    ${({ edit }) => edit && css`
        background-color: ${({ theme }) => theme.color.teal};
        margin: 0px 5px;
    `}

    ${({ save }) => save && css`
        background-color: ${({ theme }) => theme.color.orange};
    `}

    &:hover {
            filter: brightness(110%)
        }

    &:active {
            filter: brightness(120%)
        }
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
`