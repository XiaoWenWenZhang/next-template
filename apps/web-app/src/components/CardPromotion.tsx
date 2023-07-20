import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../styles/BasicCard.scss";
import Image from "next/image";

const PROMOTION_CAMPAIGN_LIST = [
    {
        title: "30 days Free return & exchange*",
        imageUrl: "https://www.electrolux.co.th/contentassets/c940e37755bf4b408a47d3f628612e34/free-installment.svg",
    },
    {
        title: "Free shipping",
        imageUrl: "https://www.electrolux.co.th/contentassets/5fa069347126452bb298d315be8f4606/free-return.svg",
    },
    {
        title: "Free installation*",
        imageUrl: "https://www.electrolux.co.th/contentassets/e84c7f04659e4e50930a1a2c254ef7d0/image2vector-4.svg",
    },
    {
        title: "0% installment*",
        imageUrl: "https://www.electrolux.co.th/contentassets/3359f875831844d5b7bf3a0597c76ac4/free-shipping-test.svg",
    },
    {
        title: "1-year extended warranty",
        imageUrl: "https://www.electrolux.co.th/contentassets/de1dbf65d00247b0bf3cfb041baec813/image2vector-5.svg",
    },
];

export default function CardPromotion() {
    return (
        <div className="promotion-campaign-banner">
            {PROMOTION_CAMPAIGN_LIST.map((promotionCampaignItem, index) => (
                <div key={index} className="promotion-campaign-banner__item">
                    <div className="promotion-campaign-banner__item-wrapper">
                        <Image
                            className="promotion-campaign-banner__item-img"
                            src={promotionCampaignItem.imageUrl}
                            alt={promotionCampaignItem.title}
                            width="32"
                            height="32"
                        />
                        <div className="promotion-campaign-banner__item-text">{promotionCampaignItem.title}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
