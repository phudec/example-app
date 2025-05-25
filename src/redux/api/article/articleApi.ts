import { ArticleDetail } from '@/api/models'
import { api } from '../api'

export const articleApi = api.injectEndpoints({
    endpoints: (build) => ({
        createArticle: build.mutation<ArticleDetail, ArticleDetail>({
            query: (data) => ({ url: `/articles`, method: 'POST', data }),
        }),
        updateArticle: build.mutation<ArticleDetail, { data: ArticleDetail; articleId: string }>({
            query: ({ articleId, data }) => ({ url: `/articles/${articleId}`, method: 'PATCH', data }),
        }),
        deleteArticle: build.mutation<ArticleDetail, string>({
            query: (articleId) => ({ url: `/articles/${articleId}`, method: 'DELETE' }),
        }),
    }),
    overrideExisting: false,
})

export const { useCreateArticleMutation, useDeleteArticleMutation, useUpdateArticleMutation } = articleApi
