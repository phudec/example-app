import { useCreateArticleProps } from '../types'
import { useCreateArticleForm } from './useCreateArticleForm'

export const useCreateArticle = (): useCreateArticleProps => {
    const formProps = useCreateArticleForm()

    const onSubmit = async () => {}

    return { formProps, onSubmit }
}
