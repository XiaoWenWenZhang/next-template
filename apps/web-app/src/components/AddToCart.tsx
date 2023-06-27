'use client'

import "../styles/header.scss"
import {Button} from "ui-components";
import {emitter} from "src/utils/eventEmitter";

export const AddToCart = ({item}) => {
    const targetPath = 'https://twworkspace--vtexsgdemostore.myvtex.com/_v/addCartItems/cd931e6fe5224a93b2864b7e7361ca1d';
    const addItemToCart = (item) => {
        emitter.emit('addToCart')

        // const body = JSON.stringify({
        //     orderItems: [
        //         {
        //             "quantity": 3,
        //             "seller": "1",
        //             "id": "2005",
        //             "index": 0,
        //             "price": 1099
        //         }
        //     ]
        // })
        // fetch(targetPath, {method: 'POST', body}).then((res) => res.json()).then(data => {
        //     console.log(data)
        //     emitter.emit('addToCart')
        // }).catch(err => {
        //     console.log(111,err)
        // })
    }
    return (
        <Button label={'add to cart'} size={'large'} onClick={() => addItemToCart(item)}></Button>
    );
}


