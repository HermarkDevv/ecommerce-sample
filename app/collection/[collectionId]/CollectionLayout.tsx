import ProductCard from "@/components/ProductCard"
import type { Product } from "@/type/product"

type Props = {
    products: Product[]
}

export default function CollectionLayout({ products }: Props) {
    return (
        <section className="bg-zinc-50">
            {/* <aside className="filters">
              <Filters />
          </aside> */}

            <main>
                <div className="grid shop-grid">
                    {products.map(product => (
                        <ProductCard key={product.id} cloth={product} />
                    ))}
                </div>
            </main>
        </section>
    )
}
