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
            })
        }
    }
});

export const { useGetUserQuery } = usersApi;
export { usersApi };