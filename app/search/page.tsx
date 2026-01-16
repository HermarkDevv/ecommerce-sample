import products from "@/data/product.json"
import { searchProducts } from "@/lib/search"
import ProductCard from "@/components/ProductCard"

type Props = {
    searchParams: Promise<{ q?: string }>
}

export default async function SearchPage({ searchParams }: Props) {
    const { q } = await searchParams
    const query = q?.toLowerCase() || ""

    const results = searchProducts(products, query)

    return (
        <section className="max-w-7xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold mb-8">
                Search results for “{query}”
            </h1>

            {results.length === 0 ? (
                <p className="text-muted-foreground">
                    No products found.
                </p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {results.map((product) => (
                        <ProductCard key={product.id} cloth={product} />
                    ))}
                </div>
            )}
        </section>
    )
}
