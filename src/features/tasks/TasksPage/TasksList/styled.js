import styled, { css } from "styled-components"

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
        margin: 20px 0;
    }
`

export const Text = styled.span`
    flex-basis: 100%;
    flex-shrink: 1;
    margin: 0 20px;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`

export const Button = styled.button`
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    padding: 5px;
    border: none;
    transition: 0.3s;
    outline: none;

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({ theme }) => theme.color.green};
    `}

    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.color.red};
    `}
    &:hover {
            filter: brightness(110%)
        }

    &:active {
            filter: brightness(120%)
        }
`