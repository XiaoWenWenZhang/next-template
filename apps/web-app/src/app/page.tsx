'use client'
import Link from "next/link";
import {useContext} from "react";
import {CatalogsContext} from "src/catalogs.context";
import '../styles/home.scss';

export default function IndexPage() {
    const {secondCatalogs} = useContext(CatalogsContext);

    const promotionCampaignList = [
        {
            title: "30 days Free return & exchange*",
            imageUrl: "https://www.electrolux.co.th/contentassets/c940e37755bf4b408a47d3f628612e34/free-installment.svg"
        },
        {
            title: "Free shipping",
            imageUrl: "https://www.electrolux.co.th/contentassets/5fa069347126452bb298d315be8f4606/free-return.svg"
        },
        {
            title: "Free installation*",
            imageUrl: "https://www.electrolux.co.th/contentassets/e84c7f04659e4e50930a1a2c254ef7d0/image2vector-4.svg"
        },
        {
            title: "0% installment*",
            imageUrl: "https://www.electrolux.co.th/contentassets/3359f875831844d5b7bf3a0597c76ac4/free-shipping-test.svg"
        },
        {
            title: "1-year extended warranty",
            imageUrl: "https://www.electrolux.co.th/contentassets/de1dbf65d00247b0bf3cfb041baec813/image2vector-5.svg"
        }
    ]

    return (
        <div className='body-container'>
            <div className='promotion-campaign-banner'>
                {
                    promotionCampaignList.map(promotionCampaignItem => (
                        <div key={promotionCampaignItem.title} className='promotion-campaign-banner__item'>
                            <div className='promotion-campaign-banner__item-wrapper'>
                                <img className='promotion-campaign-banner__item-img'
                                     src={promotionCampaignItem.imageUrl}
                                     alt={promotionCampaignItem.title}/>
                                <div className='promotion-campaign-banner__item-text'>
                                    {promotionCampaignItem.title}
                                </div>
                            </div>

                        </div>
                    ))
                }

            </div>

            {secondCatalogs.map(catalog => (
                <div key={catalog.id} style={{flex: '1', alignSelf: 'flex-start', padding: '80px'}}>
                    <Link
                        href={`/appliances/${catalog.alias}`}
                    >
                        <img src="https://raw.githubusercontent.com/mswjs/msw/HEAD/media/msw-logo.svg"
                             alt="Microwave oven navigation" width="100" height="100" io-loaded="true"/>
                    </Link>
                    <div>
                        {catalog.name}
                    </div>
                </div>
            ))}

        </div>
    );
}
