import styled, { css } from "styled-components"

export const List = styled.ul`
    list-style: none;
    padding: 20px;

    @media (max-width: 991px) {
        padding: 5px;
    }
`

export const Item = styled.li`
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 10px;
    margin: 20px 10px;
    line-height: 1.5em;
    align-items: center;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
    @media (max-width: 991px) {
        margin: 10px 0;
        padding: 0;
        padding-bottom: 10px
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
        background-color: hsl(120, 100%, 25%);

        &:hover {
            background-color: hsl(120, 100%, 30%);
        }

        &:active {
            background-color: hsl(120, 100%, 35%);
        }
    `}

    ${({ remove }) => remove && css`
        background-color: hsl(0, 100%, 50%);
  
       &:hover {
            background-color: hsl(0, 100%, 60%);
        }

        &:active {
            background-color: hsl(0, 100%, 70%);
        }
    `}
`