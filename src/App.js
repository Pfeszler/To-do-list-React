import React from 'react';
import Container from "./Container"
import Header from "./Header"
import Section from "./Section"
import Form from "./Form"
import Buttons from "./Buttons"
import Tasks from "./Tasks"






const tasks = [{ id: 1, content: "example content 1", done: false }, { id: 2, content: "example content 2", done: true }]

const hideDone = false;


function App() {
    return (
        <div className="App">
            <Container>
                <Header title="Lista zadań" />
                <Section
                    title="Dodaj nowe zadanie"
                    body={<Form />} />
                <Section
                    title="Lista zadań"
                    body={<Tasks tasks={tasks} hideDone={hideDone} />}
                    extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} />} />

            </Container>
        </div >
    );
}

export default App;
