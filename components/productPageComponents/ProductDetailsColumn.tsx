import Rating from "@/components/Rating"
import ColorSelector from "@/components/ColorSelector"
import SizeSelector from "@/components/SizeSelector"
import { ColorOption } from "@/type/product"

type Props = {
    Title: string,
    RatingFigure: number,
    RatingCount?: number,
    Price: number,
    Description: string,
    colorOptions: ColorOption[]
}

export default function ProductDetailsColumn({ Title, RatingFigure, RatingCount, Price, Description, colorOptions }: Props) {
    return (
        <div className="flex flex-col gap-6">

            <h1 className="text-4xl font-bold">
                {Title}
            </h1>

            <Rating rate={RatingFigure} count={RatingCount} />

            <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">${Price}</span>

            </div>

            <p className="text-muted-foreground leading-relaxed">
                {Description}
            </p>

            <Divider />

            {/* Colors */}
            <ColorSelector colorOptions={colorOptions} />

            <Divider />

            {/* Sizes */}
            <SizeSelector />

            <Divider />

            {/* Quantity + Add to cart */}
            <div className="flex gap-4">
                <QuantitySelector />
                <button className="flex-1 bg-black text-white rounded-full py-4 font-semibold">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

const Divider = () => (
    <div className="h-px bg-border my-2" />
)


function QuantitySelector() {
    return (
        <div className="flex items-center gap-6 bg-blue-100 rounded-full px-6">
            <button className="text-xl">−</button>
            <span className="font-medium">1</span>
            <button className="text-xl">+</button>
        </div>
    )
}
