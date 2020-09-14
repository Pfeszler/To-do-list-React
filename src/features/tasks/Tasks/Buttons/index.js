import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { ButtonContainer, HeaderButton } from "./styled"
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice"

const Buttons = () => {

    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch()
    const tasksNotDoneLength = tasks.filter(({ done }) => !done).length

    return tasks.length > 0 && (
        <ButtonContainer>
            <HeaderButton
                onClick={() => dispatch(toggleHideDone())}
            >
                {hideDone ? "Pokaż ukończone" : "Ukryj Ukończone"}
            </HeaderButton>
            <HeaderButton
                disabled={tasksNotDoneLength > 0 ? false : true}
                onClick={() => dispatch(setAllDone())}
            >
                Ukończ wszystkie
            </HeaderButton>
        </ButtonContainer>
    )
}
export default Buttons