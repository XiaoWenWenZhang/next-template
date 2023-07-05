'use client'

import "../styles/header.scss"
import {Button} from "ui-components";
import {emitter} from "src/utils/eventEmitter";
import Link from "next/link";

export const AddToCart = ({item}) => {
    const targetPath = 'https://twworkspace--vtexsgdemostore.myvtex.com/_v/cartItems/cd931e6fe5224a93b2864b7e7361ca1d';
    const addItemToCart = (item) => {
        // emitter.emit('addToCart')

        const body = JSON.stringify({
            quantity: 1,
            seller: "1",
            id: item.productId,
            index: 0,
        })
        fetch(targetPath, {method: 'POST', body}).then((res) => res.json()).then(data => {
            console.log(data)
            emitter.emit('addToCart')
        }).catch(err => {
            console.log(111, err)
        })
    }
    return (

        <Link href='/checkout'>
            <button style={{width: '100%', marginTop: '20px'}} className="button submit-btn"
                    onClick={() => addItemToCart(item)}>ADD TO CART
            </button>
        </Link>
    );
}


