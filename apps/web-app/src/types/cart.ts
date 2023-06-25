export interface ICart {
    orderFormId: string;
    items: ICartProductSkus[];
}

export interface ICartProductSkus {
    price: number;
    imageUrl: string;
    name: string;
    id: string;
    quantity: number;
}
