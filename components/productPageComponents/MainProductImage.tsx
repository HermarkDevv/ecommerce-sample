import Image from "next/image"

type Props = {
    imageUrls: string[],
    title: string
}

export default function MainProductImage({ imageUrls, title }: Props) {
    return (
        <div className="flex justify-center items-center">
            <div className="max-h-[720] max-w-[720] rounded-4xl overflow-hidden">
                <Image
                    src={imageUrls[0]}
                    alt={title}
                    className="object-center rounded-4xl"
                    width={720}
                    height={720}
                />
            </div>
        </div>
    )
}
