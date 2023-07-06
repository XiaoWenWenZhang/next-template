'use client'

import "../styles/header.scss"
import {emitter} from "src/utils/eventEmitter";
import {useState} from "react";

export const AddToCart = ({item}) => {
    const [loading, setLoading] = useState(false);
    const targetPath = 'https://twworkspace--vtexsgdemostore.myvtex.com/_v/cartItems/cd931e6fe5224a93b2864b7e7361ca1d';
    const addItemToCart = (item) => {
        setLoading(true);
        const body = JSON.stringify({
            quantity: 1,
            seller: "1",
            id: item.productId,
            index: 0,
        })
        fetch(targetPath, {method: 'POST', body}).then((res) => res.json()).then(data => {
            console.log(data)
            setLoading(false);
            emitter.emit('addToCart')
        }).catch(err => {
            setLoading(false);
            console.log(111, err)
        })
    }
    return (

        <>
            {
                loading ? (<button style={{width: '100%', marginTop: '20px'}} className="button loading-btn"
                                   >Loading...
                </button>) : (<button style={{width: '100%', marginTop: '20px'}} className="button submit-btn"
                                      onClick={() => addItemToCart(item)}>ADD TO CART
                </button>)
            }</>
    );
}


