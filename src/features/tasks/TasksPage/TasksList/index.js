import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
    toggleTaskDone,
    removeTask,
    setTaskInEdition,
    editTaskContent,
    finishTasksEdition,
    selectHideDone,
    selectTasksByQuery,
    getInEditionTask
} from "../../tasksSlice";
import useQueryParameter from "../queryHooks/useQueryParameter";
import searchQueryParamName from "../queryHooks/searchQueryParamName"
import { List, Item, Text, Button, StyledLink, Form } from "./styled"
import Input from "../Input"



const TasksList = () => {
    const query = useQueryParameter(searchQueryParamName)

    const tasks = useSelector(state => selectTasksByQuery(state, query))
    const hideDone = useSelector(selectHideDone)
    const inEditionTask = useSelector(getInEditionTask)
    const inEditionTaskContent = inEditionTask ? inEditionTask.content : ""

    const dispatch = useDispatch();

    const [editedTaskContent, setEditedTaskContent] = useState(inEditionTaskContent)

    const onClickTaskEdition = (taskId, taskContent) => {
        dispatch(setTaskInEdition(taskId));
        setEditedTaskContent(taskContent)
    }

    const onFormSubmit = (event, taskID) => {
        event.preventDefault()
        dispatch(editTaskContent({ id: taskID, content: editedTaskContent }))
        dispatch(finishTasksEdition())

    }

    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone ? true : false}
                >
                    <Button
                        toggleDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔️" : ""}
                    </Button>
                    { task.inEdition === false ? (
                        <Text>
                            <StyledLink
                                to={`/zadania/${task.id}`}
                                done={task.done ? true : false}
                            >

                                {task.content}

                            </StyledLink>
                        </Text>
                    ) : (
                            <Form
                                onSubmit={(event) => onFormSubmit(event, task.id)}
                            >
                                <Input
                                    value={editedTaskContent}
                                    onChange={({ target }) => setEditedTaskContent(target.value)}
                                />
                                <Button
                                    save
                                >
                                    S
                                </Button>
                            </Form>
                        )
                    }
                    <Button
                        edit
                        onClick={() => onClickTaskEdition(task.id, task.content)}
                    >
                        {task.inEdition ? "R" : "E"}
                    </Button>
                    <Button
                        remove
                        onClick={() => dispatch(removeTask(task.id, 1))}
                    >
                        🗑️
                    </Button>
                </Item>
            ))}

        </List>
    )
};


export default TasksList