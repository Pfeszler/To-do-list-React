import React from "react"
import "./style.css"




const Tasks = ({tasks, hideDone, removeTask}) =>{
    return (<ul className="tasks__list">
        {tasks.map(task => (
            <li key={task.id}
                className={`tasks__item ${task.done && hideDone ? "task__item--hidden" : ""} `}>
            <button className="tasks__button tasks__button--toggleDone"  >
                {task.done ? "✔️" : ""}
            </button>
            <span className={`tasks__text${task.done ? " tasks__text--done" : ""}`}>
                {task.content}
            </span>
            <button
                className="tasks__button tasks__button--remove js-removeButton" 
                onClick={() => removeTask(task.id)}
            >
                🗑️
   </button>
        </li>
        ))}

    </ul>
    )};


export default Tasks