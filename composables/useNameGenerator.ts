export const useNameGenerator = async () => {
    const { data } = await useFetch<{ data: { value: string }}>('/api/name-generator')
    let jsonNames = [];
    if (typeof data.value === "string") {
        jsonNames = data ? JSON.parse(data.value) : []
    } else {
        jsonNames = [{ name_part: 'John', word_part: 'Doe'}]
    }

    return { firstName: jsonNames[0].name_part, lastName: jsonNames[0].word_part }
}