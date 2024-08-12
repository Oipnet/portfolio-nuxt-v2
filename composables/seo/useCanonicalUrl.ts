export const useCanonicalUrl = (path: string) => {
    const url = useRequestURL()

    const baseUrl = `${url.protocol}//${url.host}`

    return `${baseUrl}${path}`
}