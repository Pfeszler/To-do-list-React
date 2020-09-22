import React from "react"
import Container from "../../../common/Container"
import Header from "../../../common/Header"
import Section from "../../../common/Section"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { getTaskById } from "../tasksSlice"
import TaskPageBody from "./TaskPageBody"

const TaskPage = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id))

    return (
        <Container>
            <Header
                title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania"}
                body={task ? <TaskPageBody /> : <section></section>}
            />
        </Container>
    )
}


export default TaskPage
