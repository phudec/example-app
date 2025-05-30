import { ChangeEvent } from 'react'
import { CreateArticleForm, useCreateArticleProps } from '../types'
import { useCreateArticleForm } from './useCreateArticleForm'
import { usePostImagesMutation } from '@/redux/api/image/imageApi'
import { useCreateArticleMutation } from '@/redux/api/article/articleApi'

export const useCreateArticle = (): useCreateArticleProps => {
    const formProps = useCreateArticleForm()

    const [mutateImage] = usePostImagesMutation()
    const [mutateArticle] = useCreateArticleMutation()

    const image = formProps.watch('image')

    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()

        if (!event.target.files) return
        const image = event.target.files[0]

        formProps.setValue('image', image)
    }

    const onSubmit = async ({ image, ...rest }: CreateArticleForm) => {
        let uploadedImageArr

        if (image) {
            const blobImage = new Blob([image], { type: image.type })
            uploadedImageArr = await mutateImage({ image: [blobImage] }).unwrap()
        }

        const uploadedImage = uploadedImageArr?.[0]

        await mutateArticle({ ...rest, ...(uploadedImage && { imageId: uploadedImage.imageId }) })

        formProps.reset()
    }

    return { formProps, onSubmit, image, handleFileUpload }
}
