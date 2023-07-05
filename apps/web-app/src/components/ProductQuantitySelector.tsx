'use client'
import * as React from 'react';
import "../styles/BasicCard.scss";
import {MinusIcon, PlusIcon} from "@faststore/ui/dist/molecules/QuantitySelector/stories/assets/Icons";
import {QuantitySelector} from "@faststore/ui";
import {ICartProductSkus} from "src/types/cart";
import {useState} from "react";
import {CardItemQuantity} from "src/components/CardItems";

interface ProductQuantitySelectorProps {
    cartItem: ICartProductSkus;
    initCardItemQuantity: {
        quantity: number;
        id: string;
    }[];
}
const MAX_QUANTITY = 100
const MIN_QUANTITY = 1
export default function ProductQuantitySelector({
                                                    cartItem,
                                                    initCardItemQuantity}: ProductQuantitySelectorProps) {

    const [quantity, setQuantity] = useState<CardItemQuantity[]>(initCardItemQuantity)

    const validateQuantityRange = (quantity) => {
        return Math.min(Math.max(quantity, MIN_QUANTITY), MAX_QUANTITY);
    }

    const increase = (id) => {
        let cardItemQuantities = quantity.find(item => item.id == id);
        let otherCardItemQuantities = quantity.filter(item => item.id != id) || [];
        cardItemQuantities.quantity = validateQuantityRange(cardItemQuantities.quantity + 1)
        setQuantity([...otherCardItemQuantities, cardItemQuantities])
    }


    const decrease = (id) => {
        let cardItemQuantities = quantity.find(item => item.id == id);
        let otherCardItemQuantities = quantity.filter(item => item.id != id) || [];
        cardItemQuantities.quantity = validateQuantityRange(cardItemQuantities.quantity - 1)

        setQuantity([...otherCardItemQuantities, cardItemQuantities])

    }

    const validateInput = ( e,id) => {
        let cardItemQuantities = quantity.find(item => item.id == id);
        let otherCardItemQuantities = quantity.filter(item => item.id != id) || [];
        if (!Number.isNaN(Number(e.target.value))) {
            cardItemQuantities.quantity = validateQuantityRange(Number(e.target.value))
            setQuantity([...otherCardItemQuantities, cardItemQuantities])
        }
    }

    const isLeftDisabled = (id) => {
        let cardItemQuantities = quantity.find(item => item.id == id);
        return cardItemQuantities.quantity === MIN_QUANTITY
    }

    const isRightDisabled = (id) => {
        let cardItemQuantities = quantity.find(item => item.id == id);
        return cardItemQuantities.quantity === MAX_QUANTITY
    }
    return (
        <QuantitySelector
            style={{display: "flex"}}
            className="quantity-selector"
            quantity={quantity.find(item => item.id == cartItem.id)?.quantity ?? 1}
            leftButtonProps={{
                onClick: () => {
                    decrease(cartItem.id)
                },
                disabled: isLeftDisabled(cartItem.id),
                icon: <MinusIcon color={'#2953B2'}/>,
            }}
            rightButtonProps={{
                onClick: () => {
                    increase(cartItem.id)
                },
                disabled: isRightDisabled(cartItem.id),
                icon: <PlusIcon color={'#2953B2'}/>,
            }}
            inputProps={{
                onChange: (e) => {validateInput(e,cartItem.id)},
                readOnly: false,
            }}
        />
    );
}
