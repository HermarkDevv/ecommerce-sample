import Rating from "@/components/Rating"
import { BadgeCheck } from "lucide-react"

type ReviewCardProps = {
    rate: number,
    name: string,
    reviewDetails: string
}

export default function ReviewCard({ rate, name, reviewDetails }: ReviewCardProps) {
    return (
        <div className="py-10 px-10 rounded-4xl w-90 shrink-0 snap-start border border-muted-foreground">
            <div className="pb-5">
                <Rating rate={rate} />
            </div>
            <div>
                <p className="pb-2 font-semibold text-2xl">
                    {name}
                    <BadgeCheck className="inline-block ml-1 h-6 w-6 text-blue-500" />
                </p>
                <p className="text-muted-foreground leading-relaxed">{reviewDetails}</p>
            </div>
        </div>
    )
}
