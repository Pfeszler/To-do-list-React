import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    editTaskContent,
    finishTasksEdition,
    getInEditionTask,
    setTaskInEdition
} from "./tasksSlice"

export const useEditedTaskContent = () => {
    const inEditionTask = useSelector(getInEditionTask)
    const inEditionTaskContent = inEditionTask ? inEditionTask.content : ""
    const [editedTaskContent, setEditedTaskContent] = useState(inEditionTaskContent)
    const dispatch = useDispatch()

    const onClickTaskEdition = (taskId, taskContent) => {
        dispatch(setTaskInEdition(taskId));
        setEditedTaskContent(taskContent)
    }

    const onFormSubmit = (event, taskID) => {
        event.preventDefault()
        if (editedTaskContent.trim() !== "") {
            dispatch(editTaskContent({ id: taskID, content: editedTaskContent }))
            dispatch(finishTasksEdition())
        } else {
            alert("Nie można zapisać pustego zadania")
        }
    }

    return { editedTaskContent, setEditedTaskContent, onClickTaskEdition, onFormSubmit }
}