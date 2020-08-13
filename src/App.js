import React from 'react';
import { useHideDone } from "./useHideDone"
import { useTasks } from "./useTasks"
import Container from "./Container"
import Header from "./Header"
import Section from "./Section"
import Form from "./Form"
import Buttons from "./Buttons"
import Tasks from "./Tasks"


function App() {

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
