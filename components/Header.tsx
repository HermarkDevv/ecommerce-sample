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

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="flex flex-row justify-between items-center gap-x-3 bg-white px-2 lg:px-16 py-4 text-blue-900">

            {/* Mobile Menu */}
            <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <DropdownMenuTrigger className="lg:hidden">
                    {isMenuOpen ? <X /> : <Menu />}
                </DropdownMenuTrigger>

                <DropdownMenuContent className=" my-6">
                    <DropdownMenuItem>Shop</DropdownMenuItem>
                    <DropdownMenuItem>New Arrivals</DropdownMenuItem>
                    <DropdownMenuItem>Top Selling</DropdownMenuItem>
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
                <p>New Arrivals</p>
                <p>Top Selling</p>
            </nav>

            <div className="flex flex-row items-center gap-4">
                <SearchInput />
                <NavButton icon={ShoppingCart} label="Cart" />
                <NavButton icon={CircleUserRound} label="User" />
            </div>

        </div>
    )
}
