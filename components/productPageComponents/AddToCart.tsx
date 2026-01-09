"use client"

import { useCartStore } from "@/store/cartStore"
import type { Product } from "@/type/product"


export default function AddToCart({ prod, selectedSize, selectedColor, quantity }: { prod: Product, selectedSize: string, selectedColor: string, quantity: number }) {

    const addToCart = useCartStore((state) => state.addItem)

    return (
        < button
            onClick={() =>
                addToCart({
                    id: prod.id.toString(),
                    title: prod.title,
                    price: prod.price,
                    image: prod.images[0],
                    size: selectedSize,
                    color: selectedColor,
                    quantity,
                })
            }
            className="flex-1 bg-black text-white rounded-full py-4 font-semibold cursor-pointer"
        >
            Add to Cart
        </button>
    )
}

