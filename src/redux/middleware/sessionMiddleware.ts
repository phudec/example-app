import { getToken } from '@/utils/globalUtils'
import { Middleware } from '@reduxjs/toolkit'
import { loadToken } from '../slices/authSlice'

export const sessionMiddleware: Middleware = (store) => (next) => (action) => {
    if (typeof window !== 'undefined' && (action as { type: string }).type === 'INIT_SESSION') {
        const token = getToken()

        if (token) {
            store.dispatch(loadToken(token))
        }
    }

    return next(action)
}
