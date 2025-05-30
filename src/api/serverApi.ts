import { AxiosRequestConfig } from 'axios'
import axiosInstance from './axiosInstance'
import { ArticleDetail, ArticleList, ListArticlesParams } from './models'

export const getArticlesServer = async (params?: ListArticlesParams, options?: AxiosRequestConfig): Promise<ArticleList> => {
    return await axiosInstance.get(`/articles`, {
        ...options,
        params: { ...params, ...options?.params },
    })
}

export const getArticleServer = async (articleId: string, options?: AxiosRequestConfig): Promise<ArticleDetail> => {
    return await axiosInstance.get(`/articles/${articleId}`, options)
}

export const getImagesServer = async (imageId: string, options?: AxiosRequestConfig): Promise<Blob> => {
    return await axiosInstance.get(`/images/${imageId}`, {
        ...options,
        responseType: 'blob',
    })
}
