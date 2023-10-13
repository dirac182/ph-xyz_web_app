import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { nanoid } from "@reduxjs/toolkit";

const assignmentsApi = createApi({
    reducerPath: "assignments",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000",
    }),
    endpoints(builder) {
        return {
            fetchAssignments: builder.query({
                query: (user) => {
                    return {
                        url: `/get/assignments`,
                        params: {
                            userId:user
                        },
                        method: "GET",
                    }
                },
                providesTags: (result, error, assignments) => {
                    const tags = result.map((assignment) => {
                        return { type: 'Assignment', id: assignment.assignmentID }
                    });
                    tags.push({type: "Assignment", id: result.userID})
                    return tags;
                }
            }),
            fetchAssignmentById: builder.query({
                query: ({userId,assignmentId}) => {
                    return {
                        url: `/get/assignmentById`,
                        params: {
                            userId,
                            assignmentId
                        },
                        method: "GET",
                    }
                }
            }),
            createAssignment: builder.mutation({
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
                        }
                    }
                },
                invalidatesTags: (result,error,assignment) => {
                    return [{ type: 'Assignment', id: 'LIST' }]
                }
            }),
            editAssignment: builder.mutation({
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
                        }
                    }
                },
                invalidatesTags: (result,error,assignment) => {
                    return [{ type: 'Assignment', id: 'LIST' }]
                }
            }),
            deleteAssignment: builder.mutation({
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
                invalidatesTags: (result,error,assignment) => {
                    return [{ type: 'Assignment', id: assignment.assignmentId }]
                }
                
            })
        }
    }
})

export const { useFetchAssignmentsQuery, useFetchAssignmentByIdQuery, useCreateAssignmentMutation, useEditAssignmentMutation, useDeleteAssignmentMutation } = assignmentsApi;
export { assignmentsApi };
