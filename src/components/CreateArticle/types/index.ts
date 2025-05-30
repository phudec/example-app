import { ChangeEvent } from 'react'
import { UseFormReturn } from 'react-hook-form'

export type CreateArticleForm = {
    title: string
    content: string
    image: File | null
}

export type useCreateArticleFormProps = UseFormReturn<CreateArticleForm>

export type useCreateArticleProps = {
    formProps: useCreateArticleFormProps
    onSubmit: (data: CreateArticleForm) => Promise<void>
    image: CreateArticleForm['image']
    handleFileUpload: (event: ChangeEvent<HTMLInputElement>) => void
}
