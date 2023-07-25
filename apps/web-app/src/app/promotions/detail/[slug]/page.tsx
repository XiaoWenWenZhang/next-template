import CardPromotion from "src/components/CardPromotion";
import "../../../../styles/home.scss";

export default async function Page({params}: { params: { slug: string } }) {
    const targetPath = `https://twworkspace--vtexsgdemostore.myvtex.com/_v/Promotions/${params.slug}`;

    const requestInit = {
        method: 'GET',
        headers: {
            'X-VTEX-API-AppKey': 'vtexappkey-vtexsgdemostore-WDWTEM',
            'X-VTEX-API-AppToken': 'NSISRSOBPCPHVUKKFHJXEUXBPFQHXRNVXARJZLVJJJGPEWEJSVGIIYLDLQVRSDBDXRMKREBTQMFXABTVGYXANVDFDHXUCWNOSBIVLXIQUXEMYLUNPXMPHEWNIOPZLKTO'
        }
    }
    const promotionsRes = await fetch(targetPath, requestInit)

    const promotions = await promotionsRes.json();
    return (
        <div >
            <div className="body-container"><CardPromotion/></div>
            <div style={{position: 'relative'}}>
                <div >
                    <img style={{height: '400px'}} src="https://www.electrolux.co.th/contentassets/fe6f9344e78b4fb1813a538b477f17d1/laundryday-1900x500.jpg?preset=xlarge"
                         alt="promotion banner" />
                </div>
                <div style={{position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-120%, -60%)',
                    backgroundColor:'rgba(1,30,65,.92)', color: '#dfe7ea', width: '460px'}}>
                    <h1 style={{margin: '50px', textAlign:'left'}}>
                        Super Clean
                        <div>for Rainy Season</div>
                        <div style={{textAlign:'left', fontSize: '14px', fontWeight: 400}}>
                            1 June 2023 - 30 September 2023
                        </div>
                    </h1>

                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: '0px 70px', width: '100%'}}>
                <div style={{textAlign: 'center', width: '50%', color: 'white', backgroundColor:'#091d40', border:'1px solid white', padding: '20px 0'}}>
                    <h2>
                        Pro 1
                    </h2>
                    <img style={{height:'100px'}} src='https://www.electrolux.co.th/globalassets/promotions/cooling-air/free-installation-3.png'/>
                    <p>Special price</p>
                    <p>Discount up to 3,000 THB</p>
                </div>
                <div style={{textAlign: 'center', width: '50%', color: 'white', backgroundColor:'#091d40', border:'1px solid white', padding: '20px 0'}}>
                    <h2>
                        Pro 2
                    </h2>
                    <img style={{height:'100px'}} src='https://www.electrolux.co.th/globalassets/promotions/cooling-air/free-installation-2.png'/>
                    <p>0% Installment</p>
                    <p>up to 6 months*</p>
                </div>
            </div>
            <div style={{textAlign: 'left',  color: 'white', backgroundColor:'#091d40', padding: '20px 20px 40px',
                border:'1px solid white', margin: '0 70px'}}>
                <h4>
                    Terms & Conditions for 0% Installment on this promotion
                </h4>
                <p>This promotion period is between 1 June 2023 - 30 September 2023, only participating retail shops, products and banks. Please check the terms, conditions and more details at the point of sale. Some products are available only at certain retail shops. Payment terms or credit cash back are as specified by the card owner's bank only. This promotion cannot be used in conjunction with other promotions. The company reserves the right to cancel or change details without prior notice.</p>
            </div>
            <div style={{textAlign: 'center',  color: 'white', backgroundColor:'#091d40', padding: '10px',
                border:'1px solid white', margin: '0 70px', fontWeight: 600, fontSize: '24px'}}>
                {promotions.name}
            </div>
            <div>
                {promotions.name}
            </div>

        </div>
    );
}