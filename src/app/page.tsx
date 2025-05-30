import { getArticlesServer } from '@/api/serverApi'
import { ArticleItem } from '@/components/ArticleItem/ArticleItem'
import { Stack, Typography } from '@mui/material'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Articles',
}

const Articles = async () => {
    // BE needs extensions with content and comments
    const articles = await getArticlesServer({ offset: 0, limit: 10 })

    return (
        <Stack gap={3}>
            <Typography variant='h3'>Recent articles</Typography>
            <Stack gap={2}>{articles.items?.map((item) => <ArticleItem article={item} key={item.articleId} />)}</Stack>
        </Stack>
    )
}

export default Articles
