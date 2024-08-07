export const useListTestimonials = async (limit: number = 20) => {
    return useAsyncData('liste-testimonials', () => queryContent('/testimonials').limit(limit).find());
}
