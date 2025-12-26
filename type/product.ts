export type Rating = {
    rate: number
    count: number
}

export type ColorOption = {
    id: number;
    name: string;
    tailwindClass: string;
};

export type Product = {
    id: number
    title: string
    price: number
    description: string
    images: string[]
    colorOptions: ColorOption[]
    rating: Rating
    tags: string[]
    collection: string[]
}

export type Review = {
    rate: number
    name: string
    reviewDetails: string
}