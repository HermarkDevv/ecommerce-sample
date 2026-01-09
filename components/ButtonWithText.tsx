import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type Props = {
    className?: string
    title: string
    href?: string
}

export default function ButtonWithText({ className, title, href }: Props) {
    return (
        <>
            {
                href
                    ? <Link href={href}>
                        <Button
                            type='submit'
                            className={cn("w-auto text-xl font-light rounded-4xl px-8 py-6", className)}
                        >
                            {title}
                        </Button>
                    </Link>

                    : <Button
                        type='submit'
                        className={cn("w-auto text-xl font-light rounded-4xl px-8 py-6", className)}
                    >
                        {title}
                    </Button>
            }
        </>)
}
