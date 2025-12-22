export type Rating = {
    rate: number
    count: number
}

export type Product = {
    id: number
    title: string
    price: number
    description: string
    image: string
    rating: Rating
    tags: string[]
    collection: string[]
}