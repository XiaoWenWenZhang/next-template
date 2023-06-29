import {ICart} from "src/types/cart";
import {CardItems} from "src/components/CardItems";
import Link from "next/link";

export default async function Page() {
    const cartResponse = await fetch(`https://twworkspace--vtexsgdemostore.myvtex.com/_v/cartPage/cd931e6fe5224a93b2864b7e7361ca1d`,
        {cache: "no-cache"});
    const product: ICart = await cartResponse.json();
    const cartProductSkus = product.items;
    const totalPrice = product.totalizers[0]?.value ?? 0;


    return (
        <div style={{display: 'flex', flexDirection: 'column',
             marginLeft: '200px'}}>
            <div style={{display: "flex"}}>
                <div style={{width: '60%', marginRight: '10%'}}><CardItems  cartProductSkus={cartProductSkus}/></div>
                <div style={{width: '35%', padding: '50px 100px 50px 100px', backgroundColor: 'rgba(223,231,234,.4)'
                }}>
                    <div style={{ paddingBottom: '15px', fontWeight: 600,
                        borderBottom: '2px solid #dfe7ea', width: '100%'}}>CART TOTAL</div>

                    <div style={{display: 'flex', flexDirection: 'row',marginTop: '20px'}}>
                        <div style={{ paddingBottom: '15px', fontWeight: 600, width: '100%'}}>TOTAL</div>
                        <div style={{ paddingBottom: '15px', fontWeight: 600, width: '100%'}}>$R{totalPrice}</div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'end', color: '#ccc'}}>tax included</div>
                    <Link href='/checkout'>
                        <button style={{width: '100%', marginTop: '20px'}} className="button submit-btn">PROCEED TO SECURE CHECKOUT</button>
                    </Link>

                </div>
            </div>

        </div>
    );
}