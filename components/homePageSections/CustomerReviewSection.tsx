"use client"

import { useRef } from "react"
import ReviewCard from "@/components/ReviewCard"
import reviews from "@/data/reviewData.json"
import type { Review } from "@/type/product"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function CustomerReviewSection() {
    const sliderRef = useRef<HTMLDivElement | null>(null)

    const scroll = (direction: "left" | "right") => {

        if (!sliderRef.current) return

        const scrollAmount = 360 + 24 // card width + gap
        sliderRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        })
    }

    return (
        <section className="py-20 px-10">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl lg:text-5xl font-bold">
                    OUR HAPPY CUSTOMERS
                </h2>

                <div className="flex gap-3">
                    <button
                        onClick={() => scroll("left")}
                        aria-label="Scroll left"
                        className="p-2 rounded-full border hover:bg-black hover:text-white transition"
                    >
                        <ArrowLeft />
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        aria-label="Scroll right"
                        className="p-2 rounded-full border hover:bg-black hover:text-white transition"
                    >
                        <ArrowRight />
                    </button>
                </div>
            </div>

            <div ref={sliderRef} className="px-10 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
                {
                    reviews.map((review: Review, index: number) => (
                        <ReviewCard
                            key={index}
                            rate={review.rate}
                            name={review.name}
                            reviewDetails={review.reviewDetails}
                        />
                    ))
                }
            </div>
        </section>
    )
}
