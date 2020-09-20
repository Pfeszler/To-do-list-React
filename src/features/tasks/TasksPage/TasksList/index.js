import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { List, Item, Text, Button, StyledLink } from "./styled"
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { Link, useLocation } from "react-router-dom";


const TasksList = () => {

    const location = useLocation()
    const query = (new URLSearchParams(location.search)).get("szukaj")

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
                    <Text>
                        <StyledLink
                            to={`/zadania/${task.id}`}
                            done={task.done ? true : false}
                        >
                          
                                {task.content}
        
                        </StyledLink>
                    </Text>
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