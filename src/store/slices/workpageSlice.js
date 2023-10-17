import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: [],
    QIDs: [""]
}

const workpageSlice = createSlice({
    name: "workpage",
    initialState: {
        questions: [],
    },
    reducers: {
        addQuestion(state,action){
            console.log("Add Question",action.payload)
            state.questions.push(action.payload)
        },
        resetQuestions(state,action){
            console.log("RESET")
            state.questions = []
        },
        setQIDs(state,action) { 
            state.QIDs = action.payload;
        }
    }
})

export const { setQIDs ,addQuestion, resetQuestions } = workpageSlice.actions; 
export const workpageReducer = workpageSlice.reducer;