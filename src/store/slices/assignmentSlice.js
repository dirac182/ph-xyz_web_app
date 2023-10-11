import { createSlice, nanoid } from "@reduxjs/toolkit";

const today = new Date().toJSON().slice(0,10);

const assignmentSlice = createSlice({
    name:"assignment",
    initialState: {
        assignmentId: nanoid(),
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
    },
    reducers: {
        changeName(state,action) {
            state.assignmentName = action.payload;
        },
        addTopic(state,action){
            //Assumption: action.payload === {"id": 1.2, "topic": "Energy", "questions": 2}
            state.tqPair.push({"id": action.payload.id, "topic": action.payload.topic, "questions": 1})
        },
        removeTopic(state,action){
            //Assumption: action.payload ===  1.2
            const updated = state.tqPair.filter((pair)=> {
                return pair.id !== action.payload
            })
            state.tqPair = updated
        },
        changeQuestions(state,action) {
            //Assumption: action.payload === {"id": 1.2, "questions": 3}
            state.tqPair.map((topic) => {
                return(
                topic.id === action.payload.id ? {...topic, questions : action.payload.amount} : topic
                )
             })
        },
        setIsQuiz(state,action){
            state.isQuiz = !state.isQuiz;
        },
        setTimeLimit(state,action){
            state.timeLimit = action.payload;
        },
        setDueDate(state,action){
            state.dueDate = action.payload;
        },
        setTimeHr(state,action){
            state.timeHr = action.payload;
        },
        setTimeMin(state,action){
            state.timeMin = action.payload;
        },
        setIsPm(state,action){
            state.isPm = !state.isPm;
        }
    }
})

export const {changeName, addTqPair, removeTqPair, setIsQuiz, setTimeLimit, setDueDate, setIsPm, setTimeMin, setTimeHr, addTopic, removeTopic, changeQuestions} = assignmentSlice.actions;
export const assignmentReducer = assignmentSlice.reducer;