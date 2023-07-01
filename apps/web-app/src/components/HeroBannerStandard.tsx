'use client'
import {Carousel} from '@mantine/carousel';
import {Paper} from '@mantine/core';
import "../styles/HeroBannerStandard.scss";
import BasicCard from "src/components/BasicCard";

interface CardProps {
    id: number;
    imageUrl: string;
    cardTitle: string;
    cardContent?: string;
}

const PICTURE_LIST: CardProps[] = [
    {
        id: 1,
        imageUrl:
            "https://www.electrolux.co.th/contentassets/9cb68b5883954795b9a293fe94c904aa/bannerweb_kv_taste_new_2560x500.jpg?preset=h500",
        cardTitle: "New french door refrigerator UltimateTaste 700 seals in flavours & nutrients",
    },
    {
        id: 2,
        imageUrl:
            "https://www.electrolux.co.th/contentassets/184a9dbecc7d439d8c84a61fe34d9b69/bannerweb-kv-npd-sakura-751x731-2.jpg",
        cardTitle: "New UltimateHome 700 Lightweight handstick vacuum cleaner",
    },
    {
        id: 3,
        imageUrl:
            "https://www.electrolux.co.th/contentassets/edf76e941d8340b3ad37679c2089a33b/supercleanx2-750x730.1.jpg",
        cardTitle: "Super clean",
        cardContent: "1 May 2023 - 30 June 2023",
    },
    {
        id: 4,
        imageUrl:
            "https://www.electrolux.co.th/contentassets/3fc3eda64fee49f79db5be4ad6731c2b/laundryday-750x730.jpg",
        cardTitle: "Super Clean for Rainy Season",
        cardContent: "1 June 2023 - 30 September 2023",
    },
    {
        id: 5,
        imageUrl:
            "https://www.electrolux.co.th/globalassets/d2c-th/better-living/make--it-last-taste-care/website-make-it-last-care-750x730-min.jpg",
        cardTitle: "MAKE IT LAST",
        cardContent: "With Electrolux UltimateCare, you can give your clothes a longer life, for a more sustainable future",
    },
    {
        id: 6,
        imageUrl:
            "https://www.electrolux.co.th/globalassets/d2c-th/better-living/make--it-last-taste-care/elx-mb-750x730.jpg",
        cardTitle: "MAKE IT LAST",
        cardContent: "With Electrolux UltimateTaste, you can eat more sustainably without compromising on flavour."
    },
];

function Card({imageUrl, cardTitle, cardContent}: CardProps) {
    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            sx={{backgroundImage: `url(${imageUrl})`, backgroundRepeat: "no-repeat"}}
            className="card">
            <BasicCard title={cardTitle} buttonAction="read more"
                       content={cardContent}/>
        </Paper>
    );
}

function HeroBannerStandard() {
    const slides = PICTURE_LIST.map((item) => (
        <Carousel.Slide key={item.id}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <Carousel
            breakpoints={[{maxWidth: 'sm', slideSize: '100%'}]}
            align="start"
            withIndicators
            loop={true}
            className="slick-list"
        >
            {slides}
        </Carousel>
    );
}

export default HeroBannerStandard;
