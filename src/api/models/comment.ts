export type Comment = {
    readonly commentId?: string
    articleId: string
    author: string
    content: string
    readonly postedAt?: string
    readonly score?: number
}
