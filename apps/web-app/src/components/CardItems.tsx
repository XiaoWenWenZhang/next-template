'use client'
import {
    Badge,
    Button,
    Price,
    ProductCard,
    ProductCardActions,
    ProductCardContent,
    ProductCardImage,
    QuantitySelector,
} from '@faststore/ui'
import {ICartProductSkus} from "src/types/cart";
import {MinusIcon, PlusIcon} from "@faststore/ui/dist/molecules/QuantitySelector/stories/assets/Icons";
import {useState} from "react";
import Link from "next/link";
import ProductQuantitySelector from "src/components/ProductQuantitySelector";

interface CardItemsProps {
    cartProductSkus: ICartProductSkus[],
}

export interface CardItemQuantity {
    id: string,
    quantity: number,
}

export const CardItems = ({
                              cartProductSkus
                          }: CardItemsProps) => {
    const initCardItemQuantity = cartProductSkus.map((cardItem) => ({id: cardItem.id, quantity: cardItem.quantity}))

    return (
        <div
        >
            {cartProductSkus.map(cartItem => (
                <div key={cartItem.id} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    borderBottom: '1px solid #dfe7ea',
                    alignItems: 'center',
                    marginBottom: '50px',
                    paddingBottom: '10px',
                    paddingTop: '30px'
                }}>

                    <ProductCard style={{display: 'flex', flexDirection: 'row'}}>
                        <ProductCardImage>
                            <img
                                alt={cartItem.name} width="100" height="100"
                                src={cartItem.imageUrl}
                            />
                        </ProductCardImage>
                        <div style={{marginRight: '50px'}}>
                            <ProductCardContent>
                                <h3 style={{
                                    margin: '10px 20px',
                                    fontWeight: 600,
                                    color: 'rgb(1, 30, 65)'
                                }}>{cartItem.name}</h3>
                            </ProductCardContent>
                            <div style={{margin: '10px 20px'}}>
                                <ProductQuantitySelector initCardItemQuantity={initCardItemQuantity} cartItem={cartItem}/>
                            </div>
                        </div>

                    </ProductCard>
                    <div style={{marginLeft: 'auto'}}>
                        <Price
                            value={cartItem.price}
                            variant="listing"
                            style={{textDecoration: 'line-through', marginRight: '15px', fontWeight: 600}}
                        />
                        <Price value={cartItem.price} variant="selling"/>
                        <Badge>0% OFF</Badge>
                    </div>
                </div>

            ))}
        </div>
    );
};