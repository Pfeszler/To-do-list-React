import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { addTask } from "../tasksSlice"
import { StyledForm, Button, Input } from "./styled"

const Form = () => {

    const [newTaskContent, setNewTaskContent] = useState("");
    const trimmedNewTaskContent = newTaskContent.trim()
    const dispatch = useDispatch()
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (trimmedNewTaskContent !== "") {
            dispatch(addTask({
                content: trimmedNewTaskContent,
                done: false,
                id: nanoid()
            }))
        };
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


