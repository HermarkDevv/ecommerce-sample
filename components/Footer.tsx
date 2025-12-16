import SocialMediaButton from "@/components/SocialMediaButton"
import Image from "next/image"
import {
    FaXTwitter,
    FaFacebook,
    FaInstagram,
    FaGithub,
} from "react-icons/fa6"


const socialLinks = [
    { icon: FaXTwitter, label: "X" },
    { icon: FaFacebook, label: "Facebook" },
    { icon: FaInstagram, label: "Instagram" },
    { icon: FaGithub, label: "GitHub" },
]

const footerLinks = [
    {
        title: "COMPANY",
        items: ["About", "Features", "Works", "Career"],
    },
    {
        title: "HELP",
        items: [
            "Customer Support",
            "Delivery Details",
            "Terms & Conditions",
            "Privacy Policy",
        ],
    },
    {
        title: "FAQ",
        items: ["Account", "Manage Deliveries", "Orders", "Payments"],
    },
    {
        title: "RESOURCES",
        items: [
            "Free eBooks",
            "Development",
            "Tutorial",
            "How to – Blog",
            "Youtube Playlist",
        ],
    },
]

const PaymentMethodsImages = [
    { src: "/images/visa.png", alt: "Visa Card" },
    { src: "/images/master.png", alt: "Mastercard" },
    { src: "/images/paypal.png", alt: "PayPal" },
    { src: "/images/pay.png", alt: "Apple Pay" },
    { src: "/images/gpay.png", alt: "Google pay" },
]

export default function Footer() {
    return (
        <footer className=" bg-blue-100">
            <div className="flex flex-row justify-items-start gap-30 px-20 py-5">
                {/* Brand + Socials */}
                <div className="max-w-xl space-y-4">
                    <div>
                        <h1 className="text-2xl font-bold">HERMARK.CO</h1>
                        <p className="text-xl text-muted-foreground">
                            We have clothes that suits your style and which <br />
                            you’re proud to wear. From women to men.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        {socialLinks.map(({ icon, label }) => (
                            <div key={label} className="p-4 rounded-full bg-white">
                                <SocialMediaButton
                                    key={label}
                                    icon={icon}
                                    label={label}
                                    size={20}
                                    className="bg-blue-900"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Columns */}
                {footerLinks.map(({ title, items }) => (
                    <div key={title} className="space-y-2">
                        <p className="text-xl font-semibold">{title}</p>

                        <ul className="space-y-1 text-xl text-muted-foreground">
                            {items.map((item) => (
                                <li key={item} className="hover:text-foreground cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <hr className="my-4 border-t border-gray-300 mx-20" />
            <div className="flex flex-row justify-between items-center px-40 pt-3 pb-30">
                <p className="text-xl">Hermark.co &copy; {new Date().getFullYear()}, All rights reserved.</p>
                <div className="flex flex-row gap-4">
                    {PaymentMethodsImages.map(({ src, alt }) => (
                        <div key={alt} className="bg-white p-2 rounded-md flex items-center justify-center">
                            <Image key={alt} src={src} alt={alt} width={45} height={7.5} />
                        </div>
                    ))}
                </div>
            </div>

        </footer>
    )
}
