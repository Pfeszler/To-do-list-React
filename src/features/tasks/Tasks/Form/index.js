import React, { useState, useRef } from "react";
import {StyledForm, Button,Input } from "./styled"


const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
        focusInput();
    }

    const inputRef = useRef(null)

    const focusInput = () => {
        inputRef.current.focus()
    }

    return (
        <StyledForm
            onSubmit={onFormSubmit}
        >
            <Input
                ref={inputRef}
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>
                Dodaj Zadanie
            </Button>
        </StyledForm>
    );
};

export default Form


