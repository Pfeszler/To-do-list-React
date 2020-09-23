import { takeEvery, call, put, select, delay, takeLatest } from "redux-saga/effects"
import { fetchExampleTasks, setTasks, selectTasks, selectHideDone, setLoadingStatus, toggleHideDone } from "./tasksSlice"
import { getExampleTasks } from "./getExampleTasks"
import { saveToLocalStorage } from "./localStorage/localStorage"
import {tasksKey, hideDoneKey} from "./localStorage/localStorageKeys"

function* fetchExampleTasksHandler() {
    try {
        yield put(setLoadingStatus("loading"))
        yield delay(1000)
        const exampleTasks = yield call(getExampleTasks)
        yield put(setTasks(exampleTasks))
        yield put(setLoadingStatus("success"))
    } catch (error) {
        yield put(setLoadingStatus("failed"))
        yield call(alert("coś poszło nie tak"))
    }
}

function* saveTasksToLocalStorageHandler() {
    const tasks = yield select(selectTasks)
    yield call(saveToLocalStorage, tasksKey, tasks)
}

function* saveHideDoneToLocalStorageHandler() {
    const hideDone = yield select(selectHideDone)
    yield call(saveToLocalStorage, hideDoneKey, hideDone)
}

export function* tasksSaga() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler )
    yield takeEvery("*", saveTasksToLocalStorageHandler)
    yield takeLatest(toggleHideDone.type, saveHideDoneToLocalStorageHandler)
}