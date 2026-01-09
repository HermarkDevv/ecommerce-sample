type Props = {
    value: string
    onChange: (size: string) => void
}

export default function SizeSelector({ value, onChange }: Props) {
    const sizes = ["Small", "Medium", "Large", "X-Large"]

    return (
        <div>
            <p className="text-xl font-medium mb-4">Choose Size</p>
            <div className="flex gap-3 flex-wrap">
                {sizes.map((size) => (
                    <button
                        key={size}
                        onClick={() => onChange(size)}
                        className={`px-3 py-1 text-xl rounded-full bg-blue-100 cursor-pointer hover:bg-black hover:text-white transition
                            ${value === size
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
