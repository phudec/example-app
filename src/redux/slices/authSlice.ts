import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authApi } from '../api/auth/authApi'
import { removeToken, setToken } from '@/utils/globalUtils'

type AuthState = {
    isAuthenticated: boolean
    token?: string
}

const initialState: AuthState = {
    isAuthenticated: false,
    token: undefined,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logOut(state) {
            state.isAuthenticated = false
            state.token = undefined

            removeToken()
        },
        loadToken(state, action: PayloadAction<string>) {
            state.token = action.payload
            state.isAuthenticated = true
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(authApi.endpoints.postLogin.matchFulfilled, (state, { payload }) => {
            const token = payload.access_token ?? ''

            state.token = token
            state.isAuthenticated = true

            setToken(token)
        })
    },
})

export const { logOut, loadToken } = authSlice.actions
export default authSlice.reducer
