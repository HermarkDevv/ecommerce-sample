"use client"

import { useState } from "react"
import Rating from "@/components/Rating"
import ColorSelector from "@/components/ColorSelector"
import SizeSelector from "@/components/SizeSelector"
import QuantitySelector from "@/components/productPageComponents/QuantitySelector"
import AddToCartButton from "@/components/productPageComponents/AddToCart"
import type { Product } from "@/type/product"

type Props = {
    prod: Product,
}

export default function ProductDetailsColumn({ prod }: Props) {

    const [selectedColor, setSelectedColor] = useState(prod.colorOptions[0].name)
    const [selectedSize, setSelectedSize] = useState("Small")
    const [quantity, setQuantity] = useState(1)

    return (
        <div className="flex flex-col gap-3">

            <h1 className="text-4xl font-bold">
                {prod.title}
            </h1>

            <Rating rate={prod.rating.rate} count={prod.rating.count} />

            <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">${prod.price}</span>

            </div>

            <p className="text-muted-foreground leading-relaxed">
                {prod.description}
            </p>

            <Divider />

            {/* Colors */}
            <ColorSelector colorOptions={prod.colorOptions}
                value={selectedColor}
                onChange={setSelectedColor} />

            <Divider />

            {/* Sizes */}
            <SizeSelector value={selectedSize} onChange={setSelectedSize} />

            <Divider />

            {/* Quantity + Add to cart */}
            <div className="flex gap-4">
                <QuantitySelector quantity={quantity} onChange={setQuantity} />
                <AddToCartButton prod={prod} selectedSize={selectedSize} selectedColor={selectedColor} quantity={quantity} />
            </div>
        </div>
    )
}

const Divider = () => (
    <div className="h-px bg-border my-1" />
)
