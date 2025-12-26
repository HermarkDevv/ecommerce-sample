"use client"

import { useState } from 'react'

export default function SizeSelector() {
    const sizes = ["Small", "Medium", "Large", "X-Large"]
    const [selectedSize, setSelectedSize] = useState(sizes[0])

    return (
        <div>
            <p className="text-xl font-medium mb-6">Choose Size</p>
            <div className="flex gap-3 flex-wrap">
                {sizes.map((size) => (
                    <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-4 text-xl rounded-full bg-blue-100 cursor-pointer hover:bg-black hover:text-white transition
                            ${selectedSize === size
                                ? "ring-2 ring-black scale-110"
                                : "hover:ring-2 hover:ring-gray-300"
                            }`}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    )
}
