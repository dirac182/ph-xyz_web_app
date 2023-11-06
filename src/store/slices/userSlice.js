import { createSlice } from "@reduxjs/toolkit";
import { setQuestionSet } from "./assignmentSlice";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userId: null,
        userEmail: "",
        firstName: "",
        lastName: "",
        isTeacher: null,
        studentClasses:[],
        studentAssignmentInfo: [],
    },
    reducers: {
        setUserState(state,action){
            state.userId = action.payload.id;
            state.userEmail = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.isTeacher = action.payload.isTeacher;
            state.teacherClassrooms = action.payload.teacherClassrooms;
            state.studentClasses = action.payload.studentClasses;
            state.studentAssignmentInfo = action.payload.studentAssignmentInfo;
        },
    }
})

export const { setUserState } = userSlice.actions; 
export const userReducer = userSlice.reducer;