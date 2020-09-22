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
        setTaskInEdition: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(task => task.id === payload);
            tasks.forEach((task) => task.inEdition = false)
            tasks[index].inEdition = true
        },
        finishTasksEdition:({tasks}) => {
            tasks.forEach((task) => task.inEdition = false)
        },
        editTaskContent: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(task => task.id === payload.id)
            tasks[index].content = payload.content
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
    setTaskInEdition,
    finishTasksEdition,
    editTaskContent,
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
export const selectTasksLength = state => selectTasks(state).length;
export const selectTaskNotDoneLength = state => selectTasks(state).filter(({ done }) => !done).length;
export const getTaskById = (state, taskId) => selectTasks(state).find(({ id }) => id === taskId);
export const getInEditionTask = state => selectTasks(state).find(({ inEdition }) => inEdition === true);
export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state)
    if (!query || query.trim() === "") {
        return tasks
    }
    return tasks.filter(({ content }) => content.toUpperCase().includes(query.toUpperCase().trim()));
};

export default tasksSlice.reducer

