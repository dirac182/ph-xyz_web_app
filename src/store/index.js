import { configureStore } from "@reduxjs/toolkit";
import { assignmentReducer, changeName, setIsQuiz, setIsPm, setDueDate, setTimeHr, setTimeMin, setTimeLimit, addTopic, removeTopic, changeQuestions } from "./slices/assignmentSlice";


const store = configureStore({
    reducer: {
        assignment: assignmentReducer
    }
});

export {store, changeName, setIsQuiz, setIsPm, setDueDate, setTimeHr, setTimeMin, setTimeLimit, addTopic, removeTopic, changeQuestions};