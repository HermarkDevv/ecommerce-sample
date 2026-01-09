import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/type/product"
import Rating from "@/components/Rating"

type Props = {
    cloth: Product
    className?: string
}

export default function ProductCard({ cloth, className }: Props) {
    return (
        <div key={cloth.id} className={`shrink-0 snap-center w-50 md:w-60 lg:w-full ${className}`}>
            <Link href={`/products/${cloth.id}`} >
                <Image
                    src={cloth.images[0]}
                    alt={cloth.title}
                    width={300}
                    height={300}
                    className="w-full h-72 object-cover rounded-3xl"
                />
                <h3 className="text-base lg:text-lg font-semibold line-clamp-1 min-h-5 w-50 lg:w-80">{cloth.title}</h3>
                <Rating rate={cloth.rating.rate} count={cloth.rating.count} />
                <p className="text-gray-900 font-bold text-lg">${cloth.price}</p>
            </Link>
        </div>
    )
}