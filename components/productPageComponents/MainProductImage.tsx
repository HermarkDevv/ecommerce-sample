import Image from "next/image"

type Props = {
    imageUrls: string[],
    title: string
}

export default function MainProductImage({ imageUrls, title }: Props) {
    return (
        <div className="flex justify-center items-center">
            <Image
                src={imageUrls[0]}
                alt={title}
                className="object-contain rounded-4xl"
                width={720}
                height={720}
            />
        </div>
    )
}
