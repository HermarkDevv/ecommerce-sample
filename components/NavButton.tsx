import { LucideIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type NavButtonProps = {
    icon: LucideIcon
    label: string
    href?: string
}

export default function NavButton({ icon: Icon, label, href }: NavButtonProps) {

    return (
        <>
            {href ? (
                <Link href={href}>
                    <Button
                        asChild
                        variant="ghost"
                        size="icon-sm"
                        aria-label={label}
                        title={label}
                    >
                        <Icon className="h-8 w-8" />
                    </Button>
                </Link>
            ) : (
                <Button
                    asChild
                    variant="ghost"
                    size="icon-sm"
                    aria-label={label}
                    title={label}
                >

                    <Icon className="h-8 w-8" />
                </Button>
            )
            }
        </>
    )
}
