const Article = async ({ params }: { params: Promise<{ articleId: string }> }) => {
    const { articleId } = await params
    return <div>My article: {articleId}</div>
}

export default Article
