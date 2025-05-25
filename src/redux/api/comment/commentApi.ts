import { Comment } from '@/api/models'
import { api } from '../api'
import { AxiosResponse } from 'axios'

export const commentApi = api.injectEndpoints({
    endpoints: (build) => ({
        postComments: build.mutation<Comment, Comment>({
            query: (data) => {
                return { url: `/comments`, method: 'POST', data }
            },
        }),
        postCommentsIdVoteUp: build.mutation<Comment, string>({
            query: (commentId) => ({ url: `/comments/${commentId}/vote/up`, method: 'POST' }),
        }),
        postCommentsIdVoteDown: build.mutation<AxiosResponse<void>, string>({
            query: (commentId) => ({ url: `/comments/${commentId}/vote/down`, method: 'POST' }),
        }),
    }),
    overrideExisting: false,
})

export const { usePostCommentsIdVoteDownMutation, usePostCommentsIdVoteUpMutation, usePostCommentsMutation } = commentApi
