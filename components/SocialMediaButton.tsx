import Link from "next/link"
import { cn } from "@/lib/utils"
import { IconType } from "react-icons"
import { Button } from '@/components/ui/button';

type SocialIconProps = {
    href?: string
    icon: IconType
    label: string
    size?: number
    className?: string
}

export default function SocialIcon({
    href,
    icon: Icon,
    label,
    size = 18,
    className,
}: SocialIconProps) {
    return (
        href ?
            (<Button
                aria-label={label}
                title={label}
                className={cn(
                    "inline-flex items-center justify-center rounded-full",
                    "h-6 w-6 p-2",
                    className
                )}
            >
                <Link href={href}>
                    <Icon size={size} />
                </Link>
                <span className="sr-only">{label}</span>
            </Button>) : (
                <>
                    <Icon size={size} />
                    <span className="sr-only">{label}</span>
                </>
            )
    )
}
