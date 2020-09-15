import { configureStore } from "@reduxjs/toolkit"
import tasksReducer from "./features/tasks/tasksSlice"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./rootSaga"


const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        listInformation: tasksReducer,
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga)

export default store

