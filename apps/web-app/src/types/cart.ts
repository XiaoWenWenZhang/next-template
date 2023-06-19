export interface ICart {
    orderFormId: string;
    items: ICartProductSkus[];
}

interface ICartProductSkus {
    price: number;
    imageUrl: string;
    name: string;
    id: string;
}
