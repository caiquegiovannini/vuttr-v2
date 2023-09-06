function sanitizeString(value: string) {
    return value.trim()
}

function formatToUrl(url: string) {
    return `https://${url.trim()}`
}

function formatToArray(values: string) {
    const valuesToArray = sanitizeString(values).split(' ')

    return valuesToArray
}

export {
    sanitizeString,
    formatToUrl,
    formatToArray,
}