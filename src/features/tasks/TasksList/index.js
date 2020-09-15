import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { List, Item, Text, Button } from "./styled"
import { selectListInformation, toggleTaskDone, removeTask } from "../tasksSlice";


const TasksList = () => {

    const { tasks, hideDone } = useSelector(selectListInformation)

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
                    <Text
                        done={task.done ? true : false}
                    >
                        {task.content}
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