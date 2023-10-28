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
        teacherClassrooms: [{}],
        studentClassrooms:[{}]
    },
    reducers: {
        setUserState(state,action){
            state.userId = action.payload.id;
            state.userEmail = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.isTeacher = action.payload.isTeacher;
            state.teacherClassrooms = action.payload.teacherClassrooms;
            state.studentClassrooms = action.payload.studentClassrooms;
        },
    }
})

export const { setUserState } = userSlice.actions; 
export const userReducer = userSlice.reducer;