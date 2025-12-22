import Image from "next/image"
import clothDetails from "@/data/product.json"
import Rating from "@/components/Rating"
import ButtonWithText from "@/components/ButtonWithText"
import type { Product } from "@/type/product"

type CollectionProps = {
    Title: string;
}

function ProductCard({ cloth }: { cloth: Product }) {
    return (
        <div key={cloth.id} className="shrink-0 snap-center w-50 md:w-60 lg:w-full ">
            <Image
                src={cloth.image}
                alt={cloth.title}
                width={300}
                height={300}
                className="w-full h-72 object-cover rounded-3xl"
            />
            <h3 className="text-base lg:text-lg font-semibold line-clamp-1 min-h-5 w-50 lg:w-80">{cloth.title}</h3>
            <Rating rate={cloth.rating.rate} count={cloth.rating.count} />
            <p className="text-gray-900 font-bold text-lg">${cloth.price}</p>
        </div>
    )
}

export default function CollectionSection({ Title }: CollectionProps) {
    const filteredProducts = clothDetails.filter((product) =>
        product.collection.includes(Title)
    )
    return (
        <section className="flex flex-col mt-18 mb-12">
            <h2 className="text-3xl lg:text-6xl font-bold lg:font-extrabold px-4 pb-14 uppercase flex justify-center items-center tracking-wide">{Title}</h2>

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
