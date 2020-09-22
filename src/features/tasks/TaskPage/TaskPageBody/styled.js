import styled, { css } from "styled-components"

export const Form = styled.form`
    margin: 10px;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    align-items: center;

    @media (max-width: ${({theme}) => theme.breakpoint.tabletMax}px){
        grid-template-columns: 1fr;
    }
`

export const Text = styled.p`
    font-weight: bold;
    text-transform: uppercase;
    display: inline-block;
    padding: 10px;
    margin: 10px;
`

export const ContentText = styled.p`
    display: inline-block;
`

export const LabelText = styled.p`
    font-weight: bold;
    display: inline-block;
`

export const ButtonContainer = styled.section`
    margin: 20px;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));;
    grid-gap: 15px;

    @media (max-width: ${({theme}) => theme.breakpoint.tabletMax}px){
        grid-template-columns: 1fr;
    }
`
export const Button = styled.button`
    padding: 20px;
    color: ${({ theme }) => theme.color.white};
    border: none;
    font-weight: bold;

    &:hover {
        filter: brightness(110%);
    }
    
    &:active {
        filter: brightness(115%);
    }

    ${({ hidden }) => hidden && css`
        display: none;
    `}

    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.color.red};
    `}

    ${({ save }) => save && css`
    background-color: ${({ theme }) => theme.color.orange};
    padding: 10px;
    `}

    ${({ done }) => done && css`
    background-color: ${({ theme }) => theme.color.green};
    `}

    ${({ edit }) => edit && css`
    background-color: ${({ theme }) => theme.color.teal}
    `}
`