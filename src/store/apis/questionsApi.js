import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const questionsApi = createApi({
    reducerPath: "questions",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://www.ph-zyx.com",
    }),
    endpoints(builder) {
        return {
            fetchAllQuestionIDs: builder.query({
                query: () => {
                    return {
                        url: "/questions/get_all_question_ids",
                        method: "GET"
                    }
                }
            }),
            fetchQuestionByTopic: builder.mutation({
                query: (topic) => {
                    return {
                        url: "/questions/get_question_by_topic",
                        params: {
                            topicId: topic
                        },
                        method: "GET"
                    }
                }
            }),
            fetchQuestionSetByIds: builder.query({
                query: (Ids) => {
                    return {
                        url: "/questions/get_question_set_by_ids",
                        params: {
                            IdSet: Ids
                        },
                        method: "GET"
                    }
                }
            })
        }
    }
});

export const { useFetchQuestionSetByIdsQuery, useFetchAllQuestionIDsQuery, useFetchQuestionByTopicMutation } = questionsApi;
export { questionsApi };