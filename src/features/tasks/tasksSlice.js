import { createSlice } from "@reduxjs/toolkit"
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: "listInformation",
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task)
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone
        },
        toggleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(task => task.id === payload);
            tasks[index].done = !tasks[index].done
        },
        removeTask: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(task => task.id === payload);
            tasks.splice(index, 1)
        },
        setAllDone: ({ tasks }) => {
            tasks.forEach((task) => {
                task.done = true;
            });
        },
        fetchExampleTasks: () => { },
        setTasks: (state, { payload: exampleTasks }) => {
            state.tasks = exampleTasks
        }
    },
}
)

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllDone,
    fetchExampleTasks,
    setTasks
} = tasksSlice.actions;
export const selectListInformation = ({ listInformation }) => listInformation
export const selectTasks = ({ listInformation }) => listInformation.tasks
export const selectHideDone = ({ listInformation }) => listInformation.hideDone
export default tasksSlice.reducer

