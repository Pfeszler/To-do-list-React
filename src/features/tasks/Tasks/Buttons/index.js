import React from "react"
import {ButtonContainer, HeaderButton } from "./styled"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
    const tasksNotDoneLength = tasks.filter(({ done }) => !done).length
    
    return tasks.length > 0 && (
        <ButtonContainer>
            <HeaderButton
                onClick={toggleHideDone}
            >
                {hideDone ? "Pokaż ukończone" : "Ukryj Ukończone"}
            </HeaderButton>
            <HeaderButton
                disabled={tasksNotDoneLength > 0 ? false : true}
                onClick={setAllDone}
            >
                Ukończ wszystkie
            </HeaderButton>
        </ButtonContainer>
    )
}
export default Buttons