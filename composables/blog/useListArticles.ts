export const useListArticles = async (limit: number = 20) => {
    const route = useRoute();

    const where = route.query.dev_mode === 1 ? {} : {published: {$lt: new Date()}};

    return useAsyncData('liste', () => queryContent('/blog').where(where).limit(limit).find());
}
