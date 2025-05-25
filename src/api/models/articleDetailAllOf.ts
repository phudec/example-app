import type { Comment } from './comment'

export type ArticleDetailAllOf = {
    content?: string
    readonly comments?: readonly Comment[]
}
