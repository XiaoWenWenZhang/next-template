'use client'
import {
    Badge,
    Button,
    Price,
    ProductCard,
    ProductCardActions,
    ProductCardContent,
    ProductCardImage,
    QuantitySelector
} from '@faststore/ui'
import {ICartProductSkus} from "src/types/cart";
import {MinusIcon, PlusIcon} from "@faststore/ui/dist/molecules/QuantitySelector/stories/assets/Icons";
import {useState} from "react";

interface CardItemsProps {
    cartProductSkus: ICartProductSkus[],
}

interface CardItemQuantity {
    id: string,
    quantity: number,
}

const MAX_QUANTITY = 100
const MIN_QUANTITY = 1

export const CardItems = ({
                              cartProductSkus
                          }: CardItemsProps) => {
    const initCardItemQuantity = cartProductSkus.map((cardItem) => ({id: cardItem.id, quantity: cardItem.quantity}))
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
        <div
        >
            {cartProductSkus.map(cartItem => (
                <div key={cartItem.id} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    borderBottom: '1px solid #ccc',
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
                        <div style={{marginRight: '250px'}}>
                            <ProductCardContent>
                                <h3 style={{
                                    margin: '10px 20px',
                                    fontWeight: 500,
                                    color: 'rgb(1, 30, 65)'
                                }}>{cartItem.name}</h3>
                            </ProductCardContent>
                            <QuantitySelector
                                style={{display: "flex"}}
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
                        </div>

                    </ProductCard>
                    <div>
                        <Price
                            value={cartItem.price}
                            variant="listing"
                            style={{textDecoration: 'line-through', marginRight: '15px'}}
                        />
                        <Price value={cartItem.price} variant="selling"/>
                        <Badge>0% OFF {cartItem.id}</Badge>
                    </div>
                </div>

            ))}
            <ProductCardActions>
                <Button onClick={() => null}>PROCEED TO SECURE CHECKOUT</Button>
            </ProductCardActions>
        </div>
    );
};