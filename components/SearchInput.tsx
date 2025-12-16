import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SearchInput() {
    return (
        <div className="flex flex-row justify-items-start gap-4 rounded-full px-4 py-1 bg-blue-100">
            <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Search"
                title="Search"
                asChild>
                <Search className="h-6 w-6 my-2" />
            </Button>
            <Input
                type="text"
                placeholder="Search for products..."
                className="w-full max-w-md border-none shadow-none placeholder:text-base"
            />
        </div>
    )
}
