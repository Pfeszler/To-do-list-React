import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { ButtonContainer, HeaderButton } from "./styled"
import { selectListInformation, toggleHideDone, setAllDone, fetchExampleTasks } from "../tasksSlice"

const Buttons = () => {

    const { tasks, hideDone } = useSelector(selectListInformation);
    const dispatch = useDispatch()
    const tasksNotDoneLength = tasks.filter(({ done }) => !done).length

    return (
        <ButtonContainer>
            <HeaderButton
                onClick={() => dispatch(fetchExampleTasks())}
            >
                Pobierz przykładowe zadania
            </HeaderButton>
            <HeaderButton
                invisible={tasks.length > 0 ? false : true}
                onClick={() => dispatch(toggleHideDone())}
            >
                {hideDone ? "Pokaż ukończone" : "Ukryj Ukończone"}
            </HeaderButton>
            <HeaderButton
                invisible={tasks.length > 0 ? false : true}
                disabled={tasksNotDoneLength > 0 ? false : true}
                onClick={() => dispatch(setAllDone())}
            >
                Ukończ wszystkie
            </HeaderButton>
        </ButtonContainer>
    )
}
export default Buttons