import { configureStore } from "@reduxjs/toolkit";
import { assignmentSetup, setQuestionSet ,assignmentReducer, changeName, setIsQuiz, setIsPm, setDueDate, setTimeHr, setTimeMin, setTimeLimit, addTopic, removeTopic, changeQuestions, updateTqPair, reset, edit } from "./slices/assignmentSlice";
import {setupListeners} from "@reduxjs/toolkit/query";
import { assignmentsApi } from "./apis/assignmentsApi";
import { questionsApi } from "./apis/questionsApi";
import { usersApi } from "./apis/usersApi";
import { setUserState, userReducer } from "./slices/userSlice";
import { setSkillId, setIsFocused, setIsCorrect, setIsFlagged, setSelectedAnswer, setTopicIndex, setQuestionIndex, setWorkpageData, setQIDs, workpageReducer } from "./slices/workpageSlice";


const store = configureStore({
    reducer: {
        assignment: assignmentReducer,
        workpage: workpageReducer,
        user: userReducer,
        [assignmentsApi.reducerPath]: assignmentsApi.reducer,
        [questionsApi.reducerPath]: questionsApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(assignmentsApi.middleware)
        .concat(questionsApi.middleware)
        .concat(usersApi.middleware)
    },
});

setupListeners(store.dispatch);
export { setUserState, setSkillId, setIsFocused, setIsCorrect, setIsFlagged, setSelectedAnswer, setTopicIndex, setQuestionIndex, setWorkpageData, assignmentSetup, setQuestionSet ,setQIDs , store, changeName, setIsQuiz, setIsPm, setDueDate, setTimeHr, setTimeMin, setTimeLimit, addTopic, removeTopic, changeQuestions, updateTqPair, reset, edit};
export { useFetchAssignmentByIdQuery, useFetchAssignmentsQuery, useCreateAssignmentMutation, useEditAssignmentMutation, useDeleteAssignmentMutation } from "./apis/assignmentsApi"
export {  useFetchQuestionSetByIdsQuery, useFetchAllQuestionIDsQuery, useFetchQuestionByTopicMutation } from "./apis/questionsApi";
export { useGetUserQuery } from "./apis/usersApi"