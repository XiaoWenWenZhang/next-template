import {ICart} from "src/types/cart";

export default async function Page() {
    const cartResponse = await fetch(`https://twworkspace--vtexsgdemostore.myvtex.com/_v/cartPage/cd931e6fe5224a93b2864b7e7361ca1d`);
    const product: ICart = await cartResponse.json();
    const cartProductSkus = product.items;

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center',
            alignItems: 'center', borderBottom: '1px solid #ccc', width: '50vw', marginLeft: '20px'}}>
            {cartProductSkus.map(cartItem => (
                <div key={cartItem.id} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={cartItem.imageUrl}
                         alt={cartItem.name} width="100" height="100"/>
                    <div style={{margin: '0 20px'}}>
                        {cartItem.name}
                    </div>
                    <div style={{fontWeight: 500}}>
                        R${cartItem.price}
                    </div>
                </div>
            ))}
        </div>
    );
}