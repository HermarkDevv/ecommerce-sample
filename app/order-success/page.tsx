"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import type { CartItem } from "@/type/cart"
import { useMounted } from "@/hooks/useMounted"


type Order = {
    reference: string
    customer: {
        fullName: string
        email: string
        phone: string
        address: string
    }
    items: CartItem[]
    subtotal: number
    shippingFee: number
    total: number
}

export default function OrderSuccessPage() {
    const mounted = useMounted()

    const [order, setOrder] = useState<Order | null>(() => {
        if (typeof window === "undefined") return null

        const savedOrder = localStorage.getItem("lastOrder")
        return savedOrder ? JSON.parse(savedOrder) : null
    })

    // ✅ FIRST render (server + client) → SAME markup
    if (!mounted) {
        return (
            <section className="py-20 text-center">
                Loading order…
            </section>
        )
    }


    if (!order) {
        return (
            <section className="py-20 text-center">
                <p>Loading order details…</p>
            </section>
        )
    }

    if (!order) {
        return (
            <section className="py-20 text-center">
                <p>No order found.</p>
                <Link href="/" className="underline">
                    Go home
                </Link>
            </section>
        )
    }


    return (
        <section className="max-w-4xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold mb-2">Payment successful</h1>
            <p className="text-muted-foreground mb-8">
                Thank you for your purchase.
            </p>

            <div className="border rounded-2xl p-6 space-y-6">
                {/* Reference */}
                <div>
                    <p className="font-semibold">Reference</p>
                    <p className="text-sm text-muted-foreground">
                        {order.reference}
                    </p>
                </div>

                {/* Customer */}
                <div>
                    <p className="font-semibold">Customer</p>
                    <p>{order.customer.fullName}</p>
                    <p className="text-sm text-muted-foreground">
                        {order.customer.email} · {order.customer.phone}
                    </p>
                    <p className="text-sm text-muted-foreground">
                        {order.customer.address}
                    </p>
                </div>

                {/* Items */}
                <div>
                    <p className="font-semibold mb-4">
                        Items ({order.items.length})
                    </p>

                    {order.items.map((item) => (
                        <div
                            key={`${item.id}-${item.size}-${item.color}`}
                            className="flex gap-4 mb-4"
                        >
                            <div className="relative w-14 h-14">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover rounded-md"
                                />
                            </div>

                            <div className="flex-1">
                                <p className="font-medium">{item.title}</p>
                                <p className="text-sm text-muted-foreground">
                                    Qty: {item.quantity}
                                </p>
                            </div>

                            <p className="font-semibold">
                                ₦{item.price * item.quantity}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Totals */}
                <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>₦{order.subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>₦{order.shippingFee}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>₦{order.total}</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-4">
                    <button
                        onClick={() => {
                            localStorage.removeItem("lastOrder")
                        }}
                        className="border rounded-md px-4 py-2 cursor-pointer"
                    >
                        Clear saved order
                    </button>

                    <Link
                        href="/"
                        className="bg-blue-600 text-white rounded-md px-6 py-2 hover:bg-blue-700"
                    >
                        Continue shopping
                    </Link>
                </div>
            </div>
        </section>
    )
}
