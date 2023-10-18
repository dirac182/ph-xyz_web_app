import { createSlice } from "@reduxjs/toolkit";
import { setQuestionSet } from "./assignmentSlice";

const initialState = {
    questionArray: [[]],
    QIDs: [""]
}

const workpageSlice = createSlice({
    name: "workpage",
    initialState: {
        questionArray: [[]],
        questions: [],
    },
    reducers: {
        setQIDs(state,action) { 
            state.QIDs = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(setQuestionSet, (state,action) => {
            state.questionArray = action.payload;
        })
    }
})

export const { setQIDs } = workpageSlice.actions; 
export const workpageReducer = workpageSlice.reducer;