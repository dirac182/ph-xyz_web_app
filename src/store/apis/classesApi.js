import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const classesApi = createApi({
    reducerPath: "classes",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://www.ph-zyx.com/",
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
            addStudentToClassroom: builder.mutation({
                invalidatesTags: ["Classrooms"],
                query: (data) => {
                    return {
                        url: "/classes/add_student_to_classroom",
                        method: "POST",
                        body: {
                            userId: data.userId,
                            classCode: data.classCode
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
            fetchStudentClassrooms: builder.query({
                providesTags: ["studentClassrooms"],
                invalidateTags: ['AssignmentInfo'],
                query: (classesArray) => {
                    return {
                        url: `/classes/get_student_classrooms`,
                        method: "GET",
                        params: {
                            classesArray
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
            }),
            checkJoinCode: builder.mutation({
                query: (userInput) => {
                    return {
                        url: "/classes/check_valid_join_code",
                        method: "POST",
                        body: {
                            userInput: userInput,
                        }
                    }
                }
            }),
            fetchClassById: builder.query({
                query: (classId) => {
                    return {
                        url: `/classes/get_class_by_id`,
                        method: "GET",
                        params: {
                            classId
                        }
                    }
                }
            }),
        }
    }
});

export const { useAddStudentToClassroomMutation, useFetchStudentClassroomsQuery, useFetchClassByIdQuery, useCheckJoinCodeMutation, useUpdateClassroomAssignmentMutation, useCreateClassroomMutation, useDeleteClassroomMutation, useFetchTeacherClassroomsQuery } = classesApi;
export { classesApi };