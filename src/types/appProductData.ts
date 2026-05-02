export interface ProductData {
    id: string;
    brand: string;
    image: string;
    oldPrice: number;
    price: number;
    quantity: number;
    title: string;
}

export interface AddressInput {
    addressTitle: string;
    addressCity: string;
    addressDetails: string;
}

export interface AddressData extends AddressInput {
    id: string;
    createdAt: string;
    userId: string;
}