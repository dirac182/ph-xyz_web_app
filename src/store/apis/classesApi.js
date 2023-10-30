import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const classesApi = createApi({
    reducerPath: "classes",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5003",
        credentials: 'include',
    }),
    endpoints(builder) {
        return {
            createClassroom: builder.mutation({
                invalidatesTags: ["Classrooms"],
                query: (data) => {
                    return {
                        url: "/classes/create_teacher_classroom",
                        method: "POST",
                        params: {
                            userId: data.userId,
                        },
                        body: {
                            className: data.className
                        }
                    }
                }
            }),
            deleteClassroom: builder.mutation({
                invalidatesTags: ["Classrooms"],
                query: (data) => {
                    return {
                        url: "/classes/delete_teacher_classroom",
                        method: "DELETE",
                        params: {
                            userId: data.userId,
                            classId: data.classId,
                        }
                    }
                }
            }),
            fetchTeacherClassrooms: builder.query({
                providesTags: ["Classrooms"],
                query: (userId) => {
                    return {
                        url: `/classes/get_teacher_classrooms`,
                        method: "GET",
                        params: {
                            userId:userId
                        }
                    }
                }
            }),
            updateClassroomAssignment: builder.mutation({
                invalidatesTags: ["Classrooms"],
                query: (data) => {
                    return {
                        url: "/classes/update_classroom_assignment",
                        method: "POST",
                        params: {
                            userId: data.userId,
                        },
                        body: {
                            assignmentId: data.assignmentId,
                            assignedClasses: data.assignedClasses
                        }
                    }
                }
            })
        }
    }
});

export const { useUpdateClassroomAssignmentMutation, useCreateClassroomMutation, useDeleteClassroomMutation, useFetchTeacherClassroomsQuery } = classesApi;
export { classesApi };