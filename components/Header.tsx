
export default function Header() {
    return (
        <div className="flex flex-row justify-between bg-white px-16 py-6 text-black">
            <div className="font-bold text-2xl">HERMARK.CO</div>
            <div className="flex flex-row gap-4">
                <p>Shop</p>
                <p>New Arrivals</p>
                <p>Top Selling</p>
            </div>
            <div>search</div>
        </div>
    )
}
