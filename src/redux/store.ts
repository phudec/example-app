import { configureStore } from '@reduxjs/toolkit'
import { api } from './api/api'
import { setupListeners } from '@reduxjs/toolkit/query'
import authReducer from './slices/authSlice'
import { sessionMiddleware } from './middleware/sessionMiddleware'

export const makeStore = () => {
    const store = configureStore({
        reducer: {
            auth: authReducer,
            [api.reducerPath]: api.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware).concat(sessionMiddleware),
    })

    if (typeof window !== 'undefined') {
        setupListeners(store.dispatch)
    }

    return store
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
