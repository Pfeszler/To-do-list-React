import React from "react"
import "./style.css"

const Buttons = (props) => {
    const tasksNotDoneLength = props.tasks.filter(({ done }) => !done).length
    return props.tasks.length > 0 && (<div className="buttons__buttonContainer">
        <button className="buttons__headerButton">
            {props.hideDone ? "Pokaż ukończone" : "Ukryj Ukończone"}
        </button>
        <button className="buttons__headerButton" disabled={tasksNotDoneLength > 0 ? false : true }>
            Ukończ wszystkie
            </button>
    </div>
    )
}
export default Buttons