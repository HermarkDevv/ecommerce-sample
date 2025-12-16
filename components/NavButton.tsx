import { LucideIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type NavButtonProps = {
    icon: LucideIcon,
    label: string,
    href?: string
}

export default function NavButton({ icon: Icon, label, href }: NavButtonProps) {
    return (
        <Button
            variant="ghost"
            size="icon-sm"
            aria-label={label}
            title={label}
            asChild>
            {href
                ? <Link href={href}><Icon /></Link>
                : <Icon />}
        </Button>
    )
}
