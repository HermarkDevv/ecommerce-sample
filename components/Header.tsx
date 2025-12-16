import { ShoppingCart, CircleUserRound, } from "lucide-react"
import NavButton from "@/components/NavButton"
import SearchInput from "@/components/SearchInput"

export default function Header() {
    return (
        <div className="flex flex-row justify-between items-center bg-white px-16 py-4 text-blue-900">
            <div className="font-bold text-2xl">
                <h1> HERMARK.CO</h1>
            </div>
            <div className="flex flex-row gap-4">
                <p>Shop</p>
                <p>New Arrivals</p>
                <p>Top Selling</p>
            </div>
            <div className="flex flex-row items-center gap-4">
                <SearchInput />
                <NavButton icon={ShoppingCart} label="Cart" />
                <NavButton icon={CircleUserRound} label="User" />
            </div>
        </div>
    )
}
