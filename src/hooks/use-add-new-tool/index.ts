export function useAddNewTool() {
    function sanitizeValue(value: string) {
        return value.trim()
    }

    function formatToolUrl(url: string) {
        return `https://${url.trim()}`
    }

    function formatTags() { return }

    return {
        sanitizeValue,
        formatToolUrl,
        formatTags,
    }
}