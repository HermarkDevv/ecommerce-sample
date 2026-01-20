"use client"

type Props = {
    email: string
    amount: number // in kobo
    disabled?: boolean
    onSuccess: (reference: string) => void
}

export default function PaystackButton({ email, amount, disabled, onSuccess }: Props) {
    const handlePayment = () => {
        // @ts-expect-error - PaystackPop is loaded via script in layout.tsx
        const handler = window.PaystackPop.setup({
            key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
            email,
            amount,
            ref: String(Date.now()),
            onClose: () => {
                alert("Payment cancelled")
            },
            callback: (response: { reference: string }) => {
                onSuccess(response.reference)
            },
        })

        handler.openIframe()
    }

    return (
        <button
            onClick={handlePayment}
            disabled={disabled}
            className="w-full bg-black text-white rounded-full py-4 font-semibold hover:bg-black/90 disabled:bg-black/50 cursor-pointer"
        >
            Check Out
        </button>
    )
}
