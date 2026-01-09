import Image from "next/image"
import Link from "next/link"

import clothDetails from "@/data/product.json"
import Rating from "@/components/Rating"
import ButtonWithText from "@/components/ButtonWithText"
import type { Product } from "@/type/product"
import ProductCard from "@/components/ProductCard"

type CollectionProps = {
    Title: string;
}

export default function CollectionSection({ Title }: CollectionProps) {

    const filteredProducts = clothDetails.filter((product) =>
        product.collection.includes(Title)
    )

    return (
        <section className="flex flex-col mt-18 mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold lg:font-extrabold px-4 pb-14 uppercase flex justify-center items-center tracking-wide">{Title}</h2>

            {/* 🔹 MOBILE: horizontal scroll (all items) */}
            <div className="lg:hidden flex gap-6 pl-6 overflow-x-auto snap-x snap-mandatory no-scrollbar">
                {filteredProducts.map((cloth) => (
                    <ProductCard key={cloth.id} cloth={cloth} />
                ))}
            </div>

            {/* 🔹 DESKTOP: show ONLY 4 items */}
            <div className="hidden lg:grid grid-cols-4 gap-10 px-20">
                {filteredProducts.slice(0, 4).map((cloth) => (
                    <ProductCard key={cloth.id} cloth={cloth} />
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <ButtonWithText title="View All" className="bg-white text-black font-semibold border border-black px-18 hover:text-white" />
            </div>
        </section>
    )
}
