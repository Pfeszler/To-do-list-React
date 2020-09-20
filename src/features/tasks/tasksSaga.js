import { takeEvery, call, put, select } from "redux-saga/effects"
import { fetchExampleTasks, setTasks, selectTasks, setLoadingStatus } from "./tasksSlice"
import { getExampleTasks } from "./getExampleTasks"
import { saveTasksToLocalStorage } from "./tasksLocalStorage"

function* fetchExampleTasksHandler() {
    try {
        yield put(setLoadingStatus("loading"))
        const exampleTasks = yield call(getExampleTasks)
        yield put(setTasks(exampleTasks))
        yield put(setLoadingStatus("succes"))
    } catch (error) {
        yield put(setLoadingStatus("failed"))
        yield call(alert("coś poszło nie tak"))
    }
}

function* saveTasksToLocalStorageHandler() {
    const tasks = yield select(selectTasks)
    yield call(saveTasksToLocalStorage, tasks)
}

export function* tasksSaga() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler)
    yield takeEvery("*", saveTasksToLocalStorageHandler)
}