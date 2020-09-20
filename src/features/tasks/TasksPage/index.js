import React from 'react';
import Container from "../../../common/Container"
import Header from "../../../common/Header"
import Section from "../../../common/Section"
import TopButton from "./TopButton"
import Form from "./Form"
import ListButtons from "./ListButtons"
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
                extraHeaderContent={
                    <TopButton
                    />}
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
                    <ListButtons
                    />}
            />
        </Container>
    );
}
export default TasksPage;
