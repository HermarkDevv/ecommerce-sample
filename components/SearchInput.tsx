"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SearchInputProps {
    onActiveChange?: (active: boolean) => void
}

export default function SearchInput({ onActiveChange }: SearchInputProps) {
    const [isActive, setIsActive] = useState(false)
    const [query, setQuery] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    const openSearch = () => {
        setIsActive(true)
        onActiveChange?.(true)
        requestAnimationFrame(() => inputRef.current?.focus())
    }

    const closeSearch = () => {
        setIsActive(false)
        setQuery("")
        onActiveChange?.(false)
    }

    const submitSearch = () => {
        if (!query.trim()) return
        router.push(`/search?q=${encodeURIComponent(query.trim())}`)
        closeSearch()
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                submitSearch()
            }}
            className="flex items-center gap-3 rounded-full px-4 py-1 bg-blue-100"
        >
            {/* Search button */}
            <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="Search"
                onClick={isActive ? submitSearch : openSearch}
                className={`${isActive ? "hidden md:flex" : "flex"}`}
                asChild
            >
                <Search className="h-6 w-6" />
            </Button>

            {/* Search input */}
            <Input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search for products..."
                className={`
                 bg-transparent border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0
                 placeholder:text-base md:placeholder:text-xl transition-all duration-200 md:w-64 text-base md:text-xl
                 ${isActive ? "w-28 block" : "hidden md:block"}
                `}
            />
        </form>
    )
}

