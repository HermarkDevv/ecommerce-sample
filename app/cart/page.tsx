"use client"

import Image from "next/image"
import { Trash2, Minus, Plus } from "lucide-react"
import { useCartStore } from "@/store/cartStore"
import Link from "next/link"

export default function CartPage() {
    const {
        items,
        removeItem,
        updateQuantity,
        clearCart,
    } = useCartStore()

    const subtotal = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    )

    if (items.length === 0) {
        return (
            <section className="py-20 text-center">
                <h2 className="text-2xl font-semibold">Your cart is empty</h2>
                <p className="text-muted-foreground mt-2">
                    Add some products to get started.
                </p>
            </section>
        )
    }

    return (
        <section className="max-w-7xl mx-auto px-6 py-12">

            <p className="text-base text-muted-foreground mb-6">
                <Link href="/">Home</Link> <span className="mx-2">›</span> <strong>Cart</strong>
            </p>

            <h1 className="text-4xl font-bold mb-10">YOUR CART</h1>

            <div className="grid lg:grid-cols-[1fr_380px] gap-10">

                {/* CART ITEMS */}
                <div className="flex flex-col gap-6">
                    {items.map((item) => (
                        <div
                            key={`${item.id}-${item.size}-${item.color}`}
                            className="flex gap-6 border rounded-3xl p-6"
                        >
                            {/* IMAGE */}
                            <div className="relative w-32 h-32 shrink-0">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover rounded-xl"
                                />
                            </div>

                            {/* DETAILS */}
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-muted-foreground mt-1">
                                        Size: {item.size} <span className="pl-4"> Color: {item.color}</span>
                                    </p>

                                    <p className="font-bold text-lg mt-2">
                                        ${item.price.toFixed(2)}
                                    </p>
                                </div>

                                {/* QUANTITY + REMOVE */}
                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center border rounded-full px-3 py-1">
                                        <button
                                            onClick={() =>
                                                updateQuantity(
                                                    item.id,
                                                    Math.max(1, item.quantity - 1)
                                                )
                                            }
                                            className="p-1 cursor-pointer"
                                        >
                                            <Minus size={16} />
                                        </button>

                                        <span className="mx-3 font-medium">
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                updateQuantity(
                                                    item.id,
                                                    item.quantity + 1
                                                )
                                            }
                                            className="p-1 cursor-pointer"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-red-500 hover:text-red-600 cursor-pointer"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* SUMMARY */}
                <div className="border rounded-3xl p-6 h-fit">
                    <h2 className="text-xl font-semibold mb-6">
                        Order Summary
                    </h2>

                    <div className="flex justify-between mb-4">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between mb-4">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>

                    <div className="border-t my-4" />

                    <div className="flex justify-between text-lg font-bold mb-6">
                        <span>Total</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>

                    <button className="w-full bg-black text-white rounded-full py-4 font-semibold hover:bg-black/90 cursor-pointer">
                        Checkout
                    </button>

                    <button
                        onClick={clearCart}
                        className="block mx-auto mt-4 text-sm text-muted-foreground hover:underline cursor-pointer"
                    >
                        Clear cart
                    </button>
                </div>
            </div>
        </section>
    )
}
