import React, { useState, useEffect } from 'react';
import Container from "./Container"
import Header from "./Header"
import Section from "./Section"
import Form from "./Form"
import Buttons from "./Buttons"
import Tasks from "./Tasks"


function App() {
    const createInitialTasks = () => {
        const localStorageTasks = localStorage.getItem("tasks");
        return localStorageTasks ? JSON.parse(localStorageTasks) : []
    };
    const createInitialHideDone = () => {
        const localStorageHideDone = localStorage.getItem("hideDone");
        return localStorageHideDone ? JSON.parse(localStorageHideDone) : false
    };


    const [hideDone, setHideDone] = useState(createInitialHideDone());
    const [tasks, setTasks] = useState(createInitialTasks());

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone)
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id))
    }

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }
            return task
        }));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => (
            { ...task, done: true })
        ));
    }

    const addNewTask = (newTaskContent) => {
        if (newTaskContent.trim() !== "") {
            setTasks(tasks =>
                [...tasks,
                {
                    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
                    content: newTaskContent,
                    done: false
                }]);
        }
    };

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);
    useEffect(() => {
        localStorage.setItem("hideDone", JSON.stringify(hideDone))
    }, [hideDone]);


    return (
        <div className="App">
            <Container>
                <Header
                    title="Lista zadań" />
                <Section
                    title="Dodaj nowe zadanie"
                    body={<Form
                        addNewTask={addNewTask} />} />
                <Section
                    title="Lista zadań"
                    body={
                        <Tasks
                            tasks={tasks}
                            hideDone={hideDone}
                            removeTask={removeTask}
                            toggleTaskDone={toggleTaskDone}
                        />}
                    extraHeaderContent={
                        <Buttons
                            tasks={tasks}
                            hideDone={hideDone}
                            toggleHideDone={toggleHideDone}
                            setAllDone={setAllDone}
                        />}
                />
            </Container>
        </div >
    );
}
export default App;
