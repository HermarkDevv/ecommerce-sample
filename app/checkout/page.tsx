"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useCartStore } from "@/store/cartStore"
import PaystackButton from "@/components/PaystackButton"
import { useHydrated } from "@/hooks/useHydrated"

export default function CheckoutPage() {
    const router = useRouter()
    const { items, clearCart } = useCartStore()

    const [email, setEmail] = useState("")
    const [fullName, setFullName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    const [isCompletingOrder, setIsCompletingOrder] = useState(false)


    const [errors, setErrors] = useState<Record<string, string>>({})

    const subtotal = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    )

    const shippingFee = 1500
    const total = subtotal + shippingFee

    const handlePaymentSuccess = async (reference: string) => {
        const res = await fetch(`/api/paystack/verify?reference=${reference}`)
        const data = await res.json()

        if (data.data?.status !== "success") {
            alert("Payment verification failed")
            return
        }

        const orderData = {
            reference,
            customer: {
                fullName,
                email,
                phone,
                address,
            },
            items,
            subtotal,
            shippingFee,
            total,
            createdAt: new Date().toISOString(),
        }

        // ✅ mark checkout as complete BEFORE clearing cart
        setIsCompletingOrder(true)

        localStorage.setItem("lastOrder", JSON.stringify(orderData))
        clearCart()

        router.push("/order-success")
    }



    useEffect(() => {
        if (!isCompletingOrder && items.length === 0) {
            router.replace("/cart")
        }
    }, [items.length, isCompletingOrder, router])


    const isFormValid =
        fullName.trim() &&
        email.trim() &&
        /^\S+@\S+\.\S+$/.test(email) &&
        phone.trim() &&
        address.trim()


    const hydrated = useHydrated()

    if (!hydrated) {
        return <div className="py-20 text-center">Loading checkout…</div>
    }


    return (
        <section className="max-w-7xl mx-auto px-6 py-12">
            <p className="text-base mb-6 text-muted-foreground">
                <Link href="/">Home</Link> <span className="mx-2">›</span> <Link href="/cart">Cart</Link> <span className="mx-2">›</span> <strong>Checkout</strong>
            </p>

            <h1 className="text-3xl font-bold mb-10">Checkout</h1>

            <div className="grid lg:grid-cols-[1fr_420px] gap-10">

                {/* LEFT: SHIPPING INFO */}
                <div className="border rounded-2xl p-6 space-y-4">
                    <h2 className="text-lg font-semibold">
                        Shipping & Contact Information
                    </h2>

                    <input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={`w-full border rounded-md p-3 ${errors.fullName ? "border-red-500" : ""
                            }`}
                        placeholder="Full Name"
                    />
                    {errors.fullName && (
                        <p className="text-sm text-red-500">{errors.fullName}</p>
                    )}

                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full border rounded-md p-3 ${errors.email ? "border-red-500" : ""
                            }`}
                        placeholder="Email Address"
                    />
                    {errors.email && (
                        <p className="text-sm text-red-500">{errors.email}</p>
                    )}

                    <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full border rounded-md p-3 ${errors.phone ? "border-red-500" : ""
                            }`}
                        placeholder="Phone Number"
                    />
                    {errors.phone && (
                        <p className="text-sm text-red-500">{errors.phone}</p>
                    )}

                    <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className={`w-full border rounded-md p-3 ${errors.address ? "border-red-500" : ""
                            }`}
                        placeholder="Shipping Address"
                    />
                    {errors.address && (
                        <p className="text-sm text-red-500">{errors.address}</p>
                    )}

                    <PaystackButton
                        email={email}
                        amount={total * 100}
                        disabled={!isFormValid}
                        onSuccess={handlePaymentSuccess}
                    />

                </div>

                {/* RIGHT: ORDER SUMMARY */}
                <div className="border rounded-2xl p-6 h-fit">
                    <h2 className="text-lg font-semibold mb-4">
                        Order Summary
                    </h2>

                    {items.map((item) => (
                        <div
                            key={`${item.id}-${item.size}-${item.color}`}
                            className="flex gap-4 mb-4"
                        >
                            <div className="relative w-16 h-16">
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
                                    {item.size} · {item.color}
                                </p>
                            </div>

                            <p className="font-semibold">
                                ₦{item.price * item.quantity}
                            </p>
                        </div>
                    ))}

                    <div className="border-t my-4" />

                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>₦{subtotal}</span>
                    </div>

                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>₦{shippingFee}</span>
                    </div>

                    <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>₦{total}</span>
                    </div>

                    <p className="text-sm text-muted-foreground mt-4">
                        Payment is handled via Paystack (demo).
                    </p>
                </div>
            </div>
        </section>
    )
}
