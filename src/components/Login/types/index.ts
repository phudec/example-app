import { UseFormReturn } from 'react-hook-form'

export type LoginForm = {
    username: string
    password: string
}

export type useLoginFormProps = UseFormReturn<LoginForm>

export type useLoginProps = {
    formProps: useLoginFormProps
    onSubmit: (data: LoginForm) => Promise<void>
}
