type Props = {
    quantity: number
    onChange: (qty: number) => void
}

export default function QuantitySelector({ quantity, onChange }: Props) {
    const min = 1
    const max = 100

    return (
        <div className="flex items-center gap-6 bg-blue-100 rounded-full px-3 py-2">
            <button
                onClick={() => onChange(Math.max(1, quantity - 1))}
                aria-label="Decrease quantity"
                disabled={quantity === min}
                className="w-8 h-8 flex items-center justify-center text-xl font-medium cursor-pointer disabled:opacity-40"
            >
                −
            </button>

            <span className="w-8 text-center font-medium">
                {quantity}
            </span>

            <button
                onClick={() => onChange(quantity + 1)}
                aria-label="Increase quantity"
                disabled={quantity === max}
                className="w-8 h-8 flex items-center justify-center text-xl font-medium cursor-pointer disabled:opacity-40"
            >
                +
            </button>
        </div>
    )
}
