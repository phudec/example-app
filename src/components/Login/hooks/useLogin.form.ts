import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginForm, useLoginFormProps } from '../types'
import { useForm } from 'react-hook-form'

const validationSchema = z.object({
    username: z.string().min(1),
    password: z.string().min(1),
})

export const useLoginForm = (): useLoginFormProps => {
    return useForm<LoginForm>({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        resolver: zodResolver(validationSchema),
        defaultValues: { username: '', password: '' },
    })
}
