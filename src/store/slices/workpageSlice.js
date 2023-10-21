import { createSlice } from "@reduxjs/toolkit";
import { setQuestionSet } from "./assignmentSlice";

const workpageSlice = createSlice({
    name: "workpage",
    initialState: {
        QIDs: [],
        questionSet: [],
        workpageData: [],
        topicIndex: 0,
        questionIndex: 0,
        skillId: ""
    },
    reducers: {
        setTopicIndex(state,action){
            state.topicIndex = action.payload;
            state.questionIndex = 0;
        },
        setQuestionIndex(state,action){
            state.questionIndex = action.payload;
        },
        setQIDs(state,action) { 
            state.QIDs = action.payload;
        },
        setWorkpageData(state,action){
            state.workpageData = action.payload;
        },
        setSelectedAnswer(state,action){
            state.workpageData[state.topicIndex][state.questionIndex].selectedAnswerIndex = parseInt(action.payload)
        },
        setIsFlagged(state,action){
            state.workpageData[state.topicIndex][state.questionIndex].isFlagged = action.payload;
        },
        setIsCorrect(state,action){
            state.workpageData[state.topicIndex][state.questionIndex].isCorrect = action.payload;
        },
        setIsFocused(state,action){
            state.workpageData[state.topicIndex][state.questionIndex].isFocused = action.payload;
        },
        setSkillId(state,action){
            state.skillId = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(setQuestionSet, (state,action) => {
            state.questionSet = action.payload;
            }
        )
    }
})

export const { setSkillId, setIsFocused, setIsCorrect, setIsFlagged, setSelectedAnswer, setTopicIndex, setQuestionIndex, setWorkpageData, setQIDs } = workpageSlice.actions; 
export const workpageReducer = workpageSlice.reducer;