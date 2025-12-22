import { Star } from "lucide-react"

type RatingProps = {
    rate: number
    count?: number
}

export default function Rating({ rate, count }: RatingProps) {
    return (
        <div className="flex items-center gap-1 text-sm">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={`h-4 w-4 ${rate >= star
                        ? "fill-yellow-400 text-yellow-400"
                        : rate >= star - 0.5
                            ? "fill-yellow-400/50 text-yellow-400"
                            : "text-gray-300"
                        }`}
                />
            ))}

            <span className="ml-1 text-gray-600">
                {rate.toFixed(1)}
                {count && ` (${count})`}
            </span>
        </div>
    )
}
