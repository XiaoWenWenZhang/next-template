import CardPromotion from "src/components/CardPromotion";
import "../../styles/home.scss";
import Link from "next/link";
import dayjs from "dayjs";

export default async function Page() {
    const targetPath = 'https://twworkspace--vtexsgdemostore.myvtex.com/_v/Promotions';

    const requestInit = {
        method: 'GET',
        headers: {
            'X-VTEX-API-AppKey': 'vtexappkey-vtexsgdemostore-WDWTEM',
            'X-VTEX-API-AppToken': 'NSISRSOBPCPHVUKKFHJXEUXBPFQHXRNVXARJZLVJJJGPEWEJSVGIIYLDLQVRSDBDXRMKREBTQMFXABTVGYXANVDFDHXUCWNOSBIVLXIQUXEMYLUNPXMPHEWNIOPZLKTO'
        }
    }
    const promotionsListRes = await fetch(targetPath, requestInit)

    const promotionsList = await promotionsListRes.json();


    return (
        <div >
            <div className="body-container"><CardPromotion/></div>
            <div style={{position: 'relative'}}>
                <div >
                    <img style={{height: '400px'}} src="https://www.electrolux.co.th/contentassets/01324ffe07324eb89b7e5234346e68f9/promotion-banner-desktop-1900x500.jpg?preset=xlarge"
                         alt="promotion banner" />
                </div>
                <div style={{position: 'absolute', left: '5%', top: '40%',
                    backgroundColor:'rgba(1,30,65,.92)', color: '#dfe7ea', width: '460px'}}>
                    <h1 style={{margin: '50px', textAlign:'left'}}>Promotions</h1>
                </div>
            </div>
            <div style={{display: "flex", flexDirection: 'row', justifyContent: "space-around", margin: '0 70px'}}>
                {
                    promotionsList.map(promotion => (
                        <div style={{padding: '0 15px', width: '360px'}}>
                            <Link style={{cursor: 'pointer'}}
                                  href={`/promotions/detail/${promotion?.idCalculatorConfiguration}`}>
                                <img src="https://www.electrolux.co.th/contentassets/4a465116e1224b25819d1f5ac24228a5/doubleclean-464x261-updateden.jpg?preset=medium" alt="img"/>
                            </Link>
                            <div style={{height: '140px'}}>
                                <Link href={`/promotions/detail/${promotion?.idCalculatorConfiguration}`}>
                                    <div style={{fontSize: '32px', fontWeight: 600, cursor: 'pointer'}} key={promotion.name}>
                                        {promotion.name}
                                    </div>
                                </Link>
                                <div>Event period:{dayjs(promotion?.beginDate).format('DD/MM/YYYY')} - {dayjs(promotion?.endDate).format('DD/MM/YYYY')}</div>

                            </div>
                            <div style={{cursor: 'pointer'}}>
                                <Link
                                    href={`/promotions/detail/${promotion?.idCalculatorConfiguration}`}
                                    style={{padding: '8px 10px',  border: '1px solid transparent', borderRadius: '2px',
                                    fontSize: '14px', fontWeight: 600,
                                    backgroundColor:'rgba(1,30,65,.92)', color: '#dfe7ea'}}>VIEW DETAILS</Link>
                            </div>
                        </div>

                    ))
                }
            </div>

        </div>
    );
}