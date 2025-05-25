import { usePostLoginMutation } from '@/redux/api/auth/authApi'
import { LoginForm, useLoginProps } from '../types'
import { useLoginForm } from './useLogin.form'
import { useRouter } from 'next/navigation'

export const useLogin = (): useLoginProps => {
    const router = useRouter()
    const [mutate] = usePostLoginMutation()

    const formProps = useLoginForm()

    const onSubmit = async (data: LoginForm) => {
        await mutate(data)
            .unwrap()
            .then(() => {
                router.push('/')
            })
    }

    return { formProps, onSubmit }
}
