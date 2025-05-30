import { Article } from '@/api/models'
import { Box, Button, Link, Skeleton, Stack, Typography } from '@mui/material'

type ArticleItemProps = { article: Article }

export const ArticleItem = ({ article }: ArticleItemProps) => {
    return (
        <Stack key={article.articleId} height={244} direction={'row'} gap={2}>
            <Box>
                {/* {<Image alt={`image-${item.title}`} src={image?.data ? image.data : ''} />} */}
                <Skeleton variant='rectangular' width={272} height={244} animation={false} />
            </Box>
            <Stack gap={3}>
                <Typography variant='h5'>{article.title ?? ''}</Typography>
                <Stack direction={'row'} gap={2} divider={<span>&#8226;</span>}>
                    <Typography>John Doe</Typography>
                    <Typography>{new Date(article.createdAt ?? '').toLocaleDateString('en')}</Typography>
                </Stack>
                <Typography>Content place</Typography>
                <Stack direction='row' gap={2} alignItems={'center'}>
                    <Button LinkComponent={Link} href={`/article/${article.articleId ?? ''}`}>
                        Read whole article
                    </Button>
                    <Typography variant='body2'>0 Comments</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}
