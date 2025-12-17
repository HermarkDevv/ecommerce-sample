import ShopNowButton from '@/components/ShopNowButton'
import Image from 'next/image'
import React from 'react'

const stats = [
    { value: "200+", label: "International Brands" },
    { value: "2,000+", label: "High-Quality Products" },
    { value: "30,000+", label: "Happy Customers" },
]

export default function HeroSection() {
    return (
        <div className="flex flex-col lg:flex-row items-center bg-blue-100 mb-10">
            <div className="flex-1 mt-5 mb-5 ml-10">
                <h3 className="text-3xl lg:text-5xl max-w-2xl font-bold">FIND CLOTHES THAT MATCHES YOUR STYLE</h3>
                <p className="text-base lg:text-xl max-w-2xl text-muted-foreground py-6">Browse through our diverse range of meticulously crafted garments, designed to bring out
                    your individuality and cater to your sense of style.
                </p>
                <div className="flex flex-col items-center lg:items-start">
                    <ShopNowButton className="px-20 lg:px-8 lg:py-6" />
                </div>

                <div className="grid grid-cols-2 gap-y-8 gap-x-6 pt-6 place-items-center lg:place-items-start lg:grid-cols-[max-content_12px_max-content_12px_max-content] md:gap-x-4">
                    {stats.map((stat, index) => (
                        <React.Fragment key={stat.label}>
                            {/* Stat */}
                            <div className={`text-center lg:text-left
                                ${index === 2 ? "col-span-2 lg:col-span-1" : ""}`}>

                                <p className="text-2xl lg:text-3xl font-bold pb-3">
                                    {stat.value}
                                </p>
                                <p className="text-base lg:text-xl text-muted-foreground">
                                    {stat.label}
                                </p>

                            </div>

                            {/* Divider (desktop only) */}
                            {index < stats.length - 1 && (
                                <div className="hidden lg:block w-px h-16 bg-gray-300" />
                            )}
                        </React.Fragment>
                    ))}
                </div>

            </div>
            <div className='flex-1 flex justify-center'>
                <Image src="/images/ladyAndGuy.png" alt="Lady and Guy Model" width={750} height={500} className="max-w-full h-auto" />
            </div>
        </div>
    )
}
