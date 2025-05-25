'use client'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const InitSession = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: 'INIT_SESSION' })
    })

    return null
}
