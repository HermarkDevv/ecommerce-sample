import products from '@/data/product.json'
import { slugify } from "@/lib/slugify"
import CollectionLayout from "@/app/collection/[collectionId]/CollectionLayout"
import SpecialCollectionLayout from "@/app/collection/[collectionId]/SpecialCollectionLayout"
import { notFound } from "next/navigation"

type Props = {
    params: Promise<{ collectionId: string }>
}

export default async function CollectionPage({ params }: Props) {
    const { collectionId } = await params
    const matchedProducts = products.filter(product =>
        product.collection.some(
            col => slugify(col) === collectionId
        )
    )

    if (matchedProducts.length === 0) {
        notFound()
    }

    /** UI DECISION */
    if (collectionId === "new-arrivals" || collectionId === "top-selling") {
        return <SpecialCollectionLayout products={matchedProducts} collectionTitle={collectionId} />
    }

    return <CollectionLayout products={matchedProducts} />
}
