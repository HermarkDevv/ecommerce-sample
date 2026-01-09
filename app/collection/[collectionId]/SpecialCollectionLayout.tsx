import ProductCard from "@/components/ProductCard"
import type { Product } from "@/type/product"
import Link from "next/link"
import { toTitleCase } from '@/lib/titleCase'

type Props = {
    products: Product[],
    collectionTitle: string
}

export default function SpecialCollectionLayout({ products, collectionTitle }: Props) {
    return (
        <section className="bg-zinc-50 mx-auto px-4 pb-20 pt-10 sm:px-6 lg:px-30">
            <p className="text-sm text-muted-foreground mb-6">
                <Link href="/">Home</Link> <span className="mx-2">›</span> <strong>{toTitleCase(collectionTitle)}</strong>
            </p>
            <div className="mb-10">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                    {toTitleCase(collectionTitle)}
                </h1>
                <p className="mt-2 text-sm text-gray-500">
                    {collectionTitle === "new-arrivals"
                        ? "Check out the latest products added to our collection."
                        : "Our best-selling pieces loved by customers."}
                </p>
            </div>

            {/* Grid */}
            <div
                className="grid grid-cols-2 gap-4 sm:gap-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
                {products.map(product => (
                    <ProductCard key={product.id} cloth={product} className="w-full" />
                ))}
            </div>
        </section>
    )
}
