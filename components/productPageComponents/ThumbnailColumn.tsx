import Image from "next/image"

type Props = {
    imageUrls: string[],
    title: string,
    className?: string
}

export default function ThumbnailColumn({ imageUrls, title, className }: Props) {
    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            {imageUrls.map((url, i) => (
                <div
                    key={i}
                    className="border rounded-xl p-1 cursor-pointer hover:border-black w-[150] h-[150] lg:w-auto lg:h-auto overflow-hidden"
                >
                    <Image
                        src={url}
                        alt={`${title} thumbnail ${i + 1}`}
                        className="rounded-lg object-contain"
                        width={200}
                        height={200}
                    />
                </div>
            ))}
        </div>
    )
}
