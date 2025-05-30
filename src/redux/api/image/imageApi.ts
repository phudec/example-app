import { ImageInfo, PostImagesBody } from '@/api/models'
import { api } from '../api'
import { AxiosResponse } from 'axios'

export const imageApi = api.injectEndpoints({
    endpoints: (build) => ({
        postImages: build.mutation<ImageInfo[], PostImagesBody>({
            query: (data) => {
                const formData = new FormData()

                if (data.image !== undefined) {
                    data.image.forEach((value) => formData.append(`image`, value))
                }

                return {
                    url: `/images`,
                    method: 'POST',
                    data: formData,
                    headers: { 'Content-Type': 'multipart/form-data' },
                }
            },
        }),
        getImages: build.query<AxiosResponse<void>, string>({
            query: (imageId) => ({ url: `/images/${imageId}`, method: 'GET' }),
        }),
        deleteImages: build.mutation<AxiosResponse<void>, string>({
            query: (imageId) => ({ url: `/images/${imageId}`, method: 'DELETE' }),
        }),
    }),
    overrideExisting: false,
})

export const { useDeleteImagesMutation, useGetImagesQuery, usePostImagesMutation } = imageApi
