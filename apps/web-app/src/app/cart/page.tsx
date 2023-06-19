import {ICart} from "src/types/cart";

export default async function Page({params}: { params: { slug: string } }) {
    const cartResponse = await fetch(`https://twworkspace--vtexsgdemostore.myvtex.com/_v/cartPage/cd931e6fe5224a93b2864b7e7361ca1d`);
    const product: ICart = await cartResponse.json();
    const cartProductSkus = product.items;

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            {cartProductSkus.map(productSku => (
                <div key={productSku.id} style={{flex: '1', alignSelf: 'flex-start'}}>
                    <img src={productSku.imageUrl}
                         alt={productSku.name} width="100" height="100"/>
                    <div>
                        {productSku.name}
                    </div>
                    <div>
                        {productSku.price}
                    </div>
                </div>
            ))}
        </div>
    );
}