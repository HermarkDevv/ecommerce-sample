"use client"
import { useState } from "react"
import { type ColorOption } from "@/type/product"

type Prop = {
    colorOptions: ColorOption[]
}

export default function ColorSelector({ colorOptions }: Prop) {
    const [selectedColor, setSelectedColor] = useState(colorOptions[0].name)

    return (
        <div>
            <p className="text-xl font-medium mb-4">Select Colors</p>

            <div className="flex flex-row gap-6">
                {colorOptions.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => setSelectedColor(option.name)}
                        aria-label={`Select ${option.name} color`}
                        className={`w-8 h-8 rounded-full cursor-pointer transition-all border border-gray-300 ${option.tailwindClass} ring-offset-2
                                ${selectedColor === option.name
                                ? "ring-2 ring-blue-500 scale-110"
                                : "hover:ring-2 hover:ring-gray-300"
                            }`}
                    />
                ))}
            </div>

            <h3 className="text-sm font-medium text-gray-900 mt-3">
                Color: <span className="font-bold">{selectedColor}</span>
            </h3>
        </div>
    )
}
