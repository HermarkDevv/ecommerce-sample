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
        <section className="bg-zinc-50 mx-auto px-4 pb-20 pt-10 sm:px-6 lg:px-30">
            <h1 className="text-3xl font-bold mb-8">
                Search results for “{query}”
            </h1>

            {results.length === 0 ? (
                <p className="text-muted-foreground">
                    No products found.
                </p>
            ) : (
                <div className="grid grid-cols-2 gap-4 sm:gap-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {results.map((product) => (
                        <ProductCard key={product.id} cloth={product} className="w-full" />
                    ))}
                </div>
            )}
        </section>
    )
}
