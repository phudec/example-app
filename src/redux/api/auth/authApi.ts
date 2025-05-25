import { AccessToken, PostLoginBody } from '@/api/models'
import { api } from '../api'

export const authApi = api.injectEndpoints({
    endpoints: (build) => ({
        postLogin: build.mutation<AccessToken, PostLoginBody>({
            query: (data) => ({ url: `/login`, method: 'POST', data }),
        }),
    }),
    overrideExisting: false,
})

export const { usePostLoginMutation } = authApi
