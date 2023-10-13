import { configureStore } from "@reduxjs/toolkit";
import { assignmentReducer, changeName, setIsQuiz, setIsPm, setDueDate, setTimeHr, setTimeMin, setTimeLimit, addTopic, removeTopic, changeQuestions, updateTqPair, reset, edit } from "./slices/assignmentSlice";
import {setupListeners} from "@reduxjs/toolkit/query";
import { assignmentsApi } from "./apis/assignmentsApi";

const store = configureStore({
    reducer: {
        assignment: assignmentReducer,
        [assignmentsApi.reducerPath]: assignmentsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(assignmentsApi.middleware)
    },
});

setupListeners(store.dispatch);

export {store, changeName, setIsQuiz, setIsPm, setDueDate, setTimeHr, setTimeMin, setTimeLimit, addTopic, removeTopic, changeQuestions, updateTqPair, reset, edit};
export { useFetchAssignmentsQuery, useFetchAssignmentByIdQuery, useCreateAssignmentMutation, useEditAssignmentMutation, useDeleteAssignmentMutation } from "./apis/assignmentsApi"