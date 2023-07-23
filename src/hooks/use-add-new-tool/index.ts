export function useAddNewTool() {
    function sanitizeValue(title: string) {
        return title.trim()
    }

    function formatToolLink(link: string) {
        return `https://${link.trim()}`
    }

    function formatTags() { return }

    return {
        sanitizeValue,
        formatToolLink,
        formatTags,
    }
}