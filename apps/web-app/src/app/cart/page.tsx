import {ICart} from "src/types/cart";
import {CardItems} from "src/components/CardItems";

export default async function Page() {
    const cartResponse = await fetch(`https://twworkspace--vtexsgdemostore.myvtex.com/_v/cartPage/cd931e6fe5224a93b2864b7e7361ca1d`);
    const product: ICart = await cartResponse.json();
    const cartProductSkus = product.items;

    return (
        <div style={{display: 'flex', flexDirection: 'column',
            width: '50vw', marginLeft: '200px'}}>
            <div style={{fontWeight: 500, fontSize: '48px'}}>My Cart</div>
            <CardItems cartProductSkus={cartProductSkus}/>

        </div>
    );
}