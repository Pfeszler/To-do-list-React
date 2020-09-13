import React from 'react';
import { useHideDone } from "./useHideDone"
import { useTasks } from "./useTasks"
import Container from "../../../common/Container"
import Header from "../../../common/Header"
import Section from "../../../common/Section"
import Form from "./Form"
import Buttons from "./Buttons"
import TasksList from "./TasksList"


function Tasks() {

    const [tasks,
        removeTask,
        toggleTaskDone,
        setAllDone,
        addNewTask
    ] = useTasks()

    const [hideDone,
        toggleHideDone
    ]= useHideDone()

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
                        <TasksList
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
export default Tasks;
