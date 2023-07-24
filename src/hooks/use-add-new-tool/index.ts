export function useAddNewTool() {
    function sanitizeValue(title: string) {
        return title.trim()
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