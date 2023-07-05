import Link from "next/link";
import Image from "next/image";
import ProductQuantitySelector from "src/components/ProductQuantitySelector";
import {ICartProductSkus} from "src/types/cart";
import {AddToCart} from "src/components/AddToCart";

export default async function Page({params}: { params: { slug: string } }) {
    const productDetail = await fetch(`https://twworkspace--vtexsgdemostore.myvtex.com/_v/products/${params.slug}`)
        .then((res) => res.json())
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log("error: ", error);
            return error;
        });

    const initCardItemQuantity= [{id: productDetail.skus[0].sku.toString(), quantity: 1}];
    const cardItem: ICartProductSkus= {id: productDetail.skus[0].sku.toString(), quantity: 1,
        price: 0,
        imageUrl: '',
        name: '',
    };

    return (
        <div style={{
            display: 'flex', flexDirection: 'row', width: '90%', padding: '0 100px'
        }}>
            <div style={{width: '50%'}}>
                <img
                    src={productDetail.skus[0].image}
                    alt={productDetail.name}
                    width="100%"
                    height="100%"
                />
            </div>
            <div style={{width: '50%', padding: '100px 100px 50px 100px'}}>
                <div style={{paddingBottom: '15px', fontWeight: 700, fontSize: '30px'}}>{productDetail.name}</div>

                <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px'}}>
                    <div style={{
                        paddingBottom: '15px', fontWeight: 700, fontSize: '36px', width: '100%',
                        borderBottom: '1px solid #ccc'
                    }}>{productDetail.skus[0].bestPriceFormated}</div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'start',
                    color: '#727273',
                    marginTop: '10px'
                }}>Color: {productDetail.skus[0].dimensions.Color}
                </div>
                <div style={{
                    display: 'flex', flexDirection: 'row',
                }}>
                    <div
                        style={{
                            marginLeft: '5px',
                            width: '42px',
                            height: '42px',
                            border: '1px solid red',
                            borderRadius: '5px',
                            margin: '25px, 10px,5px'
                        }}>
                        <Image
                            style={{borderRadius: '5px', border: '1px solid #e3e4e6',}}
                            src={productDetail.skus[0].image}
                            alt={productDetail.name}
                            width="40"
                            height="40"
                        />
                    </div>
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

                <AddToCart item={productDetail} />

            </div>

        </div>
    );
}
