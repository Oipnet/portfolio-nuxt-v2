export const useListArticles = async (limit: number = 20) => {
    // Les brouillons (date de publication future) ne sont visibles qu'en développement
    const where = import.meta.dev ? {} : {published: {$lt: new Date()}};

    // La clé dépend de la limite : le footer (3) et la page blog (9) ne doivent pas partager le même cache
    return useAsyncData(`liste-blog-${limit}`, () => queryContent('/blog').where(where).sort({published: -1}).limit(limit).find());
}
