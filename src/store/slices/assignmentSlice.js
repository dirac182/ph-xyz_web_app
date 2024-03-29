import { createSlice } from "@reduxjs/toolkit";

const today = new Date().toJSON().slice(0,10);

const initialState = {
    assignmentId: "",
    userId: 123,
    assignmentName: "",
    tqPair: [],
    isQuiz: false,
    timeLimit: 20,
    status: true,
    dueDate: today,
    timeHr: 11,
    timeMin: 59,
    isPm: true,
    questionSet: [[]],
    classes: []
};

const assignmentSlice = createSlice({
    name:"assignment",
    initialState: {
        assignmentId: "",
        userId: 123,
        assignmentName: "",
        tqPair: [],
        isQuiz: false,
        timeLimit: 20,
        status: true,
        dueDate: today,
        timeHr: 11,
        timeMin: 59,
        isPm: true,
        questionSet:[[]],
        classes: []
    },
    reducers: {
        changeName(state,action) {
            state.assignmentName = action.payload;
        },
        addTopic(state,action){
            //Assumption: action.payload === {"id": 1.2, "topic": "Energy", "questions": 2}
            state.tqPair.push({"topicId": action.payload.topicId, "topic": action.payload.topic, "questions": 1})
        },
        removeTopic(state,action){
            //Assumption: action.payload ===  1.2
            const updated = state.tqPair.filter((pair)=> {
                return pair.topicId !== action.payload
            })
            state.tqPair = updated
        },
        changeQuestions(state,action) {
            //Assumption: action.payload === {"id": 1.2, "questions": 3}
            const updatedPair = state.tqPair.map((pair) => {
                if (pair.topicId === action.payload.id) {
                    return { ...pair,  "questions": action.payload.questions}
                }
                return pair;
            });
            state.tqPair = updatedPair
        },
        updateTqPair(state,action){
            state.tqPair = action.payload;
        },
        setIsQuiz(state,action){
            state.isQuiz = action.payload;
        },
        setTimeLimit(state,action){
            state.timeLimit = action.payload;
        },
        setDueDate(state,action){
            state.dueDate = action.payload;
        },
        setTimeHr(state,action){
            if (action.payload === 0){
                state.timeHr = 12
            }else{
                state.timeHr = action.payload;
            }
        },
        setTimeMin(state,action){
            state.timeMin = action.payload;
        },
        setIsPm(state,action){
            state.isPm = action.payload;
        },
        setAssignmentId(state,action){
            state.assignmentId = action.payload;
        },
        reset: () => initialState,
        edit(state,action){
            state.assignmentId = action.payload.assignmentId;
            state.assignmentName = action.payload.assignmentName;
            state.tqPair = action.payload.tqPair;
            state.isQuiz = action.payload.isQuiz;
            state.timeLimit = action.payload.timeLimit;
            state.dueDate = action.payload.dueDate;
            state.timeHr = action.payload.timeHr;
            state.timeMin = action.payload.timeMin;
            state.isPm = action.payload.isPm;
            state.classes = action.payload.classes;
        },
        setQuestionSet(state,action){
            state.questionSet = action.payload;
        },
        assignmentSetup(state,action) {
            state.assignmentId = action.payload.assignmentId;
            state.assignmentName = action.payload.assignmentName;
            state.tqPair = action.payload.tqPair;
            state.isQuiz = action.payload.isQuiz;
            state.timeLimit = action.payload.timeLimit;
            state.dueDate = action.payload.dueDate;
            state.timeHr = action.payload.timeHr;
            state.timeMin = action.payload.timeMin;
            state.isPm = action.payload.isPm
            state.classes = action.payload.classes;
            state.questionSet = action.payload.questionSet;
        },
        changeAssignmentClasses(state,action){
            state.classes = action.payload
        }
    }
})

export const { changeAssignmentClasses, assignmentSetup, setQuestionSet ,changeName, addTqPair, removeTqPair, setIsQuiz, setTimeLimit, setDueDate, setIsPm, setTimeMin, setTimeHr, addTopic, removeTopic, changeQuestions, updateTqPair, reset, edit} = assignmentSlice.actions;
export const assignmentReducer = assignmentSlice.reducer;