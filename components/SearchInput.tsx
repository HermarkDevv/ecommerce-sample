"use client"

import { useState, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SearchInput() {

    const [isActive, setIsActive] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleOpen = () => {
        setIsActive(true)
        setTimeout(() => inputRef.current?.focus(), 0)
    }

    const handleBlur = () => {
        setIsActive(false)
    }

    return (
        <div className="flex flex-row justify-items-start gap-4 rounded-full px-4 py-1 bg-blue-100">
            <Button
                variant="ghost"
                size="icon"
                aria-label="Search"
                title="Search"
                onClick={handleOpen}
                className={`
        md:flex
                    ${isActive ? "hidden md:flex" : "flex"}
                `}
                asChild
            >
                <Search className="h-6 w-6 my-2" />
            </Button>

            {/* Search Input */}
            <Input
                ref={inputRef}
                type="text"
                placeholder="Search for products..."
                onBlur={handleBlur}
                className={`bg-transparent border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-base transition-all duration-200 md:w-64
                            ${isActive ? "w-48 block" : "hidden md:block"}
                `}
            />
        </div>
    )
}
