import React from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
    getTaskById,
    toggleTaskDone,
    removeTask,
} from "../../tasksSlice"
import { useEditedTaskContent } from "../../useEditedTaskContent"
import { ButtonContainer, Button, Text, ContentText, LabelText, Form } from "./styled"
import Input from "../../TasksPage/Input"

const TaskPageBody = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id))
    const dispatch = useDispatch()
    const {
        editedTaskContent,
        setEditedTaskContent,
        onClickTaskEdition,
        onFormSubmit
    } = useEditedTaskContent()

    return task && (
        <section>
            <Form
                onSubmit={(event) => onFormSubmit(event, task.id)}
            >
                <LabelText>
                    Zadanie:
                </LabelText>

                {task.inEdition ? (
                    <Input
                        value={editedTaskContent}
                        onChange={({ target }) => setEditedTaskContent(target.value)}
                    />
                ) : (
                        <ContentText>
                            {task.content}
                        </ContentText>
                    )}
                <Button
                    save
                    hidden={task.inEdition ? false : true}
                >
                    Zapisz zmiany
            </Button>
            </Form>
            <Text>
                {task ? `Ukończone : ${task.done ? "Tak" : "Nie"}` : ""}
            </Text>
            <ButtonContainer>

                <Button
                    done
                    onClick={() => dispatch(toggleTaskDone(task.id))}
                >
                    Oznacz jako {task.done ? "nie" : ""}wykonane
            </Button>
                <Button
                    remove
                    onClick={() => dispatch(removeTask(task.id, 1))}
                >
                    Usuń
            </Button>
                <Button
                    edit
                    onClick={() => onClickTaskEdition(task.id, task.content)}
                >
                    {task.inEdition ? "Resetuj" : "Edytuj"}
                </Button>
            </ButtonContainer>
        </section>
    )
}

export default TaskPageBody