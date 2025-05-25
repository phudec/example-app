import { UseFormReturn } from 'react-hook-form'

export type CreateArticleForm = {
    title: string
    content: string
}

export type useCreateArticleFormProps = UseFormReturn<CreateArticleForm>

export type useCreateArticleProps = {
    formProps: useCreateArticleFormProps
    onSubmit: (data: CreateArticleForm) => Promise<void>
}
