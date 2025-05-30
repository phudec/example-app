import { getToken } from '@/utils/globalUtils'
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://fullstack.exercise.applifting.cz',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': '5bca7429-fc0e-4494-a363-b36ccbb9b798',
    },
})

axiosInstance.interceptors.request.use(
    (config) => {
        let token

        // Run only on client
        if (typeof window !== 'undefined') {
            token = getToken()
        }

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default axiosInstance
