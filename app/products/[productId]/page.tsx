import MainProductImage from '@/components/productPageComponents/MainProductImage'
import ProductDetailsColumn from '@/components/productPageComponents/ProductDetailsColumn'
import ThumbnailColumn from '@/components/productPageComponents/ThumbnailColumn'
import product from '@/data/product.json'

type Props = {
    params: Promise<{ productId: string }>
}

export default async function page({ params }: Props) {

    const { productId } = await params

    const prod = product.find((p) => p.id.toString() === productId)

    if (!prod) {
        return <div>Product not found</div>
    }

    return (
        <section className="bg-zinc-50 mx-auto px-10 py-10">

            <p className="text-sm text-muted-foreground mb-6">
                Home <span className="mx-2">›</span> Details
            </p>

            <div className="flex flex-col lg:flex-row justify-between gap-10">

                {/* Desktop thumbnails */}
                <ThumbnailColumn imageUrls={prod.images} title={prod.title} className="hidden lg:flex" />

                {/* Image + mobile thumbnails wrapper */}
                <div className="flex flex-col items-center gap-4">
                    <MainProductImage imageUrls={prod.images} title={prod.title} />

                    {/* Mobile thumbnails */}
                    <ThumbnailColumn imageUrls={prod.images} title={prod.title} className="flex flex-row lg:hidden" />
                </div>

                {/* Product details */}
                <ProductDetailsColumn Title={prod.title} RatingFigure={prod.rating.rate} RatingCount={prod.rating.count} Price={prod.price} Description={prod.description} colorOptions={prod.colorOptions} />
            </div>

        </section>
    )
}
