import type { Product } from "@/type/product"

export function searchProducts(
    products: Product[],
    query: string
) {
    const q = query.toLowerCase().trim()

    if (!q) return []

    return products.filter((product) =>
        product.title.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.tags.some((tag) => tag.toLowerCase().includes(q))
    )
}
