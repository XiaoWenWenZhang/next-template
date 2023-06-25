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

const MAX_QUANTITY = 10
const MIN_QUANTITY = 1
export const CardItems = ({
                              cartProductSkus
                          }: CardItemsProps) => {
    const [quantity, setQuantity] = useState(MIN_QUANTITY)

    const validateQuantityRange = (quantity) => {
        return Math.min(Math.max(quantity, MIN_QUANTITY), MAX_QUANTITY);
    }

    const increase = (id) => {
        setQuantity((cur) => validateQuantityRange(cur + 1))
    }

    const decrease = () => {
        setQuantity((cur) => validateQuantityRange(cur - 1))
    }

    const isLeftDisabled = () => {
        return quantity === MIN_QUANTITY
    }

    const isRightDisabled = () => {
        return quantity === MAX_QUANTITY
    }

    return (
        <div
        >
            {cartProductSkus.map(cartItem => (
                <div key={cartItem.id} style={{display: 'flex', flexDirection: 'row',
                    borderBottom: '1px solid #ccc', alignItems: 'center', marginBottom: '50px',paddingBottom: '10px',paddingTop: '30px'}}>

                    <ProductCard style={{display: 'flex', flexDirection: 'row'}}>
                        <ProductCardImage>
                            <img
                                alt={cartItem.name} width="100" height="100"
                                src={cartItem.imageUrl}
                            />
                        </ProductCardImage>
                        <div style={{marginRight: '250px'}}>
                            <ProductCardContent>
                                <h3 style={{margin: '10px 20px', fontWeight: 500, color: 'rgb(1, 30, 65)'}}>{cartItem.name}</h3>
                            </ProductCardContent>
                                <QuantitySelector
                                    style={{display: "flex"}}
                                    quantity={quantity}
                                    leftButtonProps={{
                                        onClick: decrease,
                                        disabled: isLeftDisabled(),
                                        icon: <MinusIcon color={'#2953B2'} />,
                                    }}
                                    rightButtonProps={{
                                        onClick: () => {increase(cartItem.id)},
                                        disabled: isRightDisabled(),
                                        icon: <PlusIcon color={'#2953B2'} />,
                                    }}
                                    inputProps={{
                                        onChange: () =>{},
                                        readOnly: false,
                                    }}
                                />
                        </div>

                    </ProductCard>
                    <div>
                        <Price
                            value={cartItem.price}
                            variant="listing"
                            style={{ textDecoration: 'line-through', marginRight: '15px' }}
                        />
                        <Price value={cartItem.price} variant="selling" />
                        <Badge>0% OFF {cartItem.quantity}</Badge>
                    </div>
                </div>

            ))}
            <ProductCardActions>
                <Button onClick={() => null}>PROCEED TO SECURE CHECKOUT</Button>
            </ProductCardActions>
        </div>
    );
};