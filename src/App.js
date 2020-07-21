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

    const [tasks, setTasks] = useState([]);

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
        setTasks(tasks =>
            [...tasks,
            {
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
                content: newTaskContent,
                done: false
            }]);
    };
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
                    body={<Tasks
                        tasks={tasks}
                        hideDone={hideDone}
                        removeTask={removeTask}
                        toggleTaskDone={toggleTaskDone} />}
                    extraHeaderContent={<Buttons
                        tasks={tasks}
                        hideDone={hideDone}
                        toggleHideDone={toggleHideDone}
                        setAllDone={setAllDone} />} />

            </Container>
        </div >
    );
}

export default App;
