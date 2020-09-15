import React from 'react';
import Container from "../../common/Container"
import Header from "../../common/Header"
import Section from "../../common/Section"
import Form from "./Form"
import Buttons from "./Buttons"
import TasksList from "./TasksList"

function Tasks() {

    return (
        <div className="App">
            <Container>
                <Header
                    title="Lista zadań" />
                <Section
                    title="Dodaj nowe zadanie"
                    body={<Form />}
                />
                <Section
                    title="Lista zadań"
                    body={
                        <TasksList
                        />}
                    extraHeaderContent={
                        <Buttons
                        />}
                />
            </Container>
        </div >
    );
}
export default Tasks;
