import {IProduct} from "src/types/product";
import {Button} from "ui-components";

export default async function Page({params}: { params: { slug: string } }) {
    const productResponse = await fetch(`https://twworkspace--vtexsgdemostore.myvtex.com/_v/skus/2`);
    const product: IProduct = await productResponse.json();
    const productSkus = product.skus;

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            {productSkus.map(productSku => (
                <div key={productSku.sku} style={{flex: '1', alignSelf: 'flex-start'}}>
                    <img src={productSku.image}
                         alt={productSku.skuname} width="100" height="100"/>
                    <div style={{marginBottom: '20px'}}>
                        {productSku.skuname}
                    </div>

                    <Button label={'add to cart'} size={'large'}></Button>
                </div>
            ))}
        </div>
    );
}