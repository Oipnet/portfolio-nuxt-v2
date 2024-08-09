export const useListServices = async (limit: number = 20) => {
    return useAsyncData('liste-services', () => queryContent('/services').limit(limit).find());
}
