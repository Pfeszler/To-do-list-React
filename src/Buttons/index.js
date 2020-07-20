import React from "react"
import "./style.css"

const Buttons = ({tasks, hideDone, toggleHideDone}) => {
    const tasksNotDoneLength = tasks.filter(({ done }) => !done).length
    return tasks.length > 0 && (<div className="buttons__buttonContainer">
        <button className="buttons__headerButton" onClick={toggleHideDone}>
            {hideDone ? "Pokaż ukończone" : "Ukryj Ukończone"}
        </button>
        <button className="buttons__headerButton" disabled={tasksNotDoneLength > 0 ? false : true }>
            Ukończ wszystkie
            </button>
    </div>
    )
}
export default Buttons