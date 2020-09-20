import React from 'react';
import Container from "../../../common/Container"
import Header from "../../../common/Header"
import Section from "../../../common/Section"
import Form from "./Form"
import Buttons from "./Buttons"
import TasksList from "./TasksList"
import Search from './Search';

const TasksPage = () => {
    return (
        <Container>
            <Header
                title="Lista zadań"
            />
            <Section
                title="Dodaj nowe zadanie"
                body={<Form />}
            />
            <Section
                title="Wyszukiwarka"
                body={<Search />}
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
    );
}
export default TasksPage;
