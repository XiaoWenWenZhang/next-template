'use client'

import "../styles/header.scss"
import {Button} from "ui-components";
import {emitter} from "src/utils/eventEmitter";

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
            console.log(111,err)
        })
    }
    return (
        <Button label={'add to cart'} size={'large'} onClick={() => addItemToCart(item)}></Button>
    );
}


