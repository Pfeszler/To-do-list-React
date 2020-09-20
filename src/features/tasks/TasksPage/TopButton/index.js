import React from "react"
import { useDispatch } from "react-redux"
import { fetchExampleTasks } from "../../tasksSlice"
import { ButtonContainer, HeaderButton } from "../headerButtonsStyles"

const TopButton = () => {
    const dispatch = useDispatch()
    return (
        <ButtonContainer>
            <HeaderButton
                onClick={() => dispatch(fetchExampleTasks())}
            >
                Pobierz przykładowe zadania
            </HeaderButton>
        </ButtonContainer>
    )
}

export default TopButton