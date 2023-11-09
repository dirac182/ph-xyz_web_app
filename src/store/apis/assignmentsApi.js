import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const assignmentsApi = createApi({
    reducerPath: "assignments",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://www.ph-zyx.com/",
    }),
    endpoints(builder) {
        return {
            fetchAssignments: builder.query({
                providesTags: ["Assignments"],
                query: (user) => {
                    return {
                        url: `/assignments/get_assignments`,
                        params: {
                            userId:user
                        },
                        method: "GET",
                    }
                }
            }),
            fetchAssignmentById: builder.query({
                providesTags: ["Assignments"],
                query: (data) => {
                    return {
                        url: `/assignments/get_assignment_by_id`,
                        params: {
                            userId: data.userId,
                            assignmentId: data.assignmentId
                        },
                        method: "GET",
                    }
                }
            }),
            createAssignment: builder.mutation({
                invalidatesTags: ["Assignments"],
                query: (data) => {
                    return{
                        url: "/assignments/create_assignment",
                        method: "POST",
                        body: {
                            userID: data.userId,
                            assignmentId: data.assignmentId,
                            name: data.name,
                            tqPair: data.tqPair,
                            quiz: data.isQuiz,
                            timeLimit: data.timeLimit,
                            dueDate: data.dueDate,
                            timeHr: data.timeHr,
                            timeMin: data.timeMin,
                            isPm: data.isPm,
                            status: data.status,
                            questionSet: data.questionSet,
                            classes: data.classes
                        }
                    }
                },
            }),
            editAssignment: builder.mutation({
                invalidatesTags: ["Assignments"],
                query: (data) => {
                    return{
                        url: "/assignments/edit_assignment",
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
                            timeHr: data.timeHr,
                            timeMin: data.timeMin,
                            isPm: data.isPm,
                            status: data.status,
                            questionSet: data.questionSet,
                            classes: data.classes
                        }
                    }
                },
            }),
            deleteAssignment: builder.mutation({
                invalidatesTags: ["Classrooms", "Assignments"],
                query: (data) => {
                    return {
                        url: "/assignments/delete_assignment",
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
        
    


export const { useFetchAssignmentByIdQuery, useFetchAssignmentsQuery, useCreateAssignmentMutation, useEditAssignmentMutation, useDeleteAssignmentMutation } = assignmentsApi;
export { assignmentsApi };
