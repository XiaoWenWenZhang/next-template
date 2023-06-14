export interface IProduct {
    productId: number;
    name: string;
    skus: IProductSkus[];
}

interface IProductSkus {
    sku: number;
    image: string;
    skuname: string;
}
