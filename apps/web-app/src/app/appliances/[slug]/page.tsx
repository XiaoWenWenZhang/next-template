import {IProduct} from "src/types/product";
import {AddToCart} from "src/components/AddToCart";

export default async function Page({params}: { params: { slug: string } }) {
    const productAndSKUIdResponse = await fetch(`https://twworkspace--vtexsgdemostore.myvtex.com/_v/skus/4`);
    const productList: IProduct[] = await productAndSKUIdResponse.json();

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            {productList.map(product => (
                <div key={product.productId} style={{flex: '1', alignSelf: 'flex-start'}}>
                    <img src={product.skus[0].image}
                         alt={product.name} width="100" height="100"/>
                    <div>
                        {product.name}
                    </div>
                    <AddToCart item={product}/>
                </div>
            ))}
        </div>
    );
}
