import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
    reducerPath: "users",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5002",
        credentials: 'include',
    }),
    endpoints(builder) {
        return {
            getUser: builder.query({
                query: () => {
                    return {
                        url: "/user/get_current_user",
                        credentials: 'include',
                        method: "GET"
                    }
                }
            }),
            createClassroom: builder.mutation({
                invalidatesTags: ["TeacherClassrooms"],
                query: (data) => {
                    return {
                        url: "user/create_teacher_classrooms",
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
                invalidatesTags: ["TeacherClassrooms"],
                query: (data) => {
                    return {
                        url: "/user/delete_teacher_classroom",
                        method: "DELETE",
                        params: {
                            userId: data.userId,
                            classId: data.classId,
                        }
                    }
                }
            }),
            fetchTeacherClassrooms: builder.query({
                providesTags: ["TeacherClassrooms"],
                query: (userId) => {
                    return {
                        url: `/user/get_teacher_classrooms`,
                        params: {
                            userId:userId
                        },
                        method: "GET",
                    }
                }
            })
        }
    }
});

export const { useGetUserQuery, useCreateClassroomMutation, useDeleteClassroomMutation, useFetchTeacherClassroomsQuery } = usersApi;
export { usersApi };