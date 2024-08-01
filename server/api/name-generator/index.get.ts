export default defineEventHandler(async (event) => {
    return await $fetch('https://www.lorraine-ipsum.fr/frontend/ajax_get_results?random=1721852057097', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json',
        }
    }).catch((error) => {
        return error
    });
});