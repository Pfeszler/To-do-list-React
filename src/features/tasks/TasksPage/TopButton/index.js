import React from "react"
import { useDispatch } from "react-redux"
import { fetchExampleTasks } from "../../tasksSlice"
import { ButtonContainer, HeaderButton } from "../headerButtonsStyles"
import { useLoadingStatus } from "./useLoadingStatus"

const TopButton = () => {
    const dispatch = useDispatch()
    const {loadingText, loading} = useLoadingStatus()
    return (
        <ButtonContainer>
            <HeaderButton
                disabled={loading ? true : false}
                onClick={() => dispatch(fetchExampleTasks())}
            >
                {loadingText()}
            </HeaderButton>
        </ButtonContainer>
    )
}

export default TopButton