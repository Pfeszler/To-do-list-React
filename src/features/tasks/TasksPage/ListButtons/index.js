import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectHideDone, toggleHideDone, setAllDone, selectTaskNotDoneLength, selectTasksLength } from "../../tasksSlice"
import { ButtonContainer, HeaderButton } from "../headerButtonsStyles"

const ListButtons = () => {

    const hideDone  = useSelector(selectHideDone);
    const tasksNotDoneLength = useSelector(selectTaskNotDoneLength)
    const tasksLength = useSelector(selectTasksLength)
    const dispatch = useDispatch()

    return tasksLength > 0 && (
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
export default ListButtons