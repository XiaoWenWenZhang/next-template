'use client'
import Image from "next/image";
import ProductQuantitySelector from "src/components/ProductQuantitySelector";
import {ICartProductSkus} from "src/types/cart";
import {AddToCart} from "src/components/AddToCart";
import {useRouter, useSearchParams} from "next/navigation";

export default async function Page({params}: { params: { slug: string } }) {
    const router = useRouter();
    const searchParams = useSearchParams()
    const skuId = searchParams.get('skuId')

    const productDetail = await fetch(`https://twworkspace--vtexsgdemostore.myvtex.com/_v/products/${params.slug}`)
        .then((res) => res.json())
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log("error: ", error);
            return error;
        });

    const initCardItemQuantity = [{id: productDetail.skus[0].sku.toString(), quantity: 1}];
    const cardItem: ICartProductSkus = {
        id: productDetail.skus[0].sku.toString(), quantity: 1,
        price: 0,
        imageUrl: '',
        name: '',
    };

    const currentProductSkus = productDetail.skus.find(sku => sku.sku == skuId) ?? productDetail.skus[0];

    return (
        <div style={{
            display: 'flex', flexDirection: 'row', width: '90%', padding: '0 100px'
        }}>
            <div style={{width: '50%'}}>
                <img
                    src={currentProductSkus.image}
                    alt={productDetail.name}
                    width="100%"
                    height="100%"
                />
            </div>
            <div style={{width: '50%', padding: '100px 100px 50px 100px'}}>
                <div style={{
                    paddingBottom: '15px',
                    fontWeight: 700,
                    fontSize: '30px'
                }}>{productDetail.name}{currentProductSkus.sku}</div>

                <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px'}}>
                    <div style={{
                        paddingBottom: '15px', fontWeight: 700, fontSize: '36px', width: '100%',
                        borderBottom: '1px solid #ccc'
                    }}>{currentProductSkus.bestPriceFormated}</div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'start',
                    color: '#727273',
                    marginTop: '10px'
                }}>Color: {currentProductSkus.dimensions.Color}
                </div>
                <div style={{
                    display: 'flex', flexDirection: 'row',
                }}>
                    {
                        productDetail.skus.map(item => (
                            <div
                                key={item.sku}
                                onClick={() => {
                                    console.log(item.sku)
                                    router.push(`/appliances/detail/${productDetail.productId}?skuId=${item.sku}`);
                                }}
                                className={`product-review ${currentProductSkus.sku == item.sku ? 'active-product' : ''} `}>
                                <Image
                                    style={{borderRadius: '5px', border: '1px solid #e3e4e6',}}
                                    src={item.image}
                                    alt={productDetail.name}
                                    width="40"
                                    height="40"
                                />
                            </div>
                        ))
                    }
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'start',
                    color: '#727273',
                    marginTop: '10px'
                }}>Quantity
                </div>
                <div style={{margin: '20px 0px'}}>
                    <ProductQuantitySelector initCardItemQuantity={initCardItemQuantity} cartItem={cardItem}/>
                </div>

                <AddToCart item={productDetail}/>

            </div>

        </div>
    );
}
