export const useShowArticle = async (slug: string) => {
    return useAsyncData('article', queryContent(`/blog/${slug}`).findOne);
}
