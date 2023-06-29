export interface ICart {
    orderFormId: string;
    items: ICartProductSkus[];
    totalizers: ICartTotal[];
}

export interface ICartProductSkus {
    price: number;
    imageUrl: string;
    name: string;
    id: string;
    quantity: number;
}
export interface ICartTotal {
    id: string;
    name: string
    value: number
}
