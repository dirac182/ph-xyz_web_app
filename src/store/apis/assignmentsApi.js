import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const assignmentsApi = createApi({
    reducerPath: "assignments",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000",
    }),
    endpoints(builder) {
        return {
            fetchAssignments: builder.query({
                providesTags: ["Assignments"],
                query: (user) => {
                    return {
                        url: `/get/assignments`,
                        params: {
                            userId:user
                        },
                        method: "GET",
                    }
                }
            }),
            createAssignment: builder.mutation({
                invalidatesTags: ["Assignments"],
                query: (data) => {
                    return{
                        url: "/create/assignment",
                        method: "POST",
                        body: {
                            userID: data.userId,
                            name: data.name,
                            tqPair: data.tqPair,
                            quiz: data.isQuiz,
                            timeLimit: data.timeLimit,
                            dueDate: data.dueDate,
                            status: data.status,
                            questionSet: data.questionSet
                        }
                    }
                },
            }),
            editAssignment: builder.mutation({
                invalidatesTags: ["Assignments"],
                query: (data) => {
                    return{
                        url: "/edit/assignment",
                        method: "POST",
                        params: {
                            userID: data.userId,
                            assignmentID: data.assignmentId,
                        },
                        body: {
                            name: data.name,
                            tqPair: data.tqPair,
                            quiz: data.isQuiz,
                            timeLimit: data.timeLimit,
                            dueDate: data.dueDate,
                            status: data.status,
                            questionSet: data.questionSet
                        }
                    }
                },
            }),
            deleteAssignment: builder.mutation({
                invalidatesTags: ["Assignments"],
                query: (data) => {
                    return {
                        url: "/delete/assignment",
                        method: "POST",
                        params: {
                            userID: data.userId,
                            assignmentID: data.assignmentId,
                        }
                    }
                },                
            })
        }
    }
})
        
    


export const { useFetchAssignmentsQuery, useCreateAssignmentMutation, useEditAssignmentMutation, useDeleteAssignmentMutation } = assignmentsApi;
export { assignmentsApi };
