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

interface CardItemsProps {
    cartProductSkus: ICartProductSkus[],
}
export const CardItems = ({
                              cartProductSkus
                          }: CardItemsProps) => {
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
                                quantity={1}
                                leftButtonProps={{
                                    onClick: () => {},
                                    disabled: true,
                                    icon: <MinusIcon color={'#2953B2'} />,
                                }}
                                rightButtonProps={{
                                    onClick: () => {},
                                    disabled: true,
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
                            value={9999999.9}
                            variant="listing"
                            style={{ textDecoration: 'line-through', marginRight: '15px' }}
                        />
                        <Price value={cartItem.price} variant="selling" />
                        <Badge>15% OFF</Badge>
                    </div>
                </div>

            ))}
            <ProductCardActions>
                <Button onClick={() => null}>PROCEED TO SECURE CHECKOUT</Button>
            </ProductCardActions>
        </div>
    );
};