import Image from "next/image"

const DesignerImages = [
    { src: "/images/designersLogo/Calv.png", alt: "Calvin Klein", width: 200, height: 30 },
    { src: "/images/designersLogo/Guc.png", alt: "Gucci", width: 200, height: 30 },
    { src: "/images/designersLogo/Prad.png", alt: "Prada", width: 200, height: 30 },
    { src: "/images/designersLogo/Ver.png", alt: "Versace", width: 200, height: 30 },
    { src: "/images/designersLogo/Zara.png", alt: "Zara", width: 100, height: 30 },
]

export default function DesignersLogoSection() {
    return (
        <div className="flex flex-wrap justify-between gap-6 bg-black px-20 py-5">
            {DesignerImages.map(({ src, alt, width, height }) => (
                <div key={alt} className={`flex items-center justify-center w-24 h-6 md:w-auto md:h-auto ${alt === "Zara" ? "scale-65 md:scale-100" : ""}`}>
                    <Image key={alt} src={src} alt={alt} width={width} height={height} />
                </div>
            ))}
        </div>
    )
}
