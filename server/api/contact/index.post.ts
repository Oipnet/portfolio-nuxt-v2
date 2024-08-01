export default defineEventHandler(async (event) => {
    const { apiUrl } = useRuntimeConfig(event)
    const body = await readBody(event)

    await $fetch(`${ apiUrl }/contacts`, {
        method: 'POST',
        headers: {
            'Accept': 'application/ld+json',
            'content-type': 'application/ld+json',
        },
        body,
    }).catch((error) => {
        return error
    });
})
