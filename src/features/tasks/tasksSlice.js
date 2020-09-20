import { createSlice } from "@reduxjs/toolkit"
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: "listInformation",
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        loadingStatus: "initial",
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
        setLoadingStatus: (state, { payload }) => {
            state.loadingStatus = payload
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
    setLoadingStatus,
    fetchExampleTasks,
    setTasks
} = tasksSlice.actions;


export const selectListInformation = state => state.listInformation;
export const selectTasks = state => selectListInformation(state).tasks;
export const selectHideDone = state => selectListInformation(state).hideDone;
export const selectLoadingStatus = state => selectListInformation(state).loadingStatus
export const getTaskById = (state, taskId) => selectTasks(state).find(({ id }) => id === taskId);
export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state)
    if (!query || query.trim() === "") {
        return tasks
    }
    return tasks.filter(({ content }) => content.toUpperCase().includes(query.toUpperCase().trim()));
};

export default tasksSlice.reducer

