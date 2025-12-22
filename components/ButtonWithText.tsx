import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Props = {
    className?: string
    title: string
}

export default function ButtonWithText({ className, title }: Props) {
    return (
        <Button
            type='submit'
            className={cn("w-auto text-xl font-light rounded-4xl px-8 py-6", className)}
        >
            {title}
        </Button>
    )
}
