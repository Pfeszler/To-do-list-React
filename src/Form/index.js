import React, { useState, useRef } from "react";
import "./style.css"


const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    }

    const inputRef = useRef(null)

    const focusInput = () => {
        inputRef.current.focus()
    }

    return (
        <form
            className="form__form"
            onSubmit={onFormSubmit}
        >
            <input
                className="form__input"
                ref={inputRef}
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button
                className="form__button"
                onClick={() => focusInput()}
            >
                Dodaj Zadanie
            </button>
        </form>
    );
};

export default Form


