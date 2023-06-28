'use client'

import {AddToCart} from "src/components/AddToCart";
import {CatalogsContext} from "src/catalogs.context";
import {useContext, useEffect, useState} from "react";

export default function Page({params}: { params: { slug: string } }) {
    const {secondCatalogs} = useContext(CatalogsContext);
    const [productList, setProductList] = useState([]);


    useEffect(() => {
        const catalog = secondCatalogs.find((c) => (c.alias === params.slug));
        fetch(`https://twworkspace--vtexsgdemostore.myvtex.com/_v/skus/${catalog.id}`)
            .then((response) => response.json())
            .then((data) => {
                setProductList(data);
            })
            .catch((error) => {
                console.error('Error fetching product list:', error);
            });
    }, []);

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
