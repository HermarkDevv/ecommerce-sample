export function toTitleCase(slug: string) {
    return slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, char => char.toUpperCase())
}
