export const useListArticles = async (limit: number = 20) => {
    return useAsyncData('liste', () => queryContent('/blog').where({published: {$lt: new Date()}}).limit(limit).find());
}
