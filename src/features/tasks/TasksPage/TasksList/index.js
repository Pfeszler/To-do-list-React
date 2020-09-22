import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {
    toggleTaskDone,
    removeTask,
    selectHideDone,
    selectTasksByQuery,
} from "../../tasksSlice";

import useQueryParameter from "../queryHooks/useQueryParameter";
import searchQueryParamName from "../queryHooks/searchQueryParamName"
import { List, Item, Text, Button, StyledLink, Form } from "./styled"
import Input from "../Input"
import { useEditedTaskContent } from "../../useEditedTaskContent";



const TasksList = () => {
    const query = useQueryParameter(searchQueryParamName)
    const {
        editedTaskContent,
        setEditedTaskContent,
        onClickTaskEdition,
        onFormSubmit
    } = useEditedTaskContent()

    const tasks = useSelector(state => selectTasksByQuery(state, query))
    const hideDone = useSelector(selectHideDone)

    const dispatch = useDispatch();

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