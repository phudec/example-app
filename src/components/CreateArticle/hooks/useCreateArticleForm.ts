import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { CreateArticleForm, useCreateArticleFormProps } from '../types'

const validationSchema = z.object({
    title: z.string().min(1),
    content: z.string().min(1),
    image: z.instanceof(File).nullable(),
})

export const useCreateArticleForm = (): useCreateArticleFormProps => {
    return useForm<CreateArticleForm>({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        resolver: zodResolver(validationSchema),
        defaultValues: { title: '', content: '', image: null },
    })
}
