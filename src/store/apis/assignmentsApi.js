import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



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
                }
            })
        }
    }
})

export const { useFetchAssignmentsQuery } = assignmentsApi;
export { assignmentsApi };
