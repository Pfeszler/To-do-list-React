import React from "react"
import "./style.css"




const Tasks = (props) =>{
    return (<ul className="tasks__list">
        {props.tasks.map(task => (
            <li key={task.id}
                className={`tasks__item ${task.done && props.hideDone ? "task__item--hidden" : ""} `}>
            <button className="tasks__button tasks__button--toggleDone">
                {task.done ? "✔️" : ""}
            </button>
            <span className={`tasks__text${task.done ? " tasks__text--done" : ""}`}>
                {task.content}
            </span>
            <button
                className="tasks__button tasks__button--remove js-removeButton"
            >
                🗑️
   </button>
        </li>
        ))}

    </ul>
    )};


export default Tasks