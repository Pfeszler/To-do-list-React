import React from "react"
import { List, Item, Text, Button } from "./styled"


const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => {
    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone ? true : false}
                >
                    <Button
                        toggleDone
                        onClick={() => toggleTaskDone(task.id)}
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
                        onClick={() => removeTask(task.id)}
                    >
                        🗑️
                    </Button>
                </Item>
            ))}

        </List>
    )
};


export default Tasks