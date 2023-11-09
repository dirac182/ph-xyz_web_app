import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
    reducerPath: "users",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://www.ph-zyx.com/",
        credentials: 'include',
    }),
    endpoints(builder) {
        return {
            getUser: builder.query({
                query: () => {
                    return {
                        url: "/user/get_current_user",
                        method: "GET"
                    }
                }
            }),
            initializeStudentAssignmentInfo: builder.mutation({
                invalidatesTags: ["AssignmentInfo"],
                query: (data) => {
                    return {
                        url: "/user/initialize_student_assignment_info",
                        method: "POST",
                        params: {
                            userId: data.userId,
                            assignmentId: data.assignmentId
                        },
                        body: {
                            assignmentInfo: data.assignmentInfo,
                        }
                    }
                }
            }),
            fetchStudentAssignmentInfo: builder.query({
                providesTags: ["AssignmentInfo"],
                
                query: (data) => {
                    return {
                        url: "/user/fetch_student_assignment_info",
                        method: "GET",
                        params: {
                            userId: data.userId,
                            assignmentId: data.assignmentId
                        },
                    }
                }
            }),
            updateStudentAssignmentInfo: builder.mutation({
                invalidatesTags: ["AssignmentInfo"],
                query: (data) => {
                    return {
                        url: "/user/update_student_assignment_info",
                        method: "POST",
                        params: {
                            userId: data.userId,
                            assignmentId: data.assignmentId
                        },
                        body: {
                            updatedAssignmentInfo: data.updatedAssignmentInfo,
                            updatedGrade: data.updatedGrade
                        }
                    }
                }
            }),
        }
    }
});

export const { useUpdateStudentAssignmentInfoMutation, useFetchStudentAssignmentInfoQuery, useInitializeStudentAssignmentInfoMutation, useGetUserQuery } = usersApi;
export { usersApi };