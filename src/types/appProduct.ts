



export interface Product {
    id: number,
    title: string,
    brand: string,
    image: any,
    price: number,
    oldPrice: string,
    quantity: number,
    sum: number
}

export interface ProductCardProp {
    product: Product,
    isFavorite?: boolean,
    onPressCart?: () => void
}