import type { Pagination } from './pagination'
import type { Article } from './article'

export type ArticleList = {
    pagination?: Pagination
    items?: Article[]
}
