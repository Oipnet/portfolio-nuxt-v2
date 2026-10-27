export default defineEventHandler(async (event) => {
    const { apiUrl } = useRuntimeConfig(event)
    const body = await readBody(event)

    try {
        await $fetch(`${ apiUrl }/contacts`, {
            method: 'POST',
            headers: {
                'Accept': 'application/ld+json',
                'content-type': 'application/ld+json',
            },
            body,
        })
    } catch (error) {
        // On remonte l'échec au formulaire au lieu de laisser croire que le message est parti
        console.error('Envoi du formulaire de contact impossible', error)
        throw createError({ statusCode: 502, statusMessage: 'Le message n\'a pas pu être transmis' })
    }

    return { ok: true }
})
