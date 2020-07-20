import React, { useState } from 'react';
import Container from "./Container"
import Header from "./Header"
import Section from "./Section"
import Form from "./Form"
import Buttons from "./Buttons"
import Tasks from "./Tasks"








function App() {
    const [hideDone, setHideDone] = useState(false);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone)
    };

    const [tasks, setTasks] = useState(
        [
            { id: 1, content: "example task 1", done: false },
            { id: 2, content: "examplet task 2", done: true }
        ]);

        const removeTask = (id) => {
            setTasks(tasks => tasks.filter(task => task.id !== id))
        }
    return (
        <div className="App">
            <Container>
                <Header
                    title="Lista zadań" />
                <Section
                    title="Dodaj nowe zadanie"
                    body={<Form />} />
                <Section
                    title="Lista zadań"
                    body={<Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} />}
                    extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} />} />

            </Container>
        </div >
    );
}

export default App;
