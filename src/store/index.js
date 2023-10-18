import { configureStore } from "@reduxjs/toolkit";
import { setQuestionSet ,assignmentReducer, changeName, setIsQuiz, setIsPm, setDueDate, setTimeHr, setTimeMin, setTimeLimit, addTopic, removeTopic, changeQuestions, updateTqPair, reset, edit } from "./slices/assignmentSlice";
import {setupListeners} from "@reduxjs/toolkit/query";
import { assignmentsApi } from "./apis/assignmentsApi";
import { questionsApi } from "./apis/questionsApi";
import { setQIDs, workpageReducer } from "./slices/workpageSlice";


const store = configureStore({
    reducer: {
        assignment: assignmentReducer,
        workpage: workpageReducer,
        [assignmentsApi.reducerPath]: assignmentsApi.reducer,
        [questionsApi.reducerPath]: questionsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(assignmentsApi.middleware)
        .concat(questionsApi.middleware)
    },
});

setupListeners(store.dispatch);

export { setQuestionSet ,setQIDs , store, changeName, setIsQuiz, setIsPm, setDueDate, setTimeHr, setTimeMin, setTimeLimit, addTopic, removeTopic, changeQuestions, updateTqPair, reset, edit};
export { useFetchAssignmentsQuery, useCreateAssignmentMutation, useEditAssignmentMutation, useDeleteAssignmentMutation } from "./apis/assignmentsApi"
export { useFetchAllQuestionIDsQuery,useFetchQuestionByTopicMutation } from "./apis/questionsApi";