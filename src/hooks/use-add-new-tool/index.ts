export function useAddNewTool() {
    function sanitizeValue(value: string) {
        return value.trim()
    }

    function formatToolUrl(url: string) {
        return `https://${url.trim()}`
    }

    function formatTags(tags: string) {
        const tagsArray = sanitizeValue(tags).split(' ')

        return tagsArray
    }

    return {
        sanitizeValue,
        formatToolUrl,
        formatTags,
    }
}