function cleanString(value: string) {
    return value.trim()
}

function formatToUrl(url: string) {
    return `https://${url.trim()}`
}

function formatToArray(values: string) {
    const valuesToArray = cleanString(values).split(' ')

    return valuesToArray
}

export {
    cleanString,
    formatToUrl,
    formatToArray,
}