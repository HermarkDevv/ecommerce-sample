"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export type CartItem = {
    id: string
    title: string
    price: number
    image: string
    size: string
    color: string
    quantity: number
}

type CartState = {
    items: CartItem[]
    addItem: (item: CartItem) => void
    removeItem: (id: string) => void
    updateQuantity: (id: string, quantity: number) => void
    clearCart: () => void
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (item) => {
                const existing = get().items.find(
                    (i) =>
                        i.id === item.id &&
                        i.size === item.size &&
                        i.color === item.color
                )

                if (existing) {
                    set({
                        items: get().items.map((i) =>
                            i === existing
                                ? { ...i, quantity: i.quantity + item.quantity }
                                : i
                        ),
                    })
                } else {
                    set({ items: [...get().items, item] })
                }
            },

            removeItem: (id) =>
                set({
                    items: get().items.filter((i) => i.id !== id),
                }),

            updateQuantity: (id, quantity) =>
                set({
                    items: get().items.map((i) =>
                        i.id === id ? { ...i, quantity } : i
                    ),
                }),

            clearCart: () => set({ items: [] }),
        }),
        {
            name: "cart-storage", // localStorage key
        }
    )
)
