"use client"

import { ShoppingCart, CircleUserRound, Menu, X, } from "lucide-react"

import NavButton from "@/components/NavButton"
import SearchInput from "@/components/SearchInput"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useState } from "react"
import Link from "next/link"
import { useCartStore } from "@/store/cartStore"

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const cartCount = useCartStore(
        (state) => state.items.reduce((sum, item) => sum + item.quantity, 0)
    )

    return (
        <div className="flex flex-row justify-between items-center gap-x-3 bg-white px-2 lg:px-16 py-4 text-blue-900">

            {/* Mobile Menu */}
            <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <DropdownMenuTrigger className="lg:hidden">
                    {isMenuOpen ? <X /> : <Menu />}
                </DropdownMenuTrigger>

                <DropdownMenuContent className=" my-6">
                    <DropdownMenuItem>
                        Shop
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="/collection/new-arrivals">New Arrivals</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="/collection/top-selling">Top Selling</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <div className="font-bold text-2xl">

                <Link href="/" aria-label="Home Page">
                    <h1> HERMARK.CO</h1>
                </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex gap-6">
                <p>Shop</p>
                <Link href="/collection/new-arrivals">New Arrivals</Link>
                <Link href="/collection/top-selling">Top Selling</Link>
            </nav>

            <div className="flex flex-row items-center gap-4">
                <SearchInput onActiveChange={setIsActive} />

                <div className={` md:flex items-center gap-4 ${isActive ? "hidden" : "flex md:flex"} `}>
                    <div className="relative">
                        <NavButton icon={ShoppingCart} href="/cart" label="Cart" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </div>

                    <NavButton icon={CircleUserRound} label="User" />
                </div>
            </div>

        </div>
    )
}
